import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ShinyText } from '../animations/ShinyText';

import styles from '../../styles/componentsStyles/homepageStyles/Discover.module.css';
import imagem1 from "../../assets/homeMedia/homenavbar/homedisc1.png";
import imagem2 from "../../assets/homeMedia/homenavbar/homedisc2.png"; 

import { useLanguage } from '../context/LanguageContext';

export const Descubra = () => {
  const { t } = useLanguage();
  const whatsappLink = "https://wa.me/message/E7CCCIDLHOIMP1"; // Link oficial atualizado

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.primeiroContudo}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.span variants={itemVariants} className={styles.tagline}>
          <ShinyText text={t("homeDescubraPage.titulo")} speed={4} variant="gold" />
        </motion.span>
        <motion.h2 variants={itemVariants} className={styles.mainTitle}>{t("homeDescubraPage.descricao")}</motion.h2>
      </motion.div>

      <div className={styles.gridContainer}>
        <motion.div 
          className={styles.serviceCard}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageWrapper}>
            <img src={imagem1} alt="Produtora" className={styles.cardImage} />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.cardInfo}>
            <h3 className={styles.cardTitle}>{t("homeDescubraPage.contentTitleUm")}</h3>
            <p className={styles.cardDescription}>{t("homeDescubraPage.contentDescriptionUm")}</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.leadButton}>
              {t("homeDescubraPage.botaoPublicidade")}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className={styles.serviceCard}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageWrapper}>
            <img src={imagem2} alt="Co-produtora" className={styles.cardImage} />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.cardInfo}>
            <h3 className={styles.cardTitle}>{t("homeDescubraPage.contentTitleDoisB")}</h3>
            <p className={styles.cardDescription}>{t("homeDescubraPage.contentDescriptionDois")}</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.leadButton}>
              {t("homeDescubraPage.botaoCinema")}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
