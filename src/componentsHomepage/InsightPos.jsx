import { useState, useRef, useEffect } from 'react';
import styles from "../styles/componentsStyles/homepageStyles/InsightPos.module.css";
import { useLanguage } from '../components/translationComponents/LanguageContext';

const InsightPos = (props) => {
  const { t } = useLanguage();
  
  // Objeto com os valores padrão traduzidos
  const defaultProps = {
    titulo: t("insightPos.title"),
    tituloPrincipal: t("insightPos.mainTitle"),
    descricao: t("insightPos.description"),
    tabs: {
      experiencia: {
        nome: t("insightPos.bottonExp"),
        cards: [
          {
            title: t("insightPos.titleExpU"),
            mainTitulo: t("insightPos.mainTituloExpU"),
            subtitle: t("insightPos.subTitleExpU"),
            content: t("insightPos.contentExpU")
          },
          {
            title: t("insightPos.titleExpD"),
            mainTitulo: t("insightPos.mainTituloExpD"),
            subtitle: t("insightPos.subTitleExpD"),
            content: t("insightPos.contentExpD")
          },
          {
            title: t("insightPos.titleExpT"),
            mainTitulo: t("insightPos.mainTituloExpT"),
            subtitle: t("insightPos.subTitleExpT"),
            content: t("insightPos.contentExpT")
          }
        ]
      },
      otimizacao: {
        nome: t("insightPos.bottonOtm"),
        cards: [
          {
            title: t("insightPos.titleOtmU"),
            mainTitulo: t("insightPos.mainTituloOtmU"),
            subtitle: t("insightPos.subTitleOtmU"),
            content: t("insightPos.contentOtmU")
          },
          {
            title: t("insightPos.titleOtmD"),
            mainTitulo: t("insightPos.mainTituloOtmD"),
            subtitle: t("insightPos.subTitleOtmD"),
            content: t("insightPos.contentOtmD")
          },
          {
            title: t("insightPos.titleOtmT"),
            mainTitulo: t("insightPos.mainTituloOtmT"),
            subtitle: t("insightPos.subTitleOtmT"),
            content: t("insightPos.contentOtmT")
          }
        ]
      },
      organizacao: {
        nome: t("insightPos.bottonOrg"),
        cards: [
          {
            title: t("insightPos.titleOrgU"),
            mainTitulo: t("insightPos.mainTituloOrgU"),
            subtitle: t("insightPos.subTitleOrgU"),
            content: t("insightPos.contentOrgU")
          },
          {
            title: t("insightPos.titleOrgD"),
            mainTitulo: t("insightPos.mainTituloOrgD"),
            subtitle: t("insightPos.subTitleOrgD"),
            content: t("insightPos.contentOrgD")
          },
          {
            title: t("insightPos.titleOrgT"),
            mainTitulo: t("insightPos.mainTituloOrgT"),
            subtitle: t("insightPos.subTitleOrgT"),
            content: t("insightPos.contentOrgT")
          }
        ]
      }
    }
  };

  // Combina as props recebidas com os valores padrão
  const { titulo, tituloPrincipal, descricao, tabs } = { ...defaultProps, ...props };

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
        <h4>{titulo}</h4>
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
              <div 
                key={index}
                className={`${styles.card} ${styles[position + 'Card']}`}
              >
                <span className={styles.cardTitle}>{card.title}</span>
                <h3 className={styles.cardMainTitle}>{card.mainTitulo}</h3>
                <div className={styles.cardUnderline}></div>
                <span className={styles.cardSubtitle}>{card.subtitle}</span>
                <p className={styles.cardContent}>{card.content}</p>
              </div>
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