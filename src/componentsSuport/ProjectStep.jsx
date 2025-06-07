import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/componentsStyles/suportStyles/SuporteComp.module.css";
import ThankYouStep from './ThankYouStep';

export default function ProjectStep({ 
  formData, 
  handleChange, 
  prevStep, 
  handleSubmit: parentHandleSubmit 
}) {
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

    // Primeiro envia para o Formspree
    await handleFormspreeSubmit(formDataToSend);
    
    // Depois chama o handler do pai (se necessário)
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
          <label>Tipo de Mídia</label>
          <div className={styles.custom_dropdown}>
            <div 
              className={styles.dropdown_header}
              onClick={toggleMidias}
            >
              <span>
                {formData.midias?.length > 0 
                  ? formData.midias.join(', ')
                  : 'Selecione os tipos de mídia'}
              </span>
              <span className={`${styles.dropdown_arrow} ${showMidias ? styles.rotated : ''}`}>
                ▼
              </span>
            </div>
            
            {showMidias && (
              <div className={`${styles.dropdown_options} ${styles.dropdown_container}`}>
                <div className={styles.dropdown_content}>
                  {['Vídeo Digital', 'TV/Cinema', 'Mídia Impressa', 'Redes Sociais'].map(option => (
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
            <p className={styles.error_message}>Selecione pelo menos um tipo de mídia</p>
          )}
        </div>

        {/* Campo Descrição do Projeto */}
        <div className={styles.form_group}>
          <label htmlFor="descricaoProjeto">Descrição do Projeto</label>
          <textarea
            id="descricaoProjeto"
            name="descricaoProjeto"
            value={formData.descricaoProjeto || ''}
            onChange={handleChange}
            rows="5"
            required
            placeholder="Descreva detalhes do seu projeto, objetivos, prazo, etc."
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
            Deseja receber notificações da Selo?
          </label>
        </div>

        {/* Feedback Opcional */}
        <div className={styles.form_group}>
          <label className={styles.checkbox_item}>
            <input
              type="checkbox"
              checked={showFeedback}
              onChange={() => setShowFeedback(!showFeedback)}
            />
            Dar feedback sobre o formulário (opcional)
          </label>
          
          {showFeedback && (
            <div className={styles.form_group}>
              <label htmlFor="feedback">Sua opinião</label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback || ''}
                onChange={handleChange}
                rows="3"
                placeholder="O que achou da experiência de preenchimento?"
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
            <span className={styles.btnTexto}><strong>Voltar</strong></span>
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
                {state.submitting ? 'Enviando...' : 'Finalizar'}
              </strong>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}