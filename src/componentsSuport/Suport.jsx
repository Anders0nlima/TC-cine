import { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import styles from "../styles/componentsStyles/suportStyles/SuporteComp.module.css";
import PersonalDataStep from './PersonalDataStep';
import ServicesStep from './ServiceStep';
import ProjectStep from './ProjectStep';
import FormProgress from './FormProgress';
import ThankYouStep from './ThankYouStep';

export default function Suport() {
  const [step, setStep] = useState(1);
  const [state, handleSubmit] = useForm("xblkyowv");
  const [formData, setFormData] = useState({
    // Dados Pessoais
    nome: '',
    email: '',
    telefone: '',
    temEmpresa: false,
    nomeEmpresa: '',
    
    // Serviços e Produtos
    servicos: [],
    produtos: [],
    servicoPersonalizado: '',
    
    // Descrição do Projeto
    midias: [],
    descricaoProjeto: '',
    notificacoes: false,
    
    // Feedback
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
      servicos: formData.servicos.join(', '),
      produtos: formData.produtos.join(', '),
      servicoPersonalizado: formData.servicoPersonalizado,
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
        return <ServicesStep 
                 formData={formData} 
                 handleChange={handleChange}
                 handleCheckboxChange={handleCheckboxChange}
                 nextStep={nextStep} 
                 prevStep={prevStep} 
               />;
      case 3:
        return <ProjectStep
                 formData={formData} 
                 handleChange={handleChange}
                 handleCheckboxChange={handleCheckboxChange}
                 handleSubmit={handleFormSubmit}
                 prevStep={prevStep} 
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
      {step <= 3 && (
        <FormProgress 
          currentStep={step}
          allStepsCompleted={allStepsCompleted || state.succeeded}
        />
      )}
      {state.succeeded ? <ThankYouStep /> : renderStep()}
    </div>
  );
}