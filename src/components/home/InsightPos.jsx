import { useState, useRef, useEffect } from 'react';
import styles from "../../styles/componentsStyles/homepageStyles/InsightPos.module.css";
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { getInsightData } from '../../data/insightData.jsx';

const InsightPos = (props) => {
  const { t } = useLanguage();
  
  // Combina as props recebidas com os valores padrão vindos do factory
  const data = { ...getInsightData(t), ...props };
  const { titulo, tituloPrincipal, descricao, tabs } = data;

  const [activeTab, setActiveTab] = useState('experiencia');
  const [currentIndex, setCurrentIndex] = useState(1);
  const carouselRef = useRef();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(1);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + 3) % 3);
  };

  const getCardPosition = (index) => {
    if (index === currentIndex) return 'center';
    if (index === (currentIndex + 1) % 3) return 'right';
    return 'left';
  };

  const cardVariants = {
    center: { 
      x: 0, 
      scale: 1.1, 
      opacity: 1, 
      zIndex: 10,
      filter: 'blur(0px)',
      pointerEvents: 'all',
      boxShadow: '0 50px 100px rgba(0, 0, 0, 0.5)'
    },
    left: { 
      x: '-105%', 
      scale: 0.85, 
      opacity: 0.4, 
      zIndex: 5,
      filter: 'blur(2px)',
      pointerEvents: 'none'
    },
    right: { 
      x: '105%', 
      scale: 0.85, 
      opacity: 0.4, 
      zIndex: 5,
      filter: 'blur(2px)',
      pointerEvents: 'none'
    }
  };

  // Hook useSwipe corrigido
  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) handleNext(); // Swipe left = next
      if (touchEndX > touchStartX + 50) handlePrev(); // Swipe right = prev
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, activeTab]); // Dependências necessárias

  return (
    <section id="insight" name="insight" className={styles.section}> 
      <div className={styles.primeiroContudo}>
        <h4 className={styles.sectionTag}>{titulo}</h4>
        <h1>{tituloPrincipal}</h1>
        <p>{descricao}</p>
      </div>

      <div className={styles.segundoContudo}>
        <div className={styles.tabButtons}>
          {Object.entries(tabs).map(([tabId, { nome }]) => (
            <button 
              key={tabId}
              className={`${styles.tabButton} ${activeTab === tabId ? styles.activeTab : ''}`}
              onClick={() => handleTabChange(tabId)}
            >
              {nome}
            </button>
          ))}
        </div>

        <div className={styles.cardsContainer} ref={carouselRef}>
          {[0, 1, 2].map((index) => {
            const position = getCardPosition(index);
            const card = tabs[activeTab].cards[index];
            return (
              <motion.div 
                key={index}
                className={styles.card}
                variants={cardVariants}
                animate={position}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={position === 'center' ? { 
                  scale: 1.15, 
                  rotateY: 5, 
                  rotateX: 2,
                  transition: { duration: 0.4 }
                } : {}}
              >
                <div className={styles.cardInfo}>
                  <span className={styles.cardTag}>{card.title}</span>
                  <h3 className={styles.cardHeading}>{card.mainTitulo}</h3>
                  <p className={styles.cardText}>{card.content}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className={styles.navigationWrapper}>
          <div className={styles.navigationControls}>
            <button onClick={handlePrev} className={styles.navButton}>&lt;</button>
            <button onClick={handleNext} className={styles.navButton}>&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightPos;
