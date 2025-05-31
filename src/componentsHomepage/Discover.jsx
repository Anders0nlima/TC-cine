import React, { useState } from 'react';

import styles from '../styles/componentsStyles/homepageStyles/Discover.module.css';
import imagem1 from "../assets/homeMedia/homenavbar/imagem9.jpg";
import imagem2 from "../assets/homeMedia/homenavbar/imagem7.jpg";

import { BotaoGeral } from '../components/reused/BotaoGeral';
import {DescubraOpc} from '../componentsHomepage/DescubraOpc';

export const Descubra = () => {
    const [activeTab, setActiveTab] = useState('produtora');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

    return (
        <>
            <section className={styles.section}>
                <div className={styles.primeiroContudo}>
                    <h1>Descubra a TC|CINE</h1>
                    <p>A Tecnologia Criativa Cinematográfica (TC|CINE) é uma produtora & coprodutora audiovisual que une métodos e processos tecnológicos à criatividade cinematográfica.</p>
                </div>

                <div className={styles.segundoContudo}>

                   <DescubraOpc/>

        <div className={styles.tabButtons}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'produtora' ? styles.activeTab : ''}`}
            onClick={() => handleTabChange('produtora')}
          >
            Produtora
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'coprodutora' ? styles.activeTab : ''}`}
            onClick={() => handleTabChange('coprodutora')}
          >
            Coprodutora
          </button>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.contentContainer}>
            {activeTab === 'produtora' ? (
              <>
                <div className={styles.textContent}>
                  <h2 className={styles.contentTitle}>Ideia para produtos autorais</h2>
                  <p className={styles.contentDescription}>
                    Com uma equipe experiente e processos eficientes, a TC|CINE participa de todas as etapas da produção audiovisual (Pre&Produção e Pós-produção), desde grandes projetos até produções com orçamentos menores. Também oferecemos consultorias técnicas e criativas para o desenvolvimento de roteiros, planejamento e execução de produções.
                  </p>
                  <BotaoGeral
                  texto="Contrate"
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
                  <h2 className={styles.contentTitle}>Vá mais longe <br /> em Equipe</h2>
                  <p className={styles.contentDescription}>
                    A TC|CINE é parceira de produtoras independentes que buscam suporte em etapas específicas de seus projetos. Atuamos com flexibilidade em pré-produção, produção e pós-produção, oferecendo soluções personalizadas que elevam a qualidade e o impacto de cada obra. Conheça todos os nossos serviços e descubra como podemos transformar ideias em narrativas audiovisuais de alto padrão.
                  </p>
                  <BotaoGeral
                  texto="Contrate"
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