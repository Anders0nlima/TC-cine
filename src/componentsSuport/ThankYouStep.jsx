import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/componentsStyles/suportStyles/SuporteComp.module.css';
import { useLanguage } from '../components/translationComponents/LanguageContext';

export default function ThankYouStep() {
  const { t } = useLanguage();
  const handleGoHome = () => {
    window.location.href = '/TC-cine'; 
  };

  return (
    <div className={styles.form_step}>
      <div className={styles.thank_you_content}>
        <h2>{t("suporte.tySh2")}</h2>
        <p>{t("suporte.tySp")}</p>
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
          <span className={styles.btnTexto}><strong>{t("suporte.tySHome")}</strong></span>
        </button>
      </div>
    </div>
  );
}