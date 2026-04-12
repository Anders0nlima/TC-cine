import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, ChevronDown, Globe, MessageCircle } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import styles from '../../styles/componentsStyles/layout/NavbarPremium.module.css';
import logoCine3 from "../../assets/homeMedia/homenavbar/logoCine3.png";
import brazilFlag from '../../assets/homeMedia/homenavbar/brazilFlag.webp';
import ukFlag from '../../assets/homeMedia/homenavbar/ukFlag.png';

export const NavbarPremium = ({ hide }) => {
  const { language, changeLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'pt', name: 'PT', flag: brazilFlag },
    { code: 'en', name: 'EN', flag: ukFlag },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  const handleLangChange = (code) => {
    changeLanguage(code);
    setLangOpen(false);
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <>
      <nav className={`${styles.navbar} glass ${isScrolled ? styles.scrolled : ''} ${hide ? styles.hidden : ''}`}>
        <div className={styles.leftSection}>
          <img 
            src={logoCine3} 
            alt="TC | CINE" 
            className={styles.logo} 
            onClick={() => navigate('/')}
          />
        </div>

        <div className={styles.navLinks}>
          <Link 
            to="/" 
            className={`${styles.navItem} ${isActive('/') ? styles.activeNavItem : ''}`}
          >
            {t("navbar.home") || "Home"}
          </Link>
          <Link 
            to="/producao" 
            className={`${styles.navItem} ${isActive('/producao') ? styles.activeNavItem : ''}`}
          >
            {t("navbar.solucoes") || "Soluções"}
          </Link>
          <Link 
            to="/pos-producao" 
            className={`${styles.navItem} ${isActive('/pos-producao') ? styles.activeNavItem : ''}`}
          >
            {t("navbar.marketing") || "Marketing"}
          </Link>
        </div>

        <div className={styles.rightSection}>
          <div className={`${styles.langSelector} ${styles.desktopOnly}`} onClick={() => setLangOpen(!langOpen)}>
            <img src={currentLang.flag} alt={currentLang.name} className={styles.flag} />
            <span className={styles.navItem}>{currentLang.name}</span>
            <ChevronDown size={14} color="white" />
            
            {langOpen && (
              <div className={`${styles.langDropdown} glass`}>
                {languages.map(lang => (
                  <div 
                    key={lang.code} 
                    className={styles.langOption}
                    onClick={() => handleLangChange(lang.code)}
                  >
                    <img src={lang.flag} alt={lang.name} className={styles.flag} />
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <a 
            href="https://wa.me/message/E7CCCIDLHOIMP1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.ctaButton} ${styles.desktopOnly}`}
          >
            {t("navbar.cta") || "Solicitar Orçamento"}
          </a>

          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className={styles.mobileDrawer}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className={styles.drawerHeader}>
              <img src={logoCine3} alt="TC | CINE" className={styles.logo} />
              <button onClick={() => setMobileMenuOpen(false)} className={styles.closeBtn}>
                <X size={28} />
              </button>
            </div>

            <div className={styles.drawerLinks}>
              <Link to="/" className={styles.drawerLink} onClick={() => setMobileMenuOpen(false)}>
                <span>01.</span> {t("navbar.home") || "Home"}
              </Link>
              <Link to="/producao" className={styles.drawerLink} onClick={() => setMobileMenuOpen(false)}>
                <span>02.</span> {t("navbar.solucoes") || "Soluções"}
              </Link>
              <Link to="/pos-producao" className={styles.drawerLink} onClick={() => setMobileMenuOpen(false)}>
                <span>03.</span> {t("navbar.marketing") || "Marketing"}
              </Link>
            </div>

            <div className={styles.drawerFooter}>
              <div className={styles.drawerLangSelector}>
                <p className={styles.drawerLabel}>{t("navbar.language") || "Idioma"}</p>
                <div className={styles.langGrid}>
                  {languages.map(lang => (
                    <button 
                      key={lang.code} 
                      className={`${styles.langToggle} ${language === lang.code ? styles.activeLang : ''}`}
                      onClick={() => handleLangChange(lang.code)}
                    >
                      <img src={lang.flag} alt={lang.name} />
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <a 
                href="https://wa.me/message/E7CCCIDLHOIMP1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.drawerCta}
              >
                <MessageCircle size={20} />
                {t("navbar.cta") || "Solicitar Orçamento"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
