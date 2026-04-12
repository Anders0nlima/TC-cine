import { useState } from 'react';
import { motion } from "framer-motion";
import styles from "../../styles/componentsStyles/reusedStyles/Colaboradores.module.css";

const Colaboradores = ({
  titulo,
  tituloPrincipal,
  descricao,
  itensAccordion,
  filmeCartaz,
  botaoUm,
  botaoDois,
  botaoTres,
  activeTabOverride // NOVO PROP
}) => {
  const [internalTab, setInternalTab] = useState('experiencia');
  
  // Sincroniza com o dashboard mestre
  const activeTab = activeTabOverride !== undefined ? activeTabOverride : internalTab;

  const currentTabLabel = activeTab === 'experiencia' ? botaoUm : activeTab === 'otimizacao' ? botaoDois : botaoTres;
  const currentTabItems = itensAccordion[activeTab] || [];

  return (
    <section className={styles.section}> 
      {activeTabOverride === undefined && (
        <div className={styles.primeiroContudo}>
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {titulo}
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {tituloPrincipal}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {descricao}
          </motion.p>
        </div>
      )}

      <div className={styles.segundoContudo} style={{ gridTemplateColumns: activeTabOverride !== undefined ? '1fr' : '' }}>
        {/* Oculta o sidebar secundário se estiver no dashboard mestre */}
        {activeTabOverride === undefined && (
          <div className={styles.sidebar}>
            <button className={`${styles.tabButton} ${activeTab === 'experiencia' ? styles.activeTab : ''}`} onClick={() => setInternalTab('experiencia')}>
              <span>{botaoUm}</span>
            </button>
            <button className={`${styles.tabButton} ${activeTab === 'otimizacao' ? styles.activeTab : ''}`} onClick={() => setInternalTab('otimizacao')}>
              <span>{botaoDois}</span>
            </button>
            <button className={`${styles.tabButton} ${activeTab === 'organizacao' ? styles.activeTab : ''}`} onClick={() => setInternalTab('organizacao')}>
              <span>{botaoTres}</span>
            </button>
          </div>
        )}

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={styles.contentCard}
        >
          <div className={styles.cardLeft}>
            <div className={styles.cardMetaLabel}>Visão Geral</div>
            <h2 className={styles.cardTitle}>{currentTabLabel}</h2>
            <p className={styles.cardDescription}>
              Nossa estrutura de {currentTabLabel.toLowerCase()} é otimizada para garantir a excelência técnica em cada etapa da sua produção.
            </p>
            
            <div className={styles.chipsContainer}>
              {currentTabItems.map((item, idx) => (
                <div key={idx} className={styles.chip}>
                  <span className={styles.chipLabel}>Objetivo</span>
                  <span className={styles.chipValue}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cardImageWrapper}>
            <img src={filmeCartaz} alt={currentTabLabel} className={styles.cartazNovo} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Colaboradores;
