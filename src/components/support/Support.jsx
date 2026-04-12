import { useState } from 'react';
import { useForm } from '@formspree/react';
import styles from "../../styles/componentsStyles/supportStyles/SuporteComp.module.css";
import PersonalDataStep from './PersonalDataStep';
import ProjectStep from './ProjectStep';
import FormProgress from './FormProgress';
import ThankYouStep from './ThankYouStep';

export default function Support() {
  const [step, setStep] = useState(1);
  const [state, handleSubmit] = useForm("xblkyowv");
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    temEmpresa: false,
    nomeEmpresa: '',
    midias: [],
    descricaoProjeto: '',
    notificacoes: false,
    feedback: ''
  });

  const [allStepsCompleted, setAllStepsCompleted] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCheckboxChange = (group, value) => {
    setFormData(prev => {
      const currentValues = prev[group] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];
      
      return { ...prev, [group]: newValues };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setAllStepsCompleted(true);
    
    const formDataToSend = {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      empresa: formData.temEmpresa ? formData.nomeEmpresa : '',
      midias: formData.midias.join(', '),
      descricaoProjeto: formData.descricaoProjeto,
      notificacoes: formData.notificacoes ? 'Sim' : 'Não',
      feedback: formData.feedback || ''
    };

    await handleSubmit(formDataToSend);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return <PersonalDataStep 
                 formData={formData} 
                 handleChange={handleChange} 
                 nextStep={nextStep} 
               />;
      case 2:
        return <ProjectStep
                 formData={formData} 
                 handleChange={handleChange}
                 handleCheckboxChange={handleCheckboxChange}
                 handleSubmit={handleFormSubmit}
                 prevStep={prevStep} 
                 submitting={state.submitting}
               />;
      default:
        return <PersonalDataStep 
                 formData={formData} 
                 handleChange={handleChange} 
                 nextStep={nextStep} 
               />;
    }
  };

  return (
    <div className={styles.form_container}>
      {step <= 2 && (
        <FormProgress 
          currentStep={step}
          allStepsCompleted={allStepsCompleted || state.succeeded}
        />
      )}
      <div className={styles.form_step}>
        {state.succeeded ? <ThankYouStep /> : renderStep()}
      </div>
    </div>
  );
}

