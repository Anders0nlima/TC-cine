import styles from "../styles/componentsStyles/suportStyles/SuporteComp.module.css";

export default function FormProgress({ currentStep, allStepsCompleted }) {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressNav}>
        {/* Passo 1 */}
        <div className={`${styles.progressStep} ${currentStep >= 1 ? styles.completed : ''}`}>
          <div className={styles.stepTitle}>Dados Pessoais</div>
          <div className={`${styles.stepLine} ${allStepsCompleted || currentStep > 1 ? styles.completed : ''}`}></div>
        </div>

        <div className={styles.stepDivider}>|</div>

        {/* Passo 2 */}
        <div className={`${styles.progressStep} ${currentStep >= 2 ? styles.completed : ''}`}>
          <div className={styles.stepTitle}>Serviços e Produtos</div>
          <div className={`${styles.stepLine} ${allStepsCompleted || currentStep > 2 ? styles.completed : ''}`}></div>
        </div>

        <div className={styles.stepDivider}>|</div>

        {/* Passo 3 */}
        <div className={`${styles.progressStep} ${currentStep >= 3 ? styles.completed : ''}`}>
          <div className={styles.stepTitle}>Descrição do Projeto</div>
          <div className={`${styles.stepLine} ${allStepsCompleted ? styles.completed : ''}`}></div>
        </div>
      </div>
    </div>
  );
}