import { useState, useRef, useEffect } from "react";
import styles from "../styles/pagesStyles/MenuContent.module.css";
import Suport from "../componentsSuport/Suport";

import imagem1 from "../assets/menuMedia/filmeImgem1.jpg";
import imagem2 from "../assets/menuMedia/filmeImagem2.jpg";
import video1 from "../assets/menuMedia/filmeVideo1.mp4";
import video2 from "../assets/menuMedia/filmeVideo2.mp4";

import vaga1_2 from "../assets/menuMedia/vaga1.2.png";
import vaga2_2 from "../assets/menuMedia/vaga2.2.png";
import vaga3_2 from "../assets/menuMedia/vaga3.2.png";
import vaga4_2 from "../assets/menuMedia/vaga4.2.png";

import { useLanguage } from "../components/translationComponents/LanguageContext";

export const MenuContent = () => {
  const { t } = useLanguage();

  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const modalVideoRef = useRef(null);

  const [showApplyModal, setShowApplyModal] = useState(false);
  const [activeVaga, setActiveVaga] = useState(null);

  const [selected, setSelected] = useState("suporte"); //o menu vai começar em suporte 

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
        titulo: t("menu.TDtituloUm"),
        descricao: t("menu.TDdescricaoUm"),
        video: video2,
      },
      {
        id: 2,
        imagem: imagem2,
        titulo: t("menu.TDtituloDois"),
        descricao: t("menu.TDdescricaoDois"),
        video: video1,
      },
    ];

    const trabalharData = [
      {
        id: 3,
        imagem: vaga1_2,
        titulo: t("menu.VagaTituloUm"),
        descricao: t("menu.VagaDescricaoUm"),
        requisitos: t("menu.VagaRequisitosUm"),
        caracteristicas: t("menu.VagaCaracteristicasUm"),
        aplica: t("menu.VagaAplicaUm")
      },
      {
        id: 4,
        imagem: vaga2_2,
        titulo: t("menu.VagaTituloDois"),
        descricao: t("menu.VagaDescricaoDois"),
        requisitos: t("menu.VagaRequisitosDois"),
        caracteristicas: t("menu.VagaCaracteristicasDois"),
        aplica: t("menu.VagaAplicaDois")
      },
      {
        id: 5,
        imagem: vaga3_2,
        titulo: t("menu.VagaTituloTres"),
        descricao: t("menu.VagaDescricaoTres"),
        requisitos: t("menu.VagaRequisitosTres"),
        caracteristicas: t("menu.VagaCaracteristicasTres"),
        aplica: t("menu.VagaAplicaTres")
      },
      {
        id: 6,
        imagem: vaga4_2,
        titulo: t("menu.VagaTituloQuatro"),
        descricao: t("menu.VagaDescricaoQuatro"),
        requisitos: t("menu.VagaRequisitosQuatro"),
        caracteristicas: t("menu.VagaCaracteristicasQuatro"),
        aplica: t("menu.VagaAplicaQuatro")
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
                  {t("menu.botaoAssitir")}
                </button>
              </div>
            ))}
          </div>
        );
      {/*case "trabalhar":
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
                  {t("menu.botaoAplicar")}
                </button>
              </div>
            ))}
          </div>
        );*/}
      case "suporte":
        return (
          <div className={styles.supportContainer}>
            <p>{t("menu.mensagemSuporte")}</p>
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
        {/*<button
          className={`${styles.sidebarButton} ${
            selected === "trabalhos" ? styles.active : ""
          }`}
          onClick={() => setSelected("trabalhos")}
        >
          {t("menu.botaoMenuUm")}
        </button>*/}
        {/*<button
          className={`${styles.sidebarButton} ${
            selected === "trabalhar" ? styles.active : ""
          }`}
          onClick={() => setSelected("trabalhar")}
        >
          {t("menu.botaoMenuDois")}
        </button>*/}
        <button
          className={`${styles.sidebarButton} ${
            selected === "suporte" ? styles.active : ""
          }`}
          onClick={() => setSelected("suporte")}
        >
          {t("menu.botaoMenuTres")}
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
            <h3>{t("menu.applyModalUm")}</h3>
            <p className={styles.applyModalText}>{activeVaga.requisitos}</p>
            <h3>{t("menu.applyModalDois")}</h3>
            <p className={styles.applyModalText}>
              {activeVaga.caracteristicas}
            </p>
            <h3>{t("menu.applyModalTres")}</h3>
            <p className={styles.applyModalText}>
              {activeVaga.aplica}
            </p>
            <button
              className={styles.closeButton}
              onClick={() => toggleApplyModal(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};