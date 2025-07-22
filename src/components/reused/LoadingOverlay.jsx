import styles from '../../styles/componentsStyles/reusedStyles/LoadingOverlay.module.css';

export const LoadingOverlay = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
};