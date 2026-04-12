import React from 'react';
import styles from '../../styles/componentsStyles/supportStyles/SuporteComp.module.css';
import { useLanguage } from '../context/LanguageContext';
import { MagneticEffect } from '../animations/MagneticEffect';

export default function ThankYouStep() {
  const { t } = useLanguage();
  const handleGoHome = () => {
    window.location.href = '/'; 
  };

  return (
    <div className={styles.thank_you_content}>
      <h2>{t("suporte.tySh2")}</h2>
      <p>{t("suporte.tySp")}</p>

      <div className={styles.form_actions} style={{ justifyContent: 'center' }}>
        <MagneticEffect>
          <button 
            type="button" 
            onClick={handleGoHome}
            className={styles.btn_primary}
          >
            <strong>{t("suporte.tySHome")}</strong>
          </button>
        </MagneticEffect>
      </div>
    </div>
  );
}

