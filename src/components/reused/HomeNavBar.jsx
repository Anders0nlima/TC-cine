import React, { useState, useEffect } from 'react';
import { useLanguage } from '../translationComponents/LanguageContext'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/componentsStyles/reusedStyles/HomeNavBar.module.css';

// Importe suas bandeiras aqui (substitua pelos imports reais)
import brazilFlag from '../../assets/homeMedia/homenavbar/brazilFlag.webp';
import ukFlag from '../../assets/homeMedia/homenavbar/ukFlag.png';
import espanhaFlag from '../../assets/homeMedia/homenavbar/espanha.webp';
import francaFlag from '../../assets/homeMedia/homenavbar/franca.webp';
import china2Flag from '../../assets/homeMedia/homenavbar/china2.png';
import logoCine3 from "../../assets/homeMedia/homenavbar/logoCine3.png"

export const HomeNavBar = ({ transparent = false }) => {
  const { language, changeLanguage } = useLanguage(); // Assume que você tem esse hook
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState(transparent ? 'transparent' : 'rgba(0, 0, 0, 1)');

  const languageOptions = {
    pt: { code: 'pt', name: 'Português', flag: brazilFlag },
    en: { code: 'en', name: 'English', flag: ukFlag },
    es: { code: 'es', name: 'español', flag: espanhaFlag },
    fr: { code: 'fr', name: 'français', flag: francaFlag },
    zh: { code: 'zh', name: '中文', flag: china2Flag }
  };

  const currentLanguage = languageOptions[language] || languageOptions['pt'];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (transparent) {
        // Calcula a opacidade baseada no scroll (0 a 200 pixels)
        const opacity = Math.min(window.scrollY / 200, 1);
        setNavbarBackground(`rgba(0, 0, 0, ${opacity})`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transparent]);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (menuOpen) {
      setNavbarFixed(true);
      const scrollbarWidth = window.innerWidth - html.clientWidth;
      
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollbarWidth}px`;
      html.classList.add(styles.noScroll);
    } else {
      setNavbarFixed(false);
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      body.style.paddingRight = '';
      html.classList.remove(styles.noScroll);
      window.scrollTo(0, scrollY);
    }

    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      body.style.paddingRight = '';
      html.classList.remove(styles.noScroll);
    };
  }, [menuOpen, scrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) setLanguageOpen(false);
  };

  const toggleLanguage = () => {
    setLanguageOpen(!languageOpen);
  };

  const handleLanguageChange = (lang) => {
    if (language === lang) {
      setLanguageOpen(false); // Fecha o menu mesmo se o idioma já estiver selecionado
      return;
    }

    changeLanguage(lang);
    setLanguageOpen(false);

    // Dá tempo para o idioma ser salvo antes do reload
    setTimeout(() => {
      window.location.reload();
    }, 100); // 100ms é suficiente na maioria dos casos
  };

  return (
    <>
      <nav 
        className={`${styles.navbar} ${navbarFixed ? styles.fixed : ''}`}
        style={{ backgroundColor: navbarBackground }}
      >
        <div className={styles.navbarLeft}>
          <button className={`${styles.iconButton} ${styles.menuButton}`} onClick={toggleMenu}>
            <FontAwesomeIcon 
              icon={menuOpen ? faTimes : faBars} 
              className={styles.icon} 
            />
          </button>
        </div>
        
       <div className={styles.navbarCenter}> {/*.navbarCenter a.logoLink*/}
                 <a href="/teste-selo" className={styles.logoLink}>
                 <img 
                   src={logoCine3}
                   alt="Microsoft Logo"
                   className={styles.logoImage}
                   height={50}
                   width={300}
                 />
                 {/*<span className={styles.brand}>Microsoft</span>*/}
                 </a>
               </div>
        
        <div className={styles.navbarRight}>
          <button className={`${styles.iconButton} ${styles.searchButton}`}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          </button>
          
          <div className={styles.languageSelector}>
            <button 
              className={`${styles.languagePill} ${languageOpen ? styles.active : ''}`}
              onClick={toggleLanguage}
            >
              <div className={styles.flagContainer}>
                <img 
                  src={currentLanguage.flag} 
                  alt={currentLanguage.name} 
                  className={styles.flagImage}
                />
              </div>
              <span className={styles.languageName}>{currentLanguage.name}</span>
              <FontAwesomeIcon 
                icon={faChevronDown} 
                className={`${styles.chevron} ${languageOpen ? styles.rotate : ''}`}
              />
            </button>
            
            {languageOpen && (
              <div className={styles.languageDropdown}>
                <button 
                  className={`${styles.languageOption} ${language === 'pt' ? styles.selected : ''}`}
                  onClick={() => handleLanguageChange('pt')}
                >
                  <div className={styles.flagContainer}>
                    <img src={brazilFlag} alt="Português" className={styles.flagImage} />
                  </div>
                  <span>Português</span>
                </button>
                <button 
                  className={`${styles.languageOption} ${language === 'en' ? styles.selected : ''}`}
                  onClick={() => handleLanguageChange('en')}
                >
                  <div className={styles.flagContainer}>
                    <img src={ukFlag} alt="English" className={styles.flagImage} />
                  </div>
                  <span>English</span>
                </button>
                <button 
                  className={`${styles.languageOption} ${language === 'fr' ? styles.selected : ''}`}
                  onClick={() => handleLanguageChange('fr')}
                >
                  <div className={styles.flagContainer}>
                    <img src={francaFlag} alt="Français" className={styles.flagImage} />
                  </div>
                  <span>Français</span>
                </button>
                <button 
                  className={`${styles.languageOption} ${language === 'es' ? styles.selected : ''}`}
                  onClick={() => handleLanguageChange('es')}
                >
                  <div className={styles.flagContainer}>
                    <img src={espanhaFlag} alt="Español" className={styles.flagImage} />
                  </div>
                  <span>Español</span>
                </button>
                <button 
                  className={`${styles.languageOption} ${language === 'zh' ? styles.selected : ''}`}
                  onClick={() => handleLanguageChange('zh')}
                >
                  <div className={styles.flagContainer}>
                    <img src={china2Flag} alt="中文" className={styles.flagImage} />
                  </div>
                  <span>中文</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className={styles.menuOverlay}>
          {/* Conteúdo do menu aqui */}
          <p>Menu content</p>
        </div>
      )}
    </>
  );
};