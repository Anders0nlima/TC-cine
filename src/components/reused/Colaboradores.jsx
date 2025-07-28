import { useState } from 'react';
import styles from "../../styles/componentsStyles/reusedStyles/Colaboradores.module.css"
import { FaChevronDown } from "react-icons/fa";

const Colaboradores = ({
  titulo,
  tituloPrincipal,
  descricao,
  itensAccordion,
  filmeCartaz,
  botaoUm,
  botaoDois,
  botaoTres
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('experiencia'); // Estado para controlar a aba ativa

  const accordionContent = itensAccordion;

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveIndex(0); // Reseta para o primeiro item ao mudar de tab
  };

  const currentAccordionItems = accordionContent[activeTab];

  return (
    <section id="visao-geral" name="visao-geral" className={styles.section}> 
    <div className={styles.primeiroContudo}>
      <h4>{titulo}</h4>
      <h1>{tituloPrincipal}</h1>
      <p>{descricao}</p>
    </div>

    <div className={styles.segundoContudo}>
      {/* Container principal do accordion e botões */}
      <div className={styles.accordionContainer}>
        {/* Botões de navegação - agora estão em um container separado acima do accordion */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabButtons}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'experiencia' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('experiencia')}
            >
              {botaoUm}
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'otimizacao' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('otimizacao')}
            >
              {botaoDois}
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'organizacao' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('organizacao')}
            >
              {botaoTres}
            </button>
          </div>
        </div>

        {/* Accordion - ocupa 6 colunas */}
        <div className={styles.accordionWrapper}>
          <div className={styles.accordion}>
            {currentAccordionItems.map((item, index) => (
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
      </div>

      {/* Cartaz do filme - ocupa 6 colunas */}
      {/* antigo cartaz */}
      {/*<div className={styles.cartazWrapper}>
        <div className={styles.cartazContainer}>
          <img 
            src={filmeCartaz} 
            alt="Cartaz do Filme" 
            className={styles.cartaz}
          />
        </div>
      </div>*/}

      {/* novo cartaz */}
      <div className={styles.cartazWrapper}>
        {/*<div className={styles.cartazContainer}>*/}
          <img 
            src={filmeCartaz} 
            alt="Cartaz do Filme" 
            className={styles.cartazNovo}
          />
        </div>
      {/*</div>*/}

    </div>
  </section>
  );
};

export default Colaboradores;