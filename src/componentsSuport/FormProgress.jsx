import { useLanguage } from "../components/translationComponents/LanguageContext";
import styles from "../styles/componentsStyles/suportStyles/SuporteComp.module.css";

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

        <div className={styles.stepDivider}>|</div>

        {/* Passo 2 */}
        <div className={`${styles.progressStep} ${currentStep >= 2 ? styles.completed : ''}`}>
          <div className={styles.stepTitle}>{t("suporte.progressDois")}</div>
          <div className={`${styles.stepLine} ${allStepsCompleted || currentStep > 2 ? styles.completed : ''}`}></div>
        </div>

        <div className={styles.stepDivider}>|</div>

        {/* Passo 3 */}
        <div className={`${styles.progressStep} ${currentStep >= 3 ? styles.completed : ''}`}>
          <div className={styles.stepTitle}>{t("suporte.progressTres")}</div>
          <div className={`${styles.stepLine} ${allStepsCompleted ? styles.completed : ''}`}></div>
        </div>
      </div>
    </div>
  );
}