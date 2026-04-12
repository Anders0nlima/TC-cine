import React from 'react';
import styles from '../../styles/componentsStyles/animations/ShinyText.module.css';

/**
 * ShinyText Component (React Bits Style)
 * Adds a moving light glare effect to text.
 */
export const ShinyText = ({ text, disabled = false, speed = 5, className = "", variant = "" }) => {
  const animationDuration = `${speed}s`;
  const variantClass = variant === 'gold' ? styles.gold : '';

  return (
    <span
      className={`${styles.shinyText} ${disabled ? styles.disabled : ''} ${variantClass} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </span>
  );
};
