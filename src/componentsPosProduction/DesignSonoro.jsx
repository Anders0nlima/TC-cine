import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "../styles/componentsStyles/posProductionStyles/DesignSonoro.module.css";

const DesignSonoro = ({
  titulo,
  tituloPrincipal,
  descricao,
  itensAccordion,
  cartazes,
  botaoDestaque
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="design-sonoro" name="design-sonoro" className={styles.section}>
      <div className={styles.primeiroContudo}>
        <h4>{titulo}</h4>
        <h1>{tituloPrincipal}</h1>
        <p>{descricao}</p>
      </div>

      <div className={styles.segundoContudo}>
        <div className={styles.leftColumn}>
          <h3>{botaoDestaque}</h3>
          
          <div className={styles.accordionWrapper}>
            <div className={styles.accordion}>
              {itensAccordion.map((item, index) => (
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

        {/* ÁREA DO CARTAZ DINÂMICO - Nova estrutura */}
        <div className={styles.cartazWrapper}>
          <div className={styles.cartazContainer}>
            <div className={styles.cartazImagemContainer}>
              <img
                src={cartazes[activeIndex]?.cartazImagem}
                alt={cartazes[activeIndex]?.cartazTitulo}
                className={styles.cartazImagem}
              />
            </div>
            <div className={styles.cartazContent}>
              <h2 className={styles.cartazHeading}>{cartazes[activeIndex]?.cartazTitulo}</h2>
              <p className={styles.cartazText}>{cartazes[activeIndex]?.cartazDescricao}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSonoro;