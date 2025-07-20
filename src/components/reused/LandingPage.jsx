import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../components/translationComponents/LanguageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from "../../styles/componentsStyles/reusedStyles/LandingPage.module.css";

import logoCine4 from "../../assets/productionMedia/logofooter2.png";
import video1 from "../../assets/productionMedia/video1.mp4";

export const LandingPage = ({ 
  videoSrc = video1,
  businessText,
  filmProductionsText,
  descriptionText,
  watchButtonText

}) => {
  const { t } = useLanguage();
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  const displayText = (customText, translationKey) => 
    customText !== undefined ? customText : t(translationKey);

  const getText = (customText, translationKey) => {
    return customText !== undefined ? customText : t(translationKey);
  };

  const resolvedBusinessText = getText(businessText, 'landingPage.business');
  const resolvedFilmProductionsText = getText(filmProductionsText, 'landingPage.filmProductions');
  const resolvedDescriptionText = getText(descriptionText, 'landingPage.description');
  const resolvedWatchButtonText = getText(watchButtonText, 'landingPage.watchButton');
 

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;

    if (showVideoModal) {
      const scrollbarWidth = window.innerWidth - html.clientWidth;
      
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollbarWidth}px`;
      html.classList.add(styles.noScroll);
      
      if (modalVideoRef.current) {
        modalVideoRef.current.play();
      }
    } else {
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      body.style.paddingRight = '';
      html.classList.remove(styles.noScroll);
      window.scrollTo(0, scrollY);
      
      if (modalVideoRef.current) {
        modalVideoRef.current.pause();
      }
    }

    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      body.style.paddingRight = '';
      html.classList.remove(styles.noScroll);
      window.scrollTo(0, scrollY);
    };
  }, [showVideoModal]);

  const toggleVideoModal = () => {
    setShowVideoModal(!showVideoModal);
  };

  return (
    <div className={styles.box}>
      <div className={styles.home}>
        <div className={styles.overlap_group}>
          <div className={styles.video_container}>
            <div className={styles.gradient_overlay} />
            <video
              ref={videoRef}
              className={styles.video_player}
              src={videoSrc} 
              loop
              muted
              autoPlay
              playsInline
            />
          </div>

          <div className={styles.frame}>
            <div className={styles.div}>
              <div className={styles.text_wrapper}>{displayText(businessText, 'landingPage.business')}</div>
              <div className={styles.group}>
                <img 
                className={styles.img}
                alt=""
                src={logoCine4} 
                />

                {/*<img
                  className={styles.img}
                  alt="Group"
                  src={logoMarca}
                />
                <img
                  className={styles.vector}
                  alt="Vector"
                  src="https://c.animaapp.com/hSTv3Klm/img/vector.svg"
                />*/}
              </div>
            </div>

            <div className={styles.frame_2}>
              <div className={styles.text_wrapper_2}>{resolvedFilmProductionsText}</div>
              <p className={styles.escolha_a_melhor_op}>
              {resolvedDescriptionText}
              </p>
            </div>
          </div>

          <button className={styles.play_button} onClick={toggleVideoModal}>
            <FontAwesomeIcon 
              icon={faPlay} 
              className={styles.play_icon} 
            />
            <div className={styles.text_wrapper_5}>
            {displayText(watchButtonText, 'landingPage.watchButton')}
            </div>
          </button>
        </div>
      </div>

      {showVideoModal && (
        <div className={styles.video_modal}>
          <div className={styles.video_modal_backdrop} onClick={toggleVideoModal} />
          <div className={styles.video_modal_container}>
          <div className={styles.video_modal_content}>
            <video
              ref={modalVideoRef}
              className={styles.modal_video_player}
              src={videoSrc}
              controls
              autoPlay
            />
          </div>
            <button 
              className={styles.close_button} 
              onClick={toggleVideoModal}
              aria-label="Fechar vídeo"
            >
              <FontAwesomeIcon icon={faTimes} className={styles.close_icon} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};