import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/componentsStyles/suportStyles/SuporteComp.module.css";
import ThankYouStep from './ThankYouStep';
import { useLanguage } from '../components/translationComponents/LanguageContext';

export default function ProjectStep({ 
  formData, 
  handleChange, 
  prevStep, 
  handleSubmit: parentHandleSubmit 
}) {
  const { t } = useLanguage();
  const [state, handleFormspreeSubmit] = useForm("xgvkvrzk");
  const [showFeedback, setShowFeedback] = useState(false);
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

  // ✅ NOVO useEffect: inscreve o usuário ao marcar notificações
  useEffect(() => {
    if (formData.notificacoes && formData.email) {
      console.log(`Inscrevendo ${formData.email} para notificações`);
      
      // Exemplo real:
      // fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email: formData.email })
      // })
      // .then(res => res.json())
      // .then(data => console.log("Inscrição confirmada", data))
      // .catch(err => console.error("Erro ao inscrever", err));
    }
  }, [formData.notificacoes, formData.email]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      empresa: formData.temEmpresa ? formData.nomeEmpresa : '',
      servicos: formData.servicos?.join(', ') || '',
      produtos: formData.produtos?.join(', ') || '',
      servico_personalizado: formData.servicoPersonalizado || '',
      midias: formData.midias?.join(', ') || '',
      descricao: formData.descricaoProjeto,
      notificacoes: formData.notificacoes ? 'Sim' : 'Não',
      feedback: showFeedback ? formData.feedback : '',
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
      <div className={styles.form_step}>
        <ThankYouStep />
      </div>
    );
  }

  return (
    <div className={styles.form_step}>
      <form onSubmit={handleFormSubmit}>
        {/* Campo Tipo de Mídia */}
        <div className={styles.form_group}>
          <label>{t("suporte.pSStep")}</label>
          <div className={styles.custom_dropdown}>
            <div 
              className={styles.dropdown_header}
              onClick={toggleMidias}
            >
              <span>
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
                    <div key={option} className={styles.checkbox_item}>
                      <input
                        type="checkbox"
                        id={`midia-${option}`}
                        checked={formData.midias?.includes(option) || false}
                        onChange={(e) => handleCheckboxChange(option, e)}
                      />
                      <label htmlFor={`midia-${option}`}>{option}</label>
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
          <label htmlFor="descricaoProjeto">{t("suporte.pSDescricao")}</label>
          <textarea
            id="descricaoProjeto"
            name="descricaoProjeto"
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
          <label className={styles.checkbox_item}>
            <input
              type="checkbox"
              name="notificacoes"
              checked={formData.notificacoes || false}
              onChange={handleChange}
            />
            {t("suporte.pSNotificacao")}
          </label>
        </div>

        {/* Feedback Opcional */}
        <div className={styles.form_group}>
          <label className={styles.checkbox_item}>
            {/*<input
              type="checkbox"
              checked={showFeedback}
              onChange={() => setShowFeedback(!showFeedback)}
            />
            {t("suporte.pSFeedBack")}*/}
          </label>
          
          {showFeedback && (
            <div className={styles.form_group}>
              <label htmlFor="feedback">{t("suporte.pSFeed")}</label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback || ''}
                onChange={handleChange}
                rows="3"
                placeholder={t("suporte.pSOpiniao")}
              />
            </div>
          )}
        </div>

        {/* Ações do Formulário */}
        <div className={styles.form_actions}>
          <button 
            type="button" 
            className={styles.btn_secondary} 
            onClick={prevStep}
          >
            <div className={styles.azulWrapper}>
              <FontAwesomeIcon icon={faChevronLeft} className={styles.btnIcone} />
            </div>
            <span className={styles.btnTexto}><strong>{t("suporte.pSBotaoVolta")}</strong></span>
          </button>

          <button 
            type="submit" 
            className={`${styles.btn_primary} ${state.submitting ? styles.submitting : ''}`}
            disabled={state.submitting}
          >
            <div className={styles.amareloWrapper}>
              {!state.submitting && (
                <FontAwesomeIcon icon={faChevronRight} className={styles.btnIcone} />
              )}
            </div>
            <span className={styles.btnTexto}>
              <strong>
                {state.submitting ? t('suporte.pSBotaoEnviando') : t('suporte.pSBotaoFinalizado')}
              </strong>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}