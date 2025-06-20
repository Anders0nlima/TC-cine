import React, { useState } from 'react';

import styles from '../styles/componentsStyles/homepageStyles/Discover.module.css';
import imagem1 from "../assets/homeMedia/homenavbar/imagem9.jpg";
import imagem2 from "../assets/homeMedia/homenavbar/imagem7.jpg";

import { BotaoGeral } from '../components/reused/BotaoGeral';
import {DescubraOpc} from '../componentsHomepage/DescubraOpc';

import { useLanguage } from '../components/translationComponents/LanguageContext';

export const Descubra = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('produtora');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

    return (
        <>
            <section className={styles.section}>
                <div className={styles.primeiroContudo}>
                    <h1>{t("homeDescubraPage.titulo")}</h1>
                    <p>{t("homeDescubraPage.descricao")}</p>
                </div>

                <div className={styles.segundoContudo}>

                   <DescubraOpc/>

        <div className={styles.tabButtons}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'produtora' ? styles.activeTab : ''}`}
            onClick={() => handleTabChange('produtora')}
          >
            {t("homeDescubraPage.bottonUm")}
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'coprodutora' ? styles.activeTab : ''}`}
            onClick={() => handleTabChange('coprodutora')}
          >
            {t("homeDescubraPage.bottonDois")}
          </button>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.contentContainer}>
            {activeTab === 'produtora' ? (
              <>
                <div className={styles.textContent}>
                  <h2 className={styles.contentTitle}>{t("homeDescubraPage.contentTitleUm")}</h2>
                  <p className={styles.contentDescription}>
                    {t("homeDescubraPage.contentDescriptionUm")}
                  </p>
                  <BotaoGeral
                  texto={t("homeDescubraPage.botaoGeral")}
                  link="/suporte"
                  />
                </div>
                <div className={styles.imageContent}>
                  <img src={imagem1} alt="Produtora" className={styles.contentImage} />
                </div>
              </>
            ) : (
              <>
                <div className={styles.textContent}>
                  <h2 className={styles.contentTitle}>{t("homeDescubraPage.contentTitleDoisB")} <br /> {t("homeDescubraPage.contentTitleDoisR")}</h2>
                  <p className={styles.contentDescription}>
                    {t("homeDescubraPage.contentDescriptionDois")}
                  </p>
                  <BotaoGeral
                  texto={t("homeDescubraPage.botaoGeral")}
                  link="/suporte"
                  />
                </div>
                <div className={styles.imageContent}>
                  <img src={imagem2} alt="Co-produtora" className={styles.contentImage} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
            </section>
        </>
    )
}