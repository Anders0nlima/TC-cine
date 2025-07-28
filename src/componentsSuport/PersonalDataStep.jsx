import { useState, useEffect } from 'react';
import styles from "../styles/componentsStyles/suportStyles/SuporteComp.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from '../components/translationComponents/LanguageContext';

export default function PersonalDataStep({ formData, handleChange, nextStep }) {
  const { t } = useLanguage();
  const [isValid, setIsValid] = useState(false);
  const [phoneDisplay, setPhoneDisplay] = useState('');

  // Função para formatar o telefone (ainda no padrão BR, opcionalmente remova)
  {/*const formatPhone = (input) => {
    const numbers = input.replace(/\D/g, '');
    let formatted = '';

    if (numbers.length > 0) {
      formatted = `(${numbers.substring(0, 2)}`;
    }
    if (numbers.length > 2) {
      formatted += `) ${numbers.substring(2, 7)}`;
    }
    if (numbers.length > 7) {
      formatted += `-${numbers.substring(7, 11)}`;
    }

    return formatted;
  };*/}

  // Manipulador de mudança para o campo de telefone
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const numbers = input.replace(/\D/g, '');

    // Aplica a máscara visual
    //setPhoneDisplay(formatPhone(input));

    // Atualiza o formData com todos os números (sem limitar)
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
      // Telefone é opcional
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
    } else {
      alert('Por favor, preencha todos os campos corretamente');
    }
  };

  return (
    <div className={styles.form_step}>
      <form onSubmit={handleNextClick}>
        <div className={styles.form_group}>
          <label htmlFor="nome">{t("suporte.pDNome")}</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder={t("suporte.placeholderName")}
            value={formData.nome || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="email">{t("suporte.pDEmail")}</label>
          <input
            type="email"
            id="email"
            name="email"
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
          <label htmlFor="telefone">{t("suporte.pDTel")}</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            //value={phoneDisplay}
            onChange={handlePhoneChange}
            placeholder="(...) ..."
            maxLength={20} // Aumentado para suportar formatos internacionais
          />
        </div>

        <div className={styles.form_group}>
          <label className={styles.checkbox_item}>
            <input
              type="checkbox"
              name="temEmpresa"
              checked={formData.temEmpresa || false}
              onChange={handleChange}
            />
            {t("suporte.pDEmpresa")}
          </label>

          {formData.temEmpresa && (
            <div className={styles.form_group}>
              <label htmlFor="nomeEmpresa">{t("suporte.pDNomeEmpresa")}</label>
              <input
                type="text"
                id="nomeEmpresa"
                name="nomeEmpresa"
                value={formData.nomeEmpresa || ''}
                onChange={handleChange}
              />
            </div>
          )}
        </div>

        <div className={styles.form_actions}>
          <button
            type="submit"
            className={`${styles.novoBotao} ${!isValid ? styles.disabled : ''}`}
            disabled={!isValid}
          >
            <div className={styles.amareloWrapper}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.novoIcone} />
            </div>
            <span className={styles.novoTexto}><strong>{t("suporte.pDBotao")}</strong></span>
          </button>
        </div>
      </form>
    </div>
  );
}