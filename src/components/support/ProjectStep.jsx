import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from "../../styles/componentsStyles/supportStyles/SuporteComp.module.css";
import ThankYouStep from './ThankYouStep';
import { useLanguage } from '../context/LanguageContext';
import { MagneticEffect } from '../animations/MagneticEffect';
import { ShinyText } from '../animations/ShinyText';

export default function ProjectStep({ 
  formData, 
  handleChange, 
  prevStep, 
  handleSubmit: parentHandleSubmit 
}) {
  const { t } = useLanguage();
  const [state, handleFormspreeSubmit] = useForm("xblkyowv");
  const [showMidias, setShowMidias] = useState(false);

  const toggleMidias = (e) => {
    e.stopPropagation();
    setShowMidias(!showMidias);
  };

  const handleCheckboxChange = (value, e) => {
    e.stopPropagation();
    const currentValues = formData.midias || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value];
    
    handleChange({
      target: {
        name: 'midias',
        value: newValues
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showMidias && !e.target.closest(`.${styles.custom_dropdown}`)) {
        setShowMidias(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showMidias]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      empresa: formData.temEmpresa ? formData.nomeEmpresa : '',
      midias: formData.midias?.join(', ') || '',
      descricao: formData.descricaoProjeto,
      notificacoes: formData.notificacoes ? 'Sim' : 'Não',
      feedback: formData.feedback || '',
      _subject: 'Nova solicitação - Selo Audiovisual',
      _replyto: formData.email
    };

    await handleFormspreeSubmit(formDataToSend);
    
    if (parentHandleSubmit) {
      parentHandleSubmit(e);
    }
  };

  if (state.succeeded) {
    return (
      <div className={styles.form_step_internal}>
        <ThankYouStep />
      </div>
    );
  }

  return (
    <div className={styles.form_step_internal}>
      <form onSubmit={handleFormSubmit}>
        {/* Campo Tipo de Mídia */}
        <div className={styles.form_group}>
          <label className={styles.label}>{t("suporte.pSStep")}</label>
          <div className={styles.custom_dropdown}>
            <div 
              className={styles.dropdown_header}
              onClick={toggleMidias}
            >
              <span style={{ color: formData.midias?.length > 0 ? '#111' : '#999' }}>
                {formData.midias?.length > 0 
                  ? formData.midias.join(', ')
                  : t("suporte.pSMidia")}
              </span>
              <span className={`${styles.dropdown_arrow} ${showMidias ? styles.rotated : ''}`}>
                ▼
              </span>
            </div>
            
            {showMidias && (
              <div className={`${styles.dropdown_options} ${styles.dropdown_container}`}>
                <div className={styles.dropdown_content}>
                  {[t("suporte.pSMidiaUm"), t("suporte.pSMidiaDois"), t("suporte.pSMidiaTres"), t("suporte.pSMidiaQuatro")].map(option => (
                    <div key={option} className={styles.checkbox_item} onClick={(e) => handleCheckboxChange(option, e)} style={{ cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        id={`midia-${option}`}
                        checked={formData.midias?.includes(option) || false}
                        onChange={() => {}} // Handle via onClick of container
                        style={{ width: '1.2rem', height: '1.2rem', cursor: 'pointer' }}
                      />
                      <label htmlFor={`midia-${option}`} style={{ cursor: 'pointer', flex: 1 }}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {formData.midias?.length === 0 && (
            <p className={styles.error_message}>{t("suporte.pSMsg")}</p>
          )}
        </div>

        {/* Campo Descrição do Projeto */}
        <div className={styles.form_group}>
          <label className={styles.label} htmlFor="descricaoProjeto">{t("suporte.pSDescricao")}</label>
          <textarea
            id="descricaoProjeto"
            name="descricaoProjeto"
            className={styles.textarea}
            value={formData.descricaoProjeto || ''}
            onChange={handleChange}
            rows="5"
            required
            placeholder={t("suporte.pSPlaceholder")}
          />
          <ValidationError 
            prefix="Descrição" 
            field="descricaoProjeto"
            errors={state.errors}
          />
        </div>

        {/* Checkbox Notificações */}
        <div className={styles.form_group}>
          <label className={styles.checkbox_item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              name="notificacoes"
              checked={formData.notificacoes || false}
              onChange={handleChange}
              style={{ width: '1.2rem', height: '1.2rem', cursor: 'pointer' }}
            />
            <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{t("suporte.pSNotificacao")}</span>
          </label>
        </div>

        {/* Ações do Formulário */}
        <div className={styles.form_actions}>
          <MagneticEffect>
            <button 
              type="button" 
              className={styles.btn_secondary} 
              onClick={prevStep}
            >
              <strong>{t("suporte.pSBotaoVolta")}</strong>
            </button>
          </MagneticEffect>

          <MagneticEffect>
            <button 
              type="submit" 
              className={`${styles.btn_primary} ${state.submitting ? styles.submitting : ''}`}
              disabled={state.submitting || formData.midias?.length === 0}
            >
              {state.submitting ? (
                <span>{t('suporte.pSBotaoEnviando')}</span>
              ) : (
                <ShinyText 
                  text={t('suporte.pSBotaoFinalizado')} 
                  disabled={false} 
                  speed={3} 
                  className={styles.shinyButtonText} 
                />
              )}
            </button>
          </MagneticEffect>
        </div>
      </form>
    </div>
  );
}

