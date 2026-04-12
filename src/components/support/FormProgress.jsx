import { useLanguage } from "../context/LanguageContext";
import styles from "../../styles/componentsStyles/supportStyles/SuporteComp.module.css";

export default function FormProgress({ currentStep, allStepsCompleted }) {
  const { t } = useLanguage();
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressNav}>
        {/* Passo 1 */}
        <div className={`${styles.progressStep} ${currentStep >= 1 ? styles.completed : ''}`}>
          <div className={styles.stepTitle}>{t("suporte.progressUm")}</div>
          <div className={`${styles.stepLine} ${allStepsCompleted || currentStep > 1 ? styles.completed : ''}`}></div>
        </div>

        {/* Passo 2 */}
        <div className={`${styles.progressStep} ${currentStep >= 2 ? styles.completed : ''}`}>
          <div className={styles.stepTitle}>{t("suporte.progressTres")}</div>
          <div className={`${styles.stepLine} ${allStepsCompleted ? styles.completed : ''}`}></div>
        </div>
      </div>
    </div>
  );
}

