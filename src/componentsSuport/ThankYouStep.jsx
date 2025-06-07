import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/componentsStyles/suportStyles/SuporteComp.module.css';

export default function ThankYouStep() {
  const handleGoHome = () => {
    window.location.href = '/teste-selo'; 
  };

  return (
    <div className={styles.form_step}>
      <div className={styles.thank_you_content}>
        <h2>Obrigado!</h2>
        <p>Em breve nosso time entrará em contato pelo Email.</p>
      </div>

      <div className={styles.form_actions}>
        <button 
          type="button" 
          onClick={handleGoHome}
          className={styles.btn_primary}
        >
          <div className={styles.amareloWrapper}>
            <FontAwesomeIcon icon={faChevronRight} className={styles.btnIcone} />
          </div>
          <span className={styles.btnTexto}><strong>Home</strong></span>
        </button>
      </div>
    </div>
  );
}