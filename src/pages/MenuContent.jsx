import { useState, useRef, useEffect } from "react";
import styles from "../styles/pagesStyles/MenuContent.module.css";
import Suport from "../componentsSuport/Suport";

import imagem1 from "../assets/menuMedia/filmeImgem1.jpg";
import imagem2 from "../assets/menuMedia/filmeImagem2.jpg";
import video1 from "../assets/menuMedia/filmeVideo1.mp4";
import video2 from "../assets/menuMedia/filmeVideo2.mp4";

import vaga1 from "../assets/menuMedia/vaga1.jpg";
import vaga2 from "../assets/menuMedia/vaga2.jpg";
import vaga3 from "../assets/menuMedia/vaga3.jpg";
import vaga4 from "../assets/menuMedia/vaga4.jpg";

export const MenuContent = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const modalVideoRef = useRef(null);

  const [showApplyModal, setShowApplyModal] = useState(false);
  const [activeVaga, setActiveVaga] = useState(null);

  const [selected, setSelected] = useState("trabalhos");

  const toggleVideoModal = (videoSrc) => {
    if (showVideoModal) {
      setShowVideoModal(false);
      setActiveVideo(null);
    } else {
      setActiveVideo(videoSrc);
      setShowVideoModal(true);
    }
  };

  const toggleApplyModal = (vaga) => {
    if (showApplyModal) {
      setShowApplyModal(false);
      setActiveVaga(null);
    } else {
      setActiveVaga(vaga);
      setShowApplyModal(true);
    }
  };

  useEffect(() => {
    if (showVideoModal && modalVideoRef.current) {
      modalVideoRef.current.play();
    } else if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  }, [showVideoModal]);

  const renderContent = () => {
    const trabalhosData = [
      {
        id: 1,
        imagem: imagem1,
        titulo: "Floresta Assombrada",
        descricao:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo possimus necessitatibus laborum animi velit placeat.",
        video: video1,
      },
      {
        id: 2,
        imagem: imagem2,
        titulo: "O Ultimo Homem na Terra",
        descricao:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo possimus necessitatibus laborum animi velit placeat.",
        video: video2,
      },
    ];

    const trabalharData = [
      {
        id: 3,
        imagem: vaga1,
        titulo: "Cameraman",
        descricao:
          "Responsável pela captação de imagens com alta qualidade para diferentes produções audiovisuais.",
        requisitos:
          "Experiência com câmeras profissionais, conhecimento em iluminação e áudio.",
        caracteristicas:
          "Salário competitivo, ambiente criativo, oportunidade de crescimento.",
      },
      {
        id: 4,
        imagem: vaga2,
        titulo: "Assistente de Roteiro",
        descricao:
          "Auxílio na elaboração de roteiros e organização de cenas para gravações.",
        requisitos:
          "Boa escrita, criatividade e noções de narrativa audiovisual.",
        caracteristicas:
          "Trabalho híbrido, horários flexíveis, equipe colaborativa.",
      },
      {
        id: 5,
        imagem: vaga3,
        titulo: "Diretor Assistente",
        descricao:
          "Apoio ao diretor em todas as etapas da produção e coordenação da equipe.",
        requisitos:
          "Experiência em liderança de equipes e noções de direção cinematográfica.",
        caracteristicas:
          "Ambiente dinâmico, plano de carreira, benefícios completos.",
      },
      {
        id: 6,
        imagem: vaga4,
        titulo: "Editor de Videos",
        descricao:
          "Responsável pela edição e finalização de vídeos com criatividade.",
        requisitos:
          "Domínio de Adobe Premiere, After Effects e noções de color grading.",
        caracteristicas:
          "Trabalho remoto disponível, equipamentos fornecidos pela empresa.",
      },
    ];

    switch (selected) {
      case "trabalhos":
        return (
          <div className={styles.contentGrid}>
            {trabalhosData.map((projeto) => (
              <div key={projeto.id} className={styles.card}>
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className={styles.cardImage}
                />
                <h3 className={styles.cardTitle}>{projeto.titulo}</h3>
                <p className={styles.cardDescription}>{projeto.descricao}</p>
                <button
                  className={styles.watchButton}
                  onClick={() => toggleVideoModal(projeto.video)}
                >
                  Assista
                </button>
              </div>
            ))}
          </div>
        );
      case "trabalhar":
        return (
          <div className={styles.contentGrid}>
            {trabalharData.map((vaga) => (
              <div key={vaga.id} className={styles.card}>
                <img
                  src={vaga.imagem}
                  alt={vaga.titulo}
                  className={styles.cardImage}
                />
                <h3 className={styles.cardTitle}>{vaga.titulo}</h3>
                <p className={styles.cardDescription}>{vaga.descricao}</p>
                <button
                  className={styles.applyButton}
                  onClick={() => toggleApplyModal(vaga)}
                >
                  Aplicar
                </button>
              </div>
            ))}
          </div>
        );
      case "suporte":
        return (
          <div className={styles.supportContainer}>
            <p>Componente de Suporte:</p>
            <div className={styles.supportBox}>
              <Suport />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.menuContent}>
      <div className={styles.sidebar}>
        <button
          className={`${styles.sidebarButton} ${
            selected === "trabalhos" ? styles.active : ""
          }`}
          onClick={() => setSelected("trabalhos")}
        >
          Trabalhos da tc_cine
        </button>
        <button
          className={`${styles.sidebarButton} ${
            selected === "trabalhar" ? styles.active : ""
          }`}
          onClick={() => setSelected("trabalhar")}
        >
          Como trabalhar conosco
        </button>
        <button
          className={`${styles.sidebarButton} ${
            selected === "suporte" ? styles.active : ""
          }`}
          onClick={() => setSelected("suporte")}
        >
          Suporte
        </button>
      </div>

      <div className={styles.contentArea}>{renderContent()}</div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className={styles.videoModal}>
          <div
            className={styles.videoBackdrop}
            onClick={() => toggleVideoModal(null)}
          />
          <div className={styles.videoContainer}>
            <video
              ref={modalVideoRef}
              className={styles.modalVideoPlayer}
              src={activeVideo}
              controls
              autoPlay
            />
            <button
              className={styles.closeButton}
              onClick={() => toggleVideoModal(null)}
              aria-label="Fechar vídeo"
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Apply Modal */}
      {showApplyModal && activeVaga && (
        <div className={styles.applyModal}>
          <div
            className={styles.applyModalBackdrop}
            onClick={() => toggleApplyModal(null)}
          />
          <div className={styles.applyModalContainer}>
            <h2 className={styles.applyModalTitle}>{activeVaga.titulo}</h2>
            <h3>O que esperamos de você</h3>
            <p className={styles.applyModalText}>{activeVaga.requisitos}</p>
            <h3>Características da vaga</h3>
            <p className={styles.applyModalText}>
              {activeVaga.caracteristicas}
            </p>
            <button
              className={styles.closeButton}
              onClick={() => toggleApplyModal(null)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};