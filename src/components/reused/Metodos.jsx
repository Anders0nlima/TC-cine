import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CONTEUDOS } from "../conteudoMetodo/MetodosConteudos"
import { faPlay,  faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from "../../styles/componentsStyles/reusedStyles/Metodos.module.css";
import video1 from "../../assets/productionMedia/video1.mp4";
import logoCine3 from "../../assets/productionMedia/logoCine3.png"

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
  const [showVideoModal, setShowVideoModal] = useState(false);
  const modalVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  //const [conteudoAtivo, setConteudoAtivo] = useState('Resultado final');
  const [saindo, setSaindo] = useState(false);

  const botoes = customBotoes || CONTEUDOS[variant].botoes;
  const conteudos = customConteudos || CONTEUDOS[variant].dados;

  const [conteudoAtivo, setConteudoAtivo] = useState(botoes[0]);
  
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleVideoModal = () => {
    setShowVideoModal(!showVideoModal);
  };

  const mudarConteudo = (novoConteudo) => {
    if (novoConteudo !== conteudoAtivo) {
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
      <div className={styles.primeiroContudo}>
        <h4>{titulo}</h4>
        <h1>{tituloPrincipal}</h1>
        <p>{descricao}</p>
      </div>

      <div className={styles.segundoContudo}>
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
                          alt="" 
                          height={25}
                          width={150}
                          />
                          {/*<img
                            className={styles.img}
                            alt="Group"
                            src="https://c.animaapp.com/hSTv3Klm/img/group@2x.png"
                          />
                        
                          <img
                            className={styles.vector}
                            alt="Vector"
                            src="https://c.animaapp.com/hSTv3Klm/img/vector.svg"
                          />*/}
                        </div>
          <div className={styles.companyDescription}>{containerTitulo}</div>
          <p className={styles.companyText}>
            {containerDescricao}
          </p>
        </div>

        <button className={styles.playButton} onClick={toggleVideoModal}>
          <FontAwesomeIcon 
            icon={faPlay} 
            className={styles.playIcon} 
          />
          <span>{watchButtonText}</span>
        </button>
      </div>

      <div className={styles.terceiroContudo}>
        <h3>{Destaque}</h3>
        <p>{subDescricao}</p>
      </div>

      <div className={styles.quartoContudo}>
  <div className={styles.navbarContainer}>
    <nav className={styles.navbar}>
      {botoes.map((botao, index) => (
        <div key={botao} className={styles.itemNav}>
          <button
            className={`${styles.botaoNav} ${conteudoAtivo === botao ? styles.ativo : ''}`}
            onClick={() => mudarConteudo(botao)}
          >
            {botao}
          </button>
          {index !== botoes.length - 1 && <div className={styles.separador}></div>}
        </div>
      ))}
    </nav>
  </div>
  
  <div className={`${styles.conteudo} ${saindo ? styles.saindo : ''} ${styles.darkTheme}`}>
    <div className={styles.conteudoContainer}>
      {/* Div dos Textos (Esquerda) */}
      <div className={styles.textosContainer}>
        {/*<span className={styles.marca}>Microsoft</span>*/}
        <h2 className={styles.titulo}>{conteudos[conteudoAtivo].titulo}</h2>
        <p className={styles.texto}>{conteudos[conteudoAtivo].texto}</p>
      </div>
      
      {/* Div da Imagem (Direita) */}
      <div className={styles.imagemContainer}>
        <img 
          src={conteudos[conteudoAtivo].imagem} 
          alt={conteudos[conteudoAtivo].titulo}
          className={styles.imagem}
        />
      </div>
    </div>
  </div>
</div>

{/*<BeforeAfterSlider/>*/}

      
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