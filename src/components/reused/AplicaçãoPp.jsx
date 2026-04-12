import React, { useState } from 'react';
import styles from "../../styles/componentsStyles/reusedStyles/Aplicacoes.module.css"
import imagemEdicao from "../../assets/productionMedia/edicao.png"
import imagemSonoridade from "../../assets/productionMedia/sonorizacao.png"
import imagemGrind from "../../assets/productionMedia/colorgrading.png"
import { BotaoGeral } from '../reused/BotaoGeral';
import { useLanguage } from '../context/LanguageContext';
import { motion } from "framer-motion";

const AplicacoesPp = ({
  titulo = "Utilitários",
  tituloPrincipal = "CONTRATE NOSSOS SERVIÇOS",
  descricao = "Confira abaixo o que mais se adapta às suas necessidades e fale com um de nossos especialistas.",
  quartoConteudo = null,
  botaoUmPp = "Edição",
  botaoDoisPp = "Color Granding",
  botaoTresPp = "Sonorização",
  activeTabOverride,
  customImages // NOVO PROP
}) => {
  const { t } = useLanguage();
  const [internalTab, setInternalTab] = useState('pre-producao');

  const activeTab = activeTabOverride !== undefined ? activeTabOverride : internalTab;

  const conteudos = {
    'pre-producao': {
      titulo: t("aplicacoesProduction.contTituloUmPp"),
      texto: t("aplicacoesProduction.contTextoUmPp"),
      imagem: (customImages && customImages['pre-producao']) || imagemEdicao,
      meta: [
        { label: 'Foco', value: 'Montagem & Ritmo' },
        { label: 'Nível', value: 'Profissional' },
        { label: 'Entrega', value: 'Multi-formato' }
      ]
    },
    'producao': {
      titulo: t("aplicacoesProduction.contTituloDoisPp"),
      texto: t("aplicacoesProduction.contTextoDoisPp"),
      imagem: (customImages && customImages['producao']) || imagemGrind,
      meta: [
        { label: 'Foco', value: 'Cor & Estética' },
        { label: 'Look', value: 'Cinematográfico' },
        { label: 'Padrão', value: 'High HDR' }
      ]
    },
    'ambos': {
      titulo: t("aplicacoesProduction.contTituloTresPp"),
      texto: t("aplicacoesProduction.contTextoTresPp"),
      imagem: (customImages && customImages['ambos']) || imagemSonoridade,
      meta: [
        { label: 'Foco', value: 'Som & Design' },
        { label: 'Mix', value: 'Spatial Audio' },
        { label: 'Efeito', value: 'Elite SFX' }
      ]
    },
    ...(quartoConteudo && { 
      'novo-servico': {
        ...quartoConteudo,
        meta: [
          { label: 'Status', value: 'Personalizado' },
          { label: 'Tipo', value: 'Especializado' },
          { label: 'Entrega', value: 'Sob Medida' }
        ]
      } 
    })
  };

  const currentTab = conteudos[activeTab] || conteudos['pre-producao'];

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
        {activeTabOverride === undefined && (
          <div className={styles.sidebar}>
            <button className={`${styles.tabButton} ${activeTab === 'pre-producao' ? styles.activeTab : ''}`} onClick={() => setInternalTab('pre-producao')}>
              <span>{botaoUmPp}</span>
            </button>
            <button className={`${styles.tabButton} ${activeTab === 'producao' ? styles.activeTab : ''}`} onClick={() => setInternalTab('producao')}>
              <span>{botaoDoisPp}</span>
            </button>
            <button className={`${styles.tabButton} ${activeTab === 'ambos' ? styles.activeTab : ''}`} onClick={() => setInternalTab('ambos')}>
              <span>{botaoTresPp}</span>
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
            <div className={styles.cardMetaLabel}>Módulo de Serviço</div>
            <h2 className={styles.tituloConteudo}>{currentTab.titulo}</h2>
            <p className={styles.textoConteudo}>{currentTab.texto}</p>
            
            <div className={styles.chipsContainer}>
              {currentTab.meta?.map((m, idx) => (
                <div key={idx} className={styles.chip}>
                  <span className={styles.chipLabel}>{m.label}</span>
                  <span className={styles.chipValue}>{m.value}</span>
                </div>
              ))}
            </div>

            <div className={styles.interesseWrapper}>
              <BotaoGeral texto={t("aplicacoesProduction.contBotao")} link={"/suporte"} />
            </div>
          </div>

          <div className={styles.imagemWrapper}>
            <img src={currentTab.imagem} alt={currentTab.titulo || ''} className={styles.imagemConteudo} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AplicacoesPp;
