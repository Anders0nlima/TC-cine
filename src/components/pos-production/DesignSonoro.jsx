import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/componentsStyles/posProductionStyles/DesignSonoro.module.css";

const DesignSonoro = ({
  titulo,
  tituloPrincipal,
  descricao,
  itensAccordion,
  cartazes,
  botaoDestaque,
  activeTabOverride
}) => {
  const [internalActive, setInternalActive] = useState(0);
  
  const activeIndex = activeTabOverride !== undefined ? activeTabOverride : internalActive;

  const getMetadata = (index) => {
    const metaMap = [
      [
        { label: 'Formato', value: 'Dolby Atmos' },
        { label: 'Tecnologia', value: 'Spatial Audio' },
        { label: 'Fidelidade', value: '24-bit / 96kHz' }
      ],
      [
        { label: 'Padrão', value: 'Surround 5.1' },
        { label: 'Mixagem', value: 'Cine Mix' },
        { label: 'Uso', value: 'Cinema / Streaming' }
      ],
      [
        { label: 'Captura', value: 'Studio Foley' },
        { label: 'Foco', value: 'Texturas Sonoras' },
        { label: 'Status', value: 'VFX Sync' }
      ]
    ];
    return metaMap[index] || metaMap[0];
  };

  const currentCartaz = cartazes[activeIndex] || {};

  return (
    <section className={styles.section}>
      {activeTabOverride === undefined && (
          <div className={styles.primeiroContudo}>
            <h4>{titulo}</h4>
            <h1>{tituloPrincipal}</h1>
            <p>{descricao}</p>
          </div>
      )}

      <div className={styles.segundoContudo} style={{ gridTemplateColumns: activeTabOverride !== undefined ? '1fr' : '' }}>
        {/* Oculta o sidebar secundário se estiver no dashboard mestre */}
        {activeTabOverride === undefined && (
          <div className={styles.sidebar}>
            <div className={styles.leftColumn}>
              <h3>{botaoDestaque}</h3>
              {itensAccordion.map((item, index) => (
                <button
                  key={index}
                  className={`${styles.tabButton} ${activeIndex === index ? styles.activeTab : ''}`}
                  onClick={() => setInternalActive(index)}
                >
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <motion.div 
          key={activeIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={styles.contentCard}
        >
          <div className={styles.cardLeft}>
            <div className={styles.cardMetaLabel}>Arquitetura de Som</div>
            <h2 className={styles.cartazHeading}>{currentCartaz.cartazTitulo || itensAccordion[activeIndex]?.title}</h2>
            <p className={styles.cartazText}>{currentCartaz.cartazDescricao || itensAccordion[activeIndex]?.content}</p>
            
            <div className={styles.chipsContainer}>
              {getMetadata(activeIndex).map((m, idx) => (
                <div key={idx} className={styles.chip}>
                  <span className={styles.chipLabel}>{m.label}</span>
                  <span className={styles.chipValue}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cartazImagemContainer}>
            <img src={currentCartaz.cartazImagem} alt={currentCartaz.cartazTitulo} className={styles.cartazImagem} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignSonoro;
