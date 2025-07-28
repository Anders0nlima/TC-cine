import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from "../../styles/componentsStyles/reusedStyles/Metodos.module.css";
import video1 from "../../assets/productionMedia/video1.mp4";
import logoCine3 from "../../assets/productionMedia/logoCine3.png";
import { getConteudos } from "../conteudoMetodo/MetodosConteudos";
import logo3 from "../../assets/homeMedia/homenavbar/logoCine3.png"

const ConteudoSeguro = ({ conteudo, className }) => {
  const conteudoAtual = conteudo || {
    titulo: 'Content not available :(',
    texto: 'Please select any item above',
    imagem: null
  };

  return (
    <div className={className}>
      <div className={styles.textosContainer}>
        <img src={logo3} alt="logo" className={styles.logoimg}/>
        <h2 className={styles.titulo}>{conteudoAtual.titulo}</h2>
        <p className={styles.texto}>{conteudoAtual.texto}</p>
      </div>
      {conteudoAtual.imagem && (
        <div className={styles.imagemContainer}>
          <img 
            src={conteudoAtual.imagem} 
            alt={conteudoAtual.titulo}
            className={styles.imagem}
          />
        </div>
      )}
    </div>
  );
};

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
  containerTitulo,
  containerDescricao,
  watchButtonText
}) => {
  const CONTEUDOS = getConteudos();
  const [showVideoModal, setShowVideoModal] = useState(false);
  const modalVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [saindo, setSaindo] = useState(false);

  const botoes = customBotoes || CONTEUDOS[variant]?.botoes || [];
  const conteudos = customConteudos || CONTEUDOS[variant]?.dados || {};

  // Inicializa com a primeira chave válida
  const [conteudoAtivo, setConteudoAtivo] = useState(() => {
    const chaveValida = botoes.find(botao => botao in conteudos);
    return chaveValida || (botoes[0] ?? '');
  });

  // Debug
  /*useEffect(() => {
    console.log('Estado atual:', {
      conteudoAtivo,
      existe: conteudoAtivo in conteudos,
      botoes,
      conteudos: Object.keys(conteudos)
    });
  }, [conteudoAtivo, conteudos]);*/

  const togglePlayPause = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleVideoModal = () => setShowVideoModal(!showVideoModal);

  const mudarConteudo = (novoConteudo) => {
    if (novoConteudo !== conteudoAtivo && novoConteudo in conteudos) {
      setSaindo(true);
      setTimeout(() => {
        setConteudoAtivo(novoConteudo);
        setSaindo(false);
      }, 300);
    }
  };

  return (
    <>
      <section id="metodos" name="metodos" className={styles.section}> 
        {/* Primeiro Conteúdo */}
        <div className={styles.primeiroContudo}>
          <h4>{titulo}</h4>
          <h1>{tituloPrincipal}</h1>
          <p>{descricao}</p>
        </div>

        {/* Segundo Conteúdo */} 
        {/*<div className={styles.segundoContudo}>
          <div className={styles.videoContainer}>
            <div className={styles.gradientOverlay} />
            <video
              ref={videoRef}
              className={styles.videoPlayer}
              src={videoExp}
              loop
              muted
              autoPlay
              playsInline
            />
          </div>

          <div className={styles.contentLeft}>
            <div className={styles.group}>
              <img 
                className={styles.logoMetodo}
                src={logoCine3} 
                alt="Logo TC|CINE" 
                height={25}
                width={150}
              />
            </div>
            <div className={styles.companyDescription}>{containerTitulo}</div>
            <p className={styles.companyText}>{containerDescricao}</p>
          </div>

          <button className={styles.playButton} onClick={toggleVideoModal}>
            <FontAwesomeIcon icon={faPlay} className={styles.playIcon} />
            <span>{watchButtonText}</span>
          </button>
        </div>*/}

        {/* Terceiro Conteúdo */}
        <div className={styles.terceiroContudo}>
          <h3>{Destaque}</h3>
          <p>{subDescricao}</p>
        </div>

        {/* Quarto Conteúdo */}
        <div className={styles.quartoContudo}>
          <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
              {botoes.map((botao, index) => (
                <div key={botao} className={styles.itemNav}>
                  <button
                    className={`${styles.botaoNav} ${conteudoAtivo === botao ? styles.ativo : ''}`}
                    onClick={() => mudarConteudo(botao)}
                    disabled={!(botao in conteudos)}
                  >
                    {botao}
                  </button>
                  {index !== botoes.length - 1 && <div className={styles.separador}></div>}
                </div>
              ))}
            </nav>
          </div>
          
          <div className={`${styles.conteudo} ${saindo ? styles.saindo : ''} ${styles.darkTheme}`}>
            <ConteudoSeguro 
              conteudo={conteudos[conteudoAtivo]} 
              className={styles.conteudoContainer}
            />
          </div>
        </div>
      </section>

      {/* Modal do Vídeo */}
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
            <button 
              className={styles.closeButton} 
              onClick={toggleVideoModal}
              aria-label="Fechar vídeo"
            >
              <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Metodos;