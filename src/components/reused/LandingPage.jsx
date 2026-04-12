import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Play, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import styles from "../../styles/componentsStyles/reusedStyles/LandingPage.module.css";

import logoCine4 from "../../assets/homeMedia/homenavbar/logoCine3.png";
import video1 from "../../assets/productionMedia/video1.mp4";

export const LandingPage = ({ 
  videoSrc = video1,
  businessText,
  filmProductionsText,
  descriptionText,
  watchButtonText,
  ctaText
}) => {
  const { t } = useLanguage();
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const navigate = useNavigate();

  const resolvedBusinessText = businessText || t('landingPage.business');
  const resolvedFilmProductionsText = filmProductionsText || t('landingPage.filmProductions');
  const resolvedDescriptionText = descriptionText || t('landingPage.description');
  const resolvedWatchButtonText = watchButtonText || t('landingPage.watchButton');
  const resolvedCtaText = ctaText || t('landingPage.cta') || t('navbar.cta') || "Solicitar Orçamento";

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setShowVideoModal(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const handleScrollClick = () => {
    const nextSection = document.getElementById('producao-geral');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.home}>
        <div className={styles.overlap_group}>
          <div className={styles.video_container}>
            <div className={styles.gradient_overlay} />
            <motion.video
              initial={{ scale: 1.45, opacity: 0 }}
              animate={{ scale: 1.3, opacity: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              ref={videoRef}
              className={styles.video_player}
              src={videoSrc} 
              loop
              muted
              autoPlay
              playsInline
            />
          </div>

          <motion.div 
            className={styles.frame}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className={styles.text_wrapper}>
              {resolvedBusinessText}
            </motion.div>
            
            <motion.img 
              variants={itemVariants}
              className={styles.img}
              alt="TC | CINE"
              src={logoCine4} 
            />

            <div className={styles.frame_2}>
              <motion.h2 variants={itemVariants} className={styles.text_wrapper_2}>
                {resolvedFilmProductionsText}
              </motion.h2>
              <motion.p variants={itemVariants} className={styles.escolha_a_melhor_op}>
                {resolvedDescriptionText}
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className={styles.button_group}>
              <button 
                className={styles.cta_primary}
                onClick={() => navigate('/suporte')}
              >
                {resolvedCtaText}
              </button>
              
              <button className={styles.play_button} onClick={() => setShowVideoModal(true)}>
                <Play size={18} fill="currentColor" />
                <span>{resolvedWatchButtonText}</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showVideoModal && (
          <motion.div 
            className={styles.video_modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.video_modal_container}>
              <button className={styles.close_button} onClick={() => setShowVideoModal(false)}>
                <X size={40} />
              </button>
              <video
                ref={modalVideoRef}
                className={styles.modal_video_player}
                src={videoSrc}
                controls
                autoPlay
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
