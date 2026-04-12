import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import styles from "../../styles/componentsStyles/reusedStyles/Metodos.module.css";
import video1 from "../../assets/productionMedia/video1.mp4";
import { useConteudos } from "../conteudoMetodo/MetodosConteudos";
import logo3 from "../../assets/homeMedia/homenavbar/logoCine3.png"

const Metodos = ({
  titulo,
  tituloPrincipal,
  descricao,
  videoExp = video1,
  Destaque,
  subDescricao,
  variant = 'padrao',
  customBotoes,
  customConteudos,
  activeTabOverride,
  customImages,
  cardTag // NOVO PROP
}) => {
  const CONTEUDOS = useConteudos();
  const [showVideoModal, setShowVideoModal] = useState(false);
  const modalVideoRef = useRef(null);

  const botoes = customBotoes || CONTEUDOS[variant]?.botoes || [];
  const conteudos = customConteudos || CONTEUDOS[variant]?.dados || {};

  const [internalActive, setInternalActive] = useState(botoes[0]);
  
  const activeId = activeTabOverride !== undefined ? activeTabOverride : internalActive;
  const conteudoAtivo = typeof activeId === 'number' ? botoes[activeId] : activeId;

  const currentData = conteudos[conteudoAtivo] || conteudos[botoes[0]] || {};
  
  // Usa a imagem customizada se injetada pelo dashboard mestre
  const currentImage = (customImages && customImages[activeId]) || currentData.imagem;

  const toggleVideoModal = () => setShowVideoModal(!showVideoModal);

  const getMetadata = (id) => {
    const metaMap = {
      'Resultado final': [
        { label: 'Entrega', value: 'Master 4K' },
        { label: 'Fluxo', value: 'Pós-Imediata' },
        { label: 'Qualidade', value: 'Lossless' }
      ],
      'Estudo dinâmico': [
        { label: 'Foco', value: 'Narrativa' },
        { label: 'Técnica', value: 'Dynamic Shot' },
        { label: 'Base', value: 'Motion' }
      ],
      'Técnicas criativas': [
        { label: 'Estilo', value: 'Cinematic' },
        { label: 'Lente', value: 'Anamorphic' },
        { label: 'Cena', value: 'Ambiental' }
      ],
      'Mapa espaciais': [
        { label: 'Plano', value: 'Topográfico' },
        { label: 'Uso', value: 'VFX / Set' },
        { label: 'Precisão', value: 'Milimétrica' }
      ],
      'Simulações técnicas': [
        { label: 'Motor', value: '3D Engine' },
        { label: 'Prev', value: 'Digital Set' },
        { label: 'Custo', value: 'Otimizado' }
      ],
      // Fallback for sub tabs by label
      'default': [
        { label: 'Config', value: 'Pro Tier' },
        { label: 'Status', value: 'Verified' },
        { label: 'Format', value: 'DCI-P3' }
      ]
    };
    return metaMap[id] || metaMap['default'];
  };

  return (
    <section className={styles.section}> 
      {activeTabOverride === undefined && (
        <div className={styles.primeiroContudo}>
          <h4>{titulo}</h4>
          <h1>{tituloPrincipal}</h1>
          <p>{descricao}</p>
        </div>
      )}

      <div className={styles.quartoContudo} style={{ gridTemplateColumns: activeTabOverride !== undefined ? '1fr' : '' }}>
        {activeTabOverride === undefined && (
          <div className={styles.sidebar}>
            {botoes.map((botao) => (
              <button
                key={botao}
                className={`${styles.botaoNav} ${conteudoAtivo === botao ? styles.ativo : ''}`}
                onClick={() => setInternalActive(botao)}
              >
                <span>{botao}</span>
                <div className={styles.indicator} />
              </button>
            ))}
          </div>
        )}
        
        <motion.div 
          key={conteudoAtivo}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={styles.conteudoContainer}
        >
             <div className={styles.textosContainer}>
                <div className={styles.cardMetaLabel}>{cardTag || "Configuração de Método"}</div>
                <img src={logo3} alt="logo" className={styles.logoimg}/>
                <h2 className={styles.titulo}>{currentData.titulo}</h2>
                <p className={styles.texto}>{currentData.texto}</p>
                
                <div className={styles.chipsContainer}>
                  {getMetadata(conteudoAtivo) && getMetadata(conteudoAtivo).length > 0 && getMetadata(conteudoAtivo).map((m, idx) => (
                    <div key={idx} className={styles.chip}>
                      <span className={styles.chipLabel}>{m.label}</span>
                      <span className={styles.chipValue}>{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {currentImage && (
                <div className={styles.imagemContainer}>
                  <img src={currentImage} alt={currentData.titulo} className={styles.imagem} />
                </div>
              )}
        </motion.div>
      </div>

      {activeTabOverride === undefined && (
        <div className={styles.terceiroContudo}>
          <h3>{Destaque}</h3>
          <p>{subDescricao}</p>
          <button className={styles.watchButton} onClick={toggleVideoModal}>
            Explorar Método <FontAwesomeIcon icon={faPlay} style={{ marginLeft: '10px' }} />
          </button>
        </div>
      )}

      {showVideoModal && (
        <div className={styles.videoModal}>
          <div className={styles.videoModalBackdrop} onClick={toggleVideoModal} />
          <div className={styles.videoModalContainer}>
            <div className={styles.videoModalContent}>
              <video
                ref={modalVideoRef}
                className={styles.modalVideoPlayer}
                src={videoExp}
                controls
                autoPlay
              />
            </div>
            <button className={styles.closeButton} onClick={toggleVideoModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Metodos;
