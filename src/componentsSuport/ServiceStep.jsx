import { useState, useEffect } from 'react';
import styles from "../styles/componentsStyles/suportStyles/SuporteComp.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../components/translationComponents/LanguageContext';

export default function ServicesStep({ formData, handleChange, nextStep, prevStep }) {
  const { t } = useLanguage();
  const [showCustomService, setShowCustomService] = useState(false);
  const [showServicos, setShowServicos] = useState(false);
  const [showProdutos, setShowProdutos] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const toggleServicos = (e) => {
    e.stopPropagation();
    setShowServicos(!showServicos);
    if (showProdutos) setShowProdutos(false);
  };

  const toggleProdutos = (e) => {
    e.stopPropagation();
    setShowProdutos(!showProdutos);
    if (showServicos) setShowServicos(false);
  };

  const handleCheckboxChange = (field, value, e) => {
    e.stopPropagation();
    const currentValues = formData[field] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value];
    
    handleChange({
      target: {
        name: field,
        value: newValues
      }
    });
  };

  // Fechar dropdowns quando clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showServicos && !e.target.closest(`.${styles.custom_dropdown}`)) {
        setShowServicos(false);
      }
      if (showProdutos && !e.target.closest(`.${styles.custom_dropdown}`)) {
        setShowProdutos(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showServicos, showProdutos]);

  return (
    <div className={styles.form_step}>
      <form onSubmit={handleNext}>
        {/* Campo Serviço da Sela - Novo estilo com dropdown */}
        <div className={styles.form_group}>
          <label>{t("suporte.sSLabelS")}</label>
          <div className={styles.custom_dropdown}>
            <div 
              className={styles.dropdown_header}
              onClick={toggleServicos}
            >
              <span>
                {formData.servicos?.length > 0 
                  ? formData.servicos.join(', ')
                  : t("suporte.sSServicos")}
              </span>
              <span className={`${styles.dropdown_arrow} ${showServicos ? styles.rotated : ''}`}>
                ▼
              </span>
            </div>
            
            {showServicos && (
              <div className={`${styles.dropdown_options} ${styles.dropdown_container}`}>
                <div className={styles.dropdown_content}>
                  {[t("suporte.sSServicoUm"), t("suporte.sSServicoDois"), t("suporte.sSServicoTres"), t("suporte.sSServicoQuatro"), t("suporte.sSServicoCinco"), t("suporte.sSServicoSeis"), t("suporte.sSServicoSete")].map(option => (
                    <div key={option} className={styles.checkbox_item}>
                      <input
                        type="checkbox"
                        id={`servico-${option}`}
                        checked={formData.servicos?.includes(option) || false}
                        onChange={(e) => handleCheckboxChange('servicos', option, e)}
                      />
                      <label htmlFor={`servico-${option}`}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Campo Produto Selo - Novo estilo com dropdown */}
        <div className={styles.form_group}>
          <label>{t("suporte.sSLabelP")}</label>
          <div className={styles.custom_dropdown}>
            <div 
              className={styles.dropdown_header}
              onClick={toggleProdutos}
            >
              <span>
                {formData.produtos?.length > 0 
                  ? formData.produtos.join(', ')
                  : t("suporte.sSprodutos")}
              </span>
              <span className={`${styles.dropdown_arrow} ${showProdutos ? styles.rotated : ''}`}>
                ▼
              </span>
            </div>
            
            {showProdutos && (
              <div className={`${styles.dropdown_options} ${styles.dropdown_container}`}>
                <div className={styles.dropdown_content}>
                  {[t("suporte.sSProdutoUm"), t("suporte.sSProdutoDois"), t("suporte.sSProdutoTres")].map(option => (
                    <div key={option} className={styles.checkbox_item}>
                      <input
                        type="checkbox"
                        id={`produto-${option}`}
                        checked={formData.produtos?.includes(option) || false}
                        onChange={(e) => handleCheckboxChange('produtos', option, e)}
                      />
                      <label htmlFor={`produto-${option}`}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Opção personalizada (mantida igual) */}
        <div className={styles.form_group}>
          <label className={styles.checkbox_item}>
            <input
              type="checkbox"
              checked={showCustomService}
              onChange={() => setShowCustomService(!showCustomService)}
            />
            {t("suporte.sSProcurava")}
          </label>
          
          {showCustomService && (
            <div className={styles.form_group}>
              <label htmlFor="servicoPersonalizado">{t("suporte.sSDescreva")}</label>
              <textarea
                id="servicoPersonalizado"
                name="servicoPersonalizado"
                value={formData.servicoPersonalizado || ''}
                onChange={handleChange}
                rows="3"
              />
            </div>
          )}
        </div>

        <div className={styles.form_actions}>
          <button 
            type="button" 
            className={styles.btn_secondary} 
            onClick={prevStep}
          >
            <div className={styles.azulWrapper}>
              <FontAwesomeIcon icon={faChevronLeft} className={styles.btnIcone} />
            </div>
            <span className={styles.btnTexto}><strong>{t("suporte.sSbotaoVolta")}</strong></span>
          </button>

          <button 
            type="submit" 
            className={styles.btn_primary}
          >
            <div className={styles.amareloWrapper}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.btnIcone} />
            </div>
            <span className={styles.btnTexto}><strong>{t("suporte.sSBotaoProximo")}</strong></span>
          </button>
        </div>
      </form>
    </div>
  );
}