import { useState } from 'react';
import styles from "../styles/componentsStyles/supportStyles/SuportePage.module.css";
import { NavBar } from '../components/reused/NavBar';
import imagem1 from "../assets/suportMedia/imgSuporte1.jpg"
import imagem2 from "../assets/suportMedia/imgSuporte2.jpg"
import imagem3 from "../assets/suportMedia/imgSuporte3.jpg"
import Support from '../components/support/Support';
import Footer from '../components/reused/Footer';
import { useLanguage } from '../components/context/LanguageContext';
import { BlurText } from '../components/animations/BlurText';

const SupportPage = () => {
  const { t } = useLanguage();
  
  // Conteúdo das informações (antigos slides)
  const infoCards = [
    {
      title: t("suporte.title1"),
      subtitle: t("suporte.subtitle1"),
      description: t("suporte.description1"),
      image: imagem1
    },
    {
      title: t("suporte.title2"),
      subtitle: t("suporte.subtitle2"),
      description: t("suporte.description2"),
      image: imagem2
    },
    {
      title: t("suporte.title3"),
      subtitle: t("suporte.subtitle3"),
      description: t("suporte.description3"),
      image: imagem3
    }
  ];

  // Estados do formulário (mantidos para o componente Support)
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  return (
    <>
      <NavBar />
      <div className={styles.pageContainer}>
        {/* Hero Section com BlurText */}
        <header className={styles.heroSection}>
          <BlurText
            text={t("suporte.formTitle")}
            delay={150}
            animateBy="words"
            direction="top"
            className={styles.formTitle}
          />
          <p className={styles.formDescription}>
            {t("suporte.formDescription")}
          </p>
        </header>

        {/* Lado Central - Formulário Glassmorphic */}
        <section className={styles.formSide}>
          <div className={styles.formWrapper}>
            <Support
              formData={formData}
              setFormData={setFormData}
              step={step}
              setStep={setStep}
            />
          </div>
        </section>

        {/* Seção de Informações Adicionais (Antigo Carrossel) */}
        <section className={styles.infoSection}>
          <div className={styles.infoGrid}>
            {infoCards.map((card, index) => (
              <div key={index} className={styles.infoCard}>
                <img
                  src={card.image}
                  alt={card.title}
                  className={styles.cardImage}
                />
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <h4 style={{ fontSize: '1.1rem', color: '#888', marginBottom: '0.5rem' }}>{card.subtitle}</h4>
                <p className={styles.cardText}>{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SupportPage;

