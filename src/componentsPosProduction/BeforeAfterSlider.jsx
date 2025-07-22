import React, { useState, useRef, useEffect } from 'react';
import styles from "../styles/componentsStyles/posProductionStyles/BeforeAfterSlider.module.css";
import antes1 from "../assets/posProductionMedia/antes1.png";
import antes2 from "../assets/posProductionMedia/antes2.png";
import antes3 from "../assets/posProductionMedia/antes3.png";
import depois1 from "../assets/posProductionMedia/depois1.png";
import depois2 from "../assets/posProductionMedia/depois2.png";
import depois3 from "../assets/posProductionMedia/depois3.png";
import thumb1 from "../assets/posProductionMedia/thumb1.png";
import thumb2 from "../assets/posProductionMedia/thumb2.png";
import thumb3 from "../assets/posProductionMedia/thumb3.png";
import antes4 from "../assets/posProductionMedia/imgrind1_1.png";
import depois4 from "../assets/posProductionMedia/imgrind1_2.png";
import thumb4 from "../assets/posProductionMedia/thumb4.png";
import antes5 from "../assets/posProductionMedia/imgring2_1.png";
import depois5 from "../assets/posProductionMedia/imgrind2_2.png";
import thumb5 from "../assets/posProductionMedia/thumb5.png";
import antes6 from "../assets/posProductionMedia/imgring3_1.png";
import depois6 from "../assets/posProductionMedia/imgrind3_2.png";
import thumb6 from "../assets/posProductionMedia/thumb6.png";

const BeforeAfterSlider = () => {
  const imagePairs = [
    {
      id: 1,
      before: antes4, /*semEfeitoImg1*/
      after: depois4, /*comEfeitoImg1*/
      thumbnail: thumb4 /*comEfeitoImg1*/
    },
    {
      id: 2,
      before: antes6, /*semEfeitoImg1*/
      after: depois6, /*comEfeitoImg1*/
      thumbnail: thumb6 /*comEfeitoImg1*/
    },
    {
      id: 3,
      before: antes5, /*semEfeitoImg1*/
      after: depois5, /*comEfeitoImg1*/
      thumbnail: thumb5 /*comEfeitoImg1*/
    }
  ];

  const [activePair, setActivePair] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleThumbnailClick = (index) => {
    setActivePair(index);
    setSliderPosition(50);
  };

  const startDragging = (e) => {
    isDragging.current = true;
    document.body.style.cursor = 'grabbing';
    e.preventDefault();
  };

  const stopDragging = () => {
    isDragging.current = false;
    document.body.style.cursor = '';
  };

  const handleDrag = (e) => {
    if (!isDragging.current) return;
    
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    let posX = e.clientX - containerRect.left;
    
    posX = Math.max(0, Math.min(posX, containerRect.width));
    const percent = (posX / containerRect.width) * 100;
    
    setSliderPosition(percent);
  };

  useEffect(() => {
    const handleMouseUp = () => stopDragging();
    const handleMouseMove = (e) => handleDrag(e);
    const handleTouchMove = (e) => {
      if (e.touches.length) {
        handleDrag(e.touches[0]);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

 return (
  <div className={styles.before_after_container}>
    <div 
      ref={containerRef}
      className={styles.slider_container}
    >
      {/* Conteúdo do slider */}
      <div className={styles.slider_content}>
        {/* Imagem SEM efeito */}
        <div className={styles.image_container}>
          <img src={imagePairs[activePair].before} alt="Sem efeito" className={styles.before_image} />
        </div>
        
        {/* Imagem COM efeito */}
        <div 
          className={styles.after_image_container}
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img src={imagePairs[activePair].after} alt="Com efeito" className={styles.after_image} />
        </div>
        
        {/* Controle do slider */}
        <div 
          className={styles.slider_handle} 
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={startDragging}
          onTouchStart={startDragging}
        >
          <div className={styles.slider_line}></div>
          <div className={styles.scan_indicator}>
            <span className={styles.arrows}>&lt; &gt;</span>
          </div>
        </div>
      </div>

      {/* Miniaturas dentro do container mas fora da área arrastável */}
      <div className={styles.thumbnails}>
        {imagePairs.map((pair, index) => (
          <div 
            key={pair.id}
            className={`${styles.thumbnail} ${index === activePair ? styles.active : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={pair.thumbnail} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default BeforeAfterSlider;