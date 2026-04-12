import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from "../../styles/componentsStyles/homepageStyles/HomePrePos.module.css"
import { useLanguage } from '../context/LanguageContext';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.active : ''}`}>
      <button className={styles.accordionHeader} onClick={onClick}>
        <span className={styles.accordionTitle}>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={styles.accordionContentWrapper}
          >
            <div className={styles.accordionContent}>
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const HomePrePos = ({ items = [] }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 8000); // 8 segundos por slide
    return () => clearInterval(timer);
  }, [items.length, isPaused]);

  const handleNext = (e) => {
    e.stopPropagation();
    setIsPaused(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setIsPaused(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleInteraction = () => {
    setIsPaused(true);
  };

  if (items.length === 0) return null;

  const handleToggle = (cardIndex, accIndex) => {
    setOpenIndex(prev => ({
      ...prev,
      [cardIndex]: prev[cardIndex] === accIndex ? -1 : accIndex
    }));
  };

  // Swipe handling logic
  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
      setIsPaused(true);
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }
      if (touchEndX > touchStartX + 50) {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [items.length]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.carouselWrapper}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              ref={carouselRef}
              className={styles.projectCard}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={handleInteraction}
            >
              {/* Setas dentro do Card */}
              <button className={`${styles.navArrow} ${styles.prev}`} onClick={handlePrev}>
                <ChevronLeft size={24} />
              </button>
              
              <button className={`${styles.navArrow} ${styles.next}`} onClick={handleNext}>
                <ChevronRight size={24} />
              </button>

              <div className={styles.backgroundAccent}>
                0{currentIndex + 1}
              </div>

              <div className={styles.imageSection}>
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                  src={items[currentIndex].cartaz} 
                  alt={items[currentIndex].title} 
                  className={styles.mainImage} 
                />
                <div className={styles.badge}>
                  {items[currentIndex].badge || (currentIndex === 0 ? "PRODUÇÃO" : "MARKETING")}
                </div>
              </div>
              
              <div className={styles.infoSection}>
                <div className={styles.categoryTag}>
                  {items[currentIndex].category || (currentIndex === 0 ? "ESTRATÉGIA & EXECUÇÃO" : "ESTRATÉGIA & CRESCIMENTO")}
                </div>
                
                <motion.h2 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={styles.cardTitle}
                >
                  {items[currentIndex].title}
                </motion.h2>
                
                <div className={styles.editorialLine} />
                
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className={styles.cardDescription}
                >
                  {items[currentIndex].description}
                </motion.p>
                
                <div className={styles.accordionList}>
                  {items[currentIndex].accordionItems.map((acc, accIndex) => (
                    <AccordionItem 
                      key={accIndex}
                      title={acc.title}
                      content={acc.content}
                      isOpen={openIndex[currentIndex] === accIndex}
                      onClick={(e) => {
                        e.stopPropagation(); // Não herdar clique do card
                        setIsPaused(true);
                        handleToggle(currentIndex, accIndex);
                      }}
                    />
                  ))}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(items[currentIndex].link);
                  }} 
                  className={styles.ctaButton}
                >
                  {t("homePrePosPage.botaoGeral")}
                  <ArrowUpRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.dotsContainer}>
            {items.map((_, i) => (
              <div 
                key={i} 
                className={`${styles.dot} ${currentIndex === i ? styles.activeDot : ''}`}
                onClick={() => {
                  setIsPaused(true);
                  setCurrentIndex(i);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
