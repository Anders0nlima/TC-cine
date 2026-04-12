import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../styles/componentsStyles/reusedStyles/HomeLandingPage.module.css';
import { BlurText } from '../animations/BlurText';
import { MagneticEffect } from '../animations/MagneticEffect';

import video1 from "../../assets/homeMedia/homenavbar/publi.mov"; 
import video2 from "../../assets/homeMedia/homenavbar/doc.mov"; 
import video3 from "../../assets/homeMedia/homenavbar/fic2.mov"; 

import { useLanguage } from '../context/LanguageContext';

const VIDEO_CATEGORIES = [
    { labelKey: "homeLandingPage.cat1", videoSrc: video1 },
    { labelKey: "homeLandingPage.cat2", videoSrc: video2 },
    { labelKey: "homeLandingPage.cat3", videoSrc: video3 },
];

export const HomeLandingPage = ({ 
    titleText,
    descriptionText,
    watchButtonText
}) => {
    const { t } = useLanguage();
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const videoRef = useRef(null);
    const modalVideoRef = useRef(null);

    const nextVideo = useCallback(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % VIDEO_CATEGORIES.length);
    }, []);

    const selectVideo = (index) => {
        setCurrentVideoIndex(index);
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(e => console.log("Autoplay blocked", e));
        }
    }, [currentVideoIndex]);

    const currentVideoSrc = VIDEO_CATEGORIES[currentVideoIndex].videoSrc;

    return (
        <div className={styles.landingPageContainer}>
            <div className={styles.heroSection}>
                <div className={styles.videoContainer}>
                    <video
                        ref={videoRef}
                        key={currentVideoSrc}
                        className={styles.backgroundVideo} 
                        src={currentVideoSrc}
                        muted
                        autoPlay
                        playsInline
                        onEnded={nextVideo}
                    />
                    <div className={styles.videoOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <div className={styles.textContent}>
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={styles.categoryButtonsContainer}
                        >
                            {VIDEO_CATEGORIES.map((category, index) => (
                                <button
                                    key={index}
                                    className={`${styles.categoryButton} ${index === currentVideoIndex ? styles.active : ''}`}
                                    onClick={() => selectVideo(index)}
                                >
                                    {t(category.labelKey)}
                                </button>
                            ))}
                        </motion.div>

                        <div className={styles.heroTitleWrapper}>
                            <BlurText 
                                text={titleText || t("homeLandingPage.titleText")}
                                delay={0.3}
                                className={styles.heroTitle}
                                animateBy="words"
                                direction="top"
                            />
                        </div>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className={styles.heroDescription}
                        >
                            {descriptionText || t("homeLandingPage.descriptionText")}
                        </motion.p>
                    </div>

                    <div className={styles.watchButtonWrapper}>
                        <MagneticEffect strength={0.2}>
                            <motion.button 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 }}
                                className={styles.watchButton} 
                                onClick={() => setShowVideoModal(true)}
                            >
                                <Play size={18} fill="currentColor" />
                                <span>{watchButtonText || t("homeLandingPage.watchButtonText")}</span>
                            </motion.button>
                        </MagneticEffect>
                    </div>
                </div>
                
            </div>

            <AnimatePresence>
                {showVideoModal && (
                    <motion.div 
                        className={styles.videoModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className={styles.videoModalBackdrop} onClick={() => setShowVideoModal(false)} />
                        <motion.div 
                            className={styles.videoModalContent}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <video
                                ref={modalVideoRef}
                                className={styles.modalVideo}
                                src={currentVideoSrc}
                                controls
                                autoPlay
                            />
                            <button 
                                className={styles.closeButton} 
                                onClick={() => setShowVideoModal(false)}
                            >
                                <X size={32} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
