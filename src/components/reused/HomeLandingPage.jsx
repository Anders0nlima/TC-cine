import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/componentsStyles/reusedStyles/HomeLandingPage.module.css';

// Importe seus 3 vídeos aqui. Substitua pelos caminhos reais.
import video1 from "../../assets/homeMedia/homenavbar/Timeline2.mov"; // Exemplo: Publicidade Timeline2.mov
import video2 from "../../assets/homeMedia/homenavbar/doc.mov"; // Exemplo: Documentário  Trailertccine.mov
import video3 from "../../assets/homeMedia/homenavbar/fic2.mov"; // Exemplo: Ficção

import { useLanguage } from '../translationComponents/LanguageContext';

const VIDEO_CATEGORIES = [
    { labelKey: "homeLandingPage.cat1", videoSrc: video1 || video2 },
    { labelKey: "homeLandingPage.cat2", videoSrc: video2 },
    { labelKey: "homeLandingPage.cat3", videoSrc: video3 || video2 },
];

const AUTOPLAY_INTERVAL_MS = 10000; // Troca a cada 10 segundos

export const HomeLandingPage = ({ 
    videoSrc: initialVideoSrc,
    titleText,
    descriptionText,
    watchButtonText
}) => {
    const { t } = useLanguage();

    const defaultTitleText = t("homeLandingPage.titleText");
    const defaultDescriptionText = t("homeLandingPage.descriptionText");
    const defaultWatchButtonText = t("homeLandingPage.watchButtonText");
    
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [showVideoModal, setShowVideoModal] = useState(false);
    // NOVO ESTADO: Controla se o loop automático deve estar ativo
    const [isLoopActive, setIsLoopActive] = useState(true);
    
    const videoRef = useRef(null);
    const modalVideoRef = useRef(null);

    // Função para trocar o vídeo (manual ou automático)
    const selectVideo = useCallback((index) => {
        // Quando o usuário clica, a atividade de loop deve ser pausada temporariamente
        setIsLoopActive(false); 
        
        if (videoRef.current) {
            videoRef.current.classList.add(styles.videoFading);
            setTimeout(() => {
                setCurrentVideoIndex(index);
                videoRef.current.classList.remove(styles.videoFading);
                
                // Reinicia o loop após um pequeno delay, mas apenas se o modal não estiver aberto.
                // Isso garante que um clique manual não interrompa permanentemente.
                setTimeout(() => {
                    if (!showVideoModal) {
                        setIsLoopActive(true);
                    }
                }, 500); 
            }, 500);
        } else {
            setCurrentVideoIndex(index);
            if (!showVideoModal) {
                setIsLoopActive(true);
            }
        }
    }, [showVideoModal]); // Adicionado showVideoModal como dependência

    // EFEITO CORRIGIDO: Gerencia o loop de troca automática
    useEffect(() => {
        let intervalId;
        
        if (isLoopActive) {
            intervalId = setInterval(() => {
                setCurrentVideoIndex(prevIndex => 
                    (prevIndex + 1) % VIDEO_CATEGORIES.length
                );
            }, AUTOPLAY_INTERVAL_MS);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId); // Limpa o intervalo ao pausar ou desmontar
            }
        };
    }, [isLoopActive]); // Roda sempre que a atividade do loop muda

    // Efeito para garantir que o vídeo principal comece a tocar
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
            });
        }
    }, [currentVideoIndex]);

    // Lógica do Modal Corrigida
    const toggleVideoModal = () => {
        const newState = !showVideoModal;
        setShowVideoModal(newState);

        // Se estiver abrindo o modal, PAUSA o loop.
        if (newState) {
            setIsLoopActive(false);
        } else {
            // Se estiver fechando o modal, REINICIA o loop.
            setIsLoopActive(true);
        }
    };

    // --- Lógica de Scroll e Modal (mantida a sua original, mas usando a nova função toggle) ---
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
            if (!isNaN(scrollY)) { 
                window.scrollTo(0, scrollY);
            }
            
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
            if (!isNaN(scrollY)) {
                window.scrollTo(0, scrollY);
            }
        };
    }, [showVideoModal]);


    const currentVideoSrc = VIDEO_CATEGORIES[currentVideoIndex].videoSrc;
    
    // Renderiza a barra de botões de categoria
    const renderCategoryButtons = () => (
        <div className={styles.categoryButtonsContainer}>
            {VIDEO_CATEGORIES.map((category, index) => (
                <button
                    key={index}
                    className={`${styles.categoryButton} ${index === currentVideoIndex ? styles.active : ''}`}
                    onClick={() => selectVideo(index)}
                    // REFORMULADO: Remove o onMouseDown/onMouseUp complexo. O `selectVideo` já gerencia o loop.
                >
                    {t(category.labelKey, category.labelKey)}
                </button>
            ))}
        </div>
    );

    return (
        <div className={styles.landingPageContainer}>
            {/* ... Seu JSX (seção principal, vídeo, conteúdo) permanece o mesmo ... */}
            <div className={styles.heroSection}>
                <div className={styles.videoContainer}>
                    <video
                        ref={videoRef}
                        key={currentVideoSrc}
                        className={`${styles.backgroundVideo} ${styles.videoFading}`}
                        src={currentVideoSrc}
                        loop
                        muted
                        autoPlay
                        playsInline
                    />
                    <div className={styles.videoOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>{titleText || defaultTitleText}</h1>
                    
                    {/* Aqui o heroDescription deve vir ANTES dos botões para o layout da imagem */}
                    <p className={styles.heroDescription}>{descriptionText || defaultDescriptionText}</p>
                    
                    {renderCategoryButtons()}
                    
                    {/* A seta está comentada no seu código, mantive comentada */}
                    {/*<div className={styles.arrowDownContainer}>...</div>*/}
                </div>

                {/* Botão de assistir */}
                <button className={styles.watchButton} onClick={toggleVideoModal}>
                    <FontAwesomeIcon icon={faPlay} className={styles.playIcon} />
                    <span>{watchButtonText || defaultWatchButtonText}</span>
                </button>
            </div>

            {/* Modal do vídeo */}
            {showVideoModal && (
                <div className={styles.videoModal}>
                    <div className={styles.videoModalBackdrop} onClick={toggleVideoModal} />
                    <div className={styles.videoModalContent}>
                        <video
                            ref={modalVideoRef}
                            className={styles.modalVideo}
                            src={currentVideoSrc}
                            controls
                            autoPlay
                        />
                        <button 
                            className={styles.closeButton} 
                            onClick={toggleVideoModal}
                            aria-label="Fechar vídeo"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};