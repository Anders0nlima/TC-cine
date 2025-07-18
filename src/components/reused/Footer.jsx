import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedinIn, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import styles from '../../styles/componentsStyles/reusedStyles/Footer.module.css';
import { useLanguage } from '../translationComponents/LanguageContext';
import logo1 from '../../assets/footerMedia/logofooter2.png'
import logo2 from '../../assets/footerMedia/logofooter1.png'
import logo3 from '../../assets/homeMedia/homenavbar/descubraImg1.png'
import logo4 from '../../assets/homeMedia/homenavbar/descubraImg2.png'
import logo5 from '../../assets/homeMedia/homenavbar/logoCine3.png'

import brazilFlag from '../../assets/homeMedia/homenavbar/brazilFlag.webp';
import ukFlag from '../../assets/homeMedia/homenavbar/ukFlag.png';
import espanhaFlag from "../../assets/homeMedia/homenavbar/espanha.webp"
import francaFlag from "../../assets/homeMedia/homenavbar/franca.webp"
import china2Flag from "../../assets/homeMedia/homenavbar/china2.png"

import { faBars, faTimes, faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const { t } = useLanguage();
  const { language, changeLanguage } = useLanguage();
  const [languageOpen, setLanguageOpen] = useState(false);

  const languageOptions = {
      pt: { code: 'pt', name: 'Português', flag: brazilFlag },
      en: { code: 'en', name: 'English', flag: ukFlag },
      es: { code: 'es', name: 'español', flag: espanhaFlag },
      fr: { code: 'fr', name: 'français', flag: francaFlag },
      zh: { code: 'zh', name: '中文', flag: china2Flag }
    };

  const currentLanguage = languageOptions[language] || languageOptions['pt'];

  const toggleLanguage = () => {
    setLanguageOpen(!languageOpen);
  };

  const handleLanguageChange = (lang) => {
    if (language === lang) {
      setLanguageOpen(false);
      return;
  }

  changeLanguage(lang);
  setLanguageOpen(false);

  setTimeout(() => {
    window.location.reload();
  }, 100);
};

  return (
    <footer className={styles.main_footer}>
      {/* Primeira parte: Logos e troca de idioma */}
      <div className={styles.footer_top}>
        <div className={styles.logo_group}>
          {/* Substitua os src abaixo pelos caminhos das logos */}
          <img className={styles.especifica} src={logo1} alt="Logo 1" />
          <img src={logo2} alt="Logo 2" />
          <img src={logo3} alt="Logo 3" />
          <img src={logo4} alt="Logo 4" />
          <img src={logo5} alt="Logo 5" />
        </div>
        {/* Substitua pelo componente de troca de idioma */}
        <div className={styles.language_switcher}>
           

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
      </div>

      {/* Segunda parte: Links + Newsletter + Redes Sociais */}
      <div className={styles.footer_middle}>
        <div className={styles.links_grid}>
          <Link to="/suporte">{t("mainFooter.linkUm")}</Link>
          <Link to="/bibliotecas">{t("mainFooter.linkDois")}</Link>
          <Link to="/junte-se">{t("mainFooter.linkTres")}</Link>
          <Link to="/servicos">{t("mainFooter.linkQuatro")}</Link>
          <Link to="/projetos">{t("mainFooter.linkCinco")}</Link>
          <Link to="/eventos">{t("mainFooter.linkSeis")}</Link>
          <Link to="/equipe">{t("mainFooter.linkSete")}</Link>
          <Link to="/parcerias">{t("mainFooter.linkOito")}</Link>
          <Link to="/contato">{t("mainFooter.linkNove")}</Link>
        </div>
        <div className={styles.newsletter}>
          <p>{t("mainFooter.newsletterText")}</p>
          <form>
            <input type="email" placeholder={t("mainFooter.emailPlaceholder")} />
            <button type="submit">{t("mainFooter.subscribe")}</button>
          </form>

          <h4 className={styles.redesSociaisText}>{t("mainFooter.redes")}</h4>
          <div className={styles.social_icons}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>
      </div>

      {/* Terceira parte: Políticas */}
      <div className={styles.footer_bottom}>
        
        <div className={styles.links}>
        <Link to="/termos">{t("mainFooter.terms")}</Link>
        <Link to="/cookies">{t("mainFooter.cookies")}</Link>
        <Link to="/privacidade">{t("mainFooter.privacy")}</Link>
        </div>

        <div className={styles.copyright}>
          <p>{t("mainFooter.copyright")}</p>
        </div>
       
      </div>
    </footer>
  );
}

export default Footer;