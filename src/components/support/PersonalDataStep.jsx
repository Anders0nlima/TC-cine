import { useState, useEffect } from 'react';
import styles from "../../styles/componentsStyles/supportStyles/SuporteComp.module.css";
import { useLanguage } from '../context/LanguageContext';
import { MagneticEffect } from '../animations/MagneticEffect';

export default function PersonalDataStep({ formData, handleChange, nextStep }) {
  const { t } = useLanguage();
  const [isValid, setIsValid] = useState(false);

  // Manipulador de mudança para o campo de telefone
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const numbers = input.replace(/\D/g, '');

    handleChange({
      target: {
        name: 'telefone',
        value: numbers.substring(0, 20)
      }
    });
  };

  // Validação automática quando os dados mudam
  useEffect(() => {
    const valid = (
      formData.nome?.trim() !== '' &&
      formData.email?.trim() !== '' &&
      validateEmail(formData.email)
    );
    setIsValid(valid);
  }, [formData]);

  const validateEmail = (email) => {
    if (!email) return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(email);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if (isValid) {
      nextStep();
    }
  };

  return (
    <div className={styles.form_step_internal}>
      <form onSubmit={handleNextClick}>
        <div className={styles.form_group}>
          <label className={styles.label} htmlFor="nome">{t("suporte.pDNome")}</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className={styles.input}
            placeholder={t("suporte.placeholderName")}
            value={formData.nome || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label className={styles.label} htmlFor="email">{t("suporte.pDEmail")}</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder={t("suporte.placeholderEmail")}
            value={formData.email || ''}
            onChange={handleChange}
            required
          />
          {formData.email && !validateEmail(formData.email) && (
            <p className={styles.error_message}>{t("suporte.plDMsgE")}</p>
          )}
        </div>

        <div className={styles.form_group}>
          <label className={styles.label} htmlFor="telefone">{t("suporte.pDTel")}</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            className={styles.input}
            onChange={handlePhoneChange}
            placeholder="(...) ..."
            maxLength={20}
          />
        </div>

        <div className={styles.form_group}>
          <label className={styles.checkbox_item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              name="temEmpresa"
              checked={formData.temEmpresa || false}
              onChange={handleChange}
              style={{ width: '1.2rem', height: '1.2rem' }}
            />
            <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{t("suporte.pDEmpresa")}</span>
          </label>

          {formData.temEmpresa && (
            <div className={styles.form_group} style={{ marginTop: '1.5rem' }}>
              <label className={styles.label} htmlFor="nomeEmpresa">{t("suporte.pDNomeEmpresa")}</label>
              <input
                type="text"
                id="nomeEmpresa"
                name="nomeEmpresa"
                className={styles.input}
                value={formData.nomeEmpresa || ''}
                onChange={handleChange}
              />
            </div>
          )}
        </div>

        <div className={styles.form_actions}>
          <MagneticEffect>
            <button
              type="submit"
              className={styles.btn_primary}
              disabled={!isValid}
            >
              <strong>{t("suporte.pDBotao")}</strong>
            </button>
          </MagneticEffect>
        </div>
      </form>
    </div>
  );
}

