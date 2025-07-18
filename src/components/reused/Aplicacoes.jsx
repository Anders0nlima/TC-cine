import React, { useState } from 'react';
import styles from "../../styles/componentsStyles/reusedStyles/Aplicacoes.module.css"
import imagemEdicao from "../../assets/productionMedia/edicao.png"
import imagemSonoridade from "../../assets/productionMedia/sonorizacao.png"
import imagemGrind from "../../assets/productionMedia/colorgrading.png"
import { BotaoGeral } from '../reused/BotaoGeral';
import { useLanguage } from '../translationComponents/LanguageContext';


const Aplicacoes = ({
  titulo = "Utilitários",
  tituloPrincipal = "CONTRATE NOSSOS SERVIÇOS",
  descricao = "Confira abaixo o que mais se adapta às suas necessidades e fale com um de nossos especialistas.",
  quartoBotaoNome = null, // Alterado para null como padrão
  quartoConteudo = null,   // Alterado para null como padrão
  botaoUm = "Edição",
  botaoDois = "Color Granding",
  botaoTres = "Sonorização"
}) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('pre-producao');

  const conteudos = {
    'pre-producao': {
      titulo: t("aplicacoesProduction.contTituloUm"),
      texto: t("aplicacoesProduction.contTextoUm"),
      imagem: imagemEdicao
    },
    'producao': {
      titulo: t("aplicacoesProduction.contTituloDois"),
      texto: t("aplicacoesProduction.contTextoDois"),
      imagem: imagemGrind
    },
    'ambos': {
      titulo: t("aplicacoesProduction.contTituloTres"),
      texto: t("aplicacoesProduction.contTextoTres"),
      imagem: imagemSonoridade
    },
    ...(quartoConteudo && { 'novo-servico': quartoConteudo }) // Só adiciona se quartoConteudo existir
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="aplicacoes" name="aplicacoes" className={styles.section}> 
      <div className={styles.primeiroContudo}>
        <h4>{titulo}</h4>
        <h1>{tituloPrincipal}</h1>
        <p>{descricao}</p>
      </div>

      <div className={styles.segundoContudo}>
        <div className={styles.tabsContainer}>
          <div className={styles.tabButtons}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'pre-producao' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('pre-producao')}
            >
              {botaoUm}
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'producao' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('producao')}
            >
              {botaoDois}
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'ambos' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('ambos')}
            >
              {botaoTres}
            </button>

            {quartoBotaoNome && (
              <button 
                className={`${styles.tabButton} ${activeTab === 'novo-servico' ? styles.activeTab : ''}`}
                onClick={() => handleTabChange('novo-servico')}
              >
                {quartoBotaoNome}
              </button>
            )}
          </div>
        </div>

        <div className={styles.conteudoContainer}>
          <div className={styles.imagemWrapper}>
            <img 
              src={conteudos[activeTab]?.imagem} 
              alt={conteudos[activeTab]?.titulo || ''}
              className={styles.imagemConteudo}
            />
          </div>

          <div className={styles.textoWrapper}>
            <h2 className={styles.tituloConteudo}>{conteudos[activeTab]?.titulo}</h2>
            <p className={styles.textoConteudo}>{conteudos[activeTab]?.texto}</p>
            
            <BotaoGeral
            texto= {t("aplicacoesProduction.contBotao")}
            link="/infoPages/vejamaispre"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Aplicacoes;