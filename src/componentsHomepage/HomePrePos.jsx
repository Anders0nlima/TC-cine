import { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import styles from "../styles/componentsStyles/homepageStyles/HomePrePos.module.css"
import { BotaoGeral } from '../components/reused/BotaoGeral';
import { useLanguage } from '../components/translationComponents/LanguageContext';

export const HomePrePos = ({ items = [] }) => {
  const { t } = useLanguage();
  if (items.length === 0) return <div>Nenhum item para exibir</div>;
    // Estado para controlar o accordion
    const [activeIndex, setActiveIndex] = useState(0);
    
    // Estado para controlar o item atual
    const [currentItem, setCurrentItem] = useState(0);

    // Função para alternar os itens do accordion
    const toggleItem = (index) => {
      if (activeIndex !== null) {
        setActiveIndex(null);
        setTimeout(() => setActiveIndex(index), 150); // Pequeno delay para animação
      } else {
        setActiveIndex(index);
      }
    };

    // Funções para navegar entre os itens
  const nextItem = () => {
    setCurrentItem((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevItem = () => {
    setCurrentItem((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };
    
  
    return (
      <>
        <section className={styles.section}>
          <div className={styles.container}>
            {/* Lado esquerdo */}
            <div className={styles.leftSide}>
              <div className={styles.header}>
                <h2 className={styles.title}>{items[currentItem].title}</h2>
                <div className={styles.controls}>
                  <button onClick={prevItem} className={styles.controlButton}>
                    <FaChevronLeft />
                  </button>
                  <button onClick={nextItem} className={styles.controlButton}>
                    <FaChevronRight />
                  </button>
                </div>
              </div>
              
              <p className={styles.description}>{items[currentItem].description}</p>
            
            <div className={styles.accordionWrapper}>
              <div className={styles.accordion}>
                {items[currentItem].accordionItems.map((item, index) => (
                  <div key={index} className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}>
                    <h2 className={styles.accordionHeader}>
                      <button 
                        className={`${styles.accordionButton} ${activeIndex === index ? styles.active : ''}`}
                        onClick={() => toggleItem(index)}
                        type="button"
                      >
                        {item.title}
                        <FaChevronDown className={`${styles.accordionIcon} ${activeIndex === index ? styles.rotate : ''}`} />
                      </button>
                    </h2>
                    <div 
                      className={`${styles.accordionCollapse} ${activeIndex === index ? styles.show : ''}`}
                    >
                      <div className={styles.accordionBody}>
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <BotaoGeral
            texto={t("homePrePosPage.botaoGeral")}
            link={items[currentItem].link}
            />
            </div>
            
            {/* Lado direito */}
            <div className={styles.rightSide}>
              <div className={styles.cartazWrapper}>
                <div className={styles.cartazContainer}>
                  <img 
                    src={items[currentItem].cartaz} 
                    alt="Cartaz do Filme" 
                    className={styles.cartaz}
                  />
                </div>
                {/* Indicador de paginação */}
                 <div className={styles.dotsContainer}>
                 {items.map((_, index) => (
                  <button
                   key={index}
                   className={`${styles.dot} ${currentItem === index ? styles.activeDot : ''}`}
                   onClick={() => setCurrentItem(index)}
                  />
                  ))}
                 </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };