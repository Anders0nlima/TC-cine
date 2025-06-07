import { useState } from 'react';
import styles from "../styles/componentsStyles/suportStyles/SuportePage.module.css";
import { NavBar } from '../components/reused/NavBar';
import imagem1 from "../assets/suportMedia/imgSuporte1.jpg"
import imagem2 from "../assets/suportMedia/imgSuporte2.jpg"
import imagem3 from "../assets/suportMedia/imgSuporte3.jpg"
import Suport from '../componentsSuport/Suport';
import Footer from '../componentsSuport/Footer';

// Seu componente de formulário existente (PersonalDataStep, ServicesStep, ProjectStep)
// ... (mantenha os componentes que já criamos anteriormente)

const SuportPage = () => {
  // Estados para o carrossel de conteúdo
  const [currentSlide, setCurrentSlide] = useState(0);

  // Conteúdo dos slides
  const slides = [
    {
      title: "Suporte ao cliente",
      subtitle: "sobre a selo",
      description: "Lorem ipsum dolor sit amet. Sed vero assumenda in veritatis vitae non veniam perferendis. Vel officiis voluptatem et excepturi modi sed libero ducimus et officia aliquid. Qui consequatur provident est voluptas recusandae est minima suscipit ut odit suscipit aut doloremque fugit aut maxime blanditiis.Lorem ipsum dolor sit amet. Sed vero assumenda in veritatis vitae non veniam perferendis. Vel officiis voluptatem et excepturi modi sed libero ducimus et officia aliquid. Qui consequatur provident est voluptas recusandae est minima suscipit ut odit suscipit aut doloremque fugit aut maxime blanditiis.",
      image: imagem1
    },
    {
      title: "Suporte ao cliente",
      subtitle: "equipe da selo",
      description: "Lorem ipsum dolor sit amet. Sed vero assumenda in veritatis vitae non veniam perferendis. Vel officiis voluptatem et excepturi modi sed libero ducimus et officia aliquid. Qui consequatur provident est voluptas recusandae est minima suscipit ut odit suscipit aut doloremque fugit aut maxime blanditiis.Lorem ipsum dolor sit amet. Sed vero assumenda in veritatis vitae non veniam perferendis. Vel officiis voluptatem et excepturi modi sed libero ducimus et officia aliquid. Qui consequatur provident est voluptas recusandae est minima suscipit ut odit suscipit aut doloremque fugit aut maxime blanditiis.",
      image: imagem2
    },
    {
      title: "Suporte ao cliente",
      subtitle: "trabalhos da selo",
      description: "Lorem ipsum dolor sit amet. Sed vero assumenda in veritatis vitae non veniam perferendis. Vel officiis voluptatem et excepturi modi sed libero ducimus et officia aliquid. Qui consequatur provident est voluptas recusandae est minima suscipit ut odit suscipit aut doloremque fugit aut maxime blanditiis.Lorem ipsum dolor sit amet. Sed vero assumenda in veritatis vitae non veniam perferendis. Vel officiis voluptatem et excepturi modi sed libero ducimus et officia aliquid. Qui consequatur provident est voluptas recusandae est minima suscipit ut odit suscipit aut doloremque fugit aut maxime blanditiis.",
      image: imagem3
    }
  ];

  // Estados do formulário
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // ... (seus estados existentes do formulário)
  });

  // Funções de navegação do carrossel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
    <NavBar/>
    <div className={styles.pageContainer}>
      {/* Lado Esquerdo - Formulário */}
      <div className={styles.formSide}>
        <h1 className={styles.formTitle}>Entre em contato com os especialistas da Selo</h1>
        <p className={styles.formDescription}>
          Preencha o formulário abaixo e nossa equipe entrará em contato para entender
          suas necessidades e oferecer a melhor solução para seu projeto audiovisual.
        </p>

        {/* Renderize seu componente de formulário existente aqui */}
        <div className={styles.formWrapper}>
          <Suport
            formData={formData}
            setFormData={setFormData}
            step={step}
            setStep={setStep}
          />
          {/* Exemplo: <FormComponent formData={formData} setFormData={setFormData} step={step} setStep={setStep} /> */}
        </div>
      </div>

      {/* Lado Direito - Carrossel */}
      <div className={styles.carouselSide}>
        <div className={styles.carouselContent}>
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className={styles.carouselImage}
          />

          {/* Container flex para título e controles */}
          <div className={styles.titleWithControls}>
            <h2 className={styles.carouselTitle}>{slides[currentSlide].title}</h2>
            <div className={styles.controlsWrapper}>
              <button onClick={prevSlide} className={styles.carouselButton}>‹</button>
              <button onClick={nextSlide} className={styles.carouselButton}>›</button>
            </div>
          </div>

          <div className={styles.carouselText}>
            <h3>{slides[currentSlide].subtitle}</h3>
            <p>{slides[currentSlide].description}</p>
          </div>
        </div>

        {/* Removi os controles antigos da parte inferior */}
        <div className={styles.carouselDots}>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default SuportPage;