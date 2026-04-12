import React, { useState, useEffect } from 'react';
import styles from '../../styles/componentsStyles/reusedStyles/SideScrollDots.module.css';

const sections = [
  { id: 'inicio', label: 'Início' },
  { id: 'descubra', label: 'Descubra' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'insight', label: 'Insight' },
  { id: 'contato', label: 'Contato' }
];

export const SideScrollDots = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.sideNav}>
      {sections.map((section) => (
        <div 
          key={section.id}
          className={`${styles.dotWrapper} ${activeSection === section.id ? styles.active : ''}`}
          onClick={() => scrollToSection(section.id)}
        >
          <span className={styles.label}>{section.label}</span>
          <div className={styles.dot} />
        </div>
      ))}
    </div>
  );
};
