import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedinIn, faTiktok, faXTwitter  } from '@fortawesome/free-brands-svg-icons';
import styles from '../../styles/componentsStyles/reusedStyles/Footer.module.css';
import { useLanguage } from '../translationComponents/LanguageContext';
import logo1 from '../../assets/footerMedia/logofooter2.png'
import logo2 from '../../assets/footerMedia/logofooter1.png'
import logo3 from '../../assets/footerMedia/log3.png'
import logo4 from '../../assets/footerMedia/log4.png'
import logo5 from '../../assets/footerMedia/log5.png'

import brazilFlag from '../../assets/homeMedia/homenavbar/brazilFlag.webp';
import ukFlag from '../../assets/homeMedia/homenavbar/ukFlag.png';
import espanhaFlag from "../../assets/homeMedia/homenavbar/espanha.webp"
import francaFlag from "../../assets/homeMedia/homenavbar/franca.webp"
import china2Flag from "../../assets/homeMedia/homenavbar/china2.png"

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const { t } = useLanguage();
  const { language, changeLanguage } = useLanguage();
  const [languageOpen, setLanguageOpen] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xblkyowv', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert('Erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleNotReady = (e) => {
  e.preventDefault(); // impede a navegação
  alert("Esta página ainda não está pronta.");
};

  return (
    <footer className={styles.main_footer}>
      {/* Primeira parte: Logos e troca de idioma */}
      <div className={styles.footer_top}>
        <div className={styles.logo_group}>
          <img className={styles.especifica} src={logo1} alt="Logo 1" />
          <img src={logo2} alt="Logo 2" />
          <img src={logo3} alt="Logo 3" />
          <img src={logo4} alt="Logo 4" />
          <img src={logo5} alt="Logo 5" />
        </div>
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
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Segunda parte: Links + Newsletter + Redes Sociais */}
      <div className={styles.footer_middle}>
        <div className={styles.links_grid}>
          <Link to="/suporte">{t("mainFooter.linkUm")}</Link>
          <Link to="/infoPages/sobre" onClick={handleNotReady}>{t("mainFooter.linkDois")}</Link>
          <Link to="/infoPages/servicos" onClick={handleNotReady}>{t("mainFooter.linkTres")}</Link>
          <Link to="/infoPages/junte" onClick={handleNotReady}>{t("mainFooter.linkQuatro")}</Link>
          <Link to="/infoPages/bibliotecas" onClick={handleNotReady}>{t("mainFooter.linkCinco")}</Link>
          <Link to="/infoPages/equipe" onClick={handleNotReady}>{t("mainFooter.linkSeis")}</Link>
          <Link to="/infoPages/profissionais" onClick={handleNotReady}>{t("mainFooter.linkSete")}</Link>
          <Link to="/infoPages/parcerias" onClick={handleNotReady}>{t("mainFooter.linkOito")}</Link>
          <Link to="/infoPages/contato" onClick={handleNotReady}>{t("mainFooter.linkNove")}</Link>
        </div>
        <div className={styles.newsletter}>
          <p>{t("mainFooter.newsletterText")}</p>
          <form onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              name="email"
              placeholder={t("mainFooter.emailPlaceholder")}
              required
              disabled={submitted}
            />
            <button
              type="submit"
              disabled={submitting || submitted}
            >
              {submitting
                ? t("mainFooter.sending") // exemplo: “Enviando...”
                : submitted
                ? t("mainFooter.subscribed") // exemplo: “Registrado”
                : t("mainFooter.subscribe")} {/* exemplo: “Inscrever-se” */}
            </button>
          </form>
          <h4 className={styles.redesSociaisText}>{t("mainFooter.redes")}</h4>
          <div className={styles.social_icons}>
            <a href="https://www.instagram.com/tccinelabs/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/people/Tecnologia-Criativa-Cinematogr%C3%A1fica/61578880891041/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.linkedin.com/company/tccine-tecnologia-criativa-cinematogr%C3%A1fica/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.tiktok.com/@tccine" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://x.com/TCCINELABS" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>

      {/* Terceira parte: Políticas */}
      <div className={styles.footer_bottom}>
        <div className={styles.links}>
          <Link to="/infoPages/termos">{t("mainFooter.terms")}</Link>
          <Link to="/infoPages/cookies">{t("mainFooter.cookies")}</Link>
          <Link to="/infoPages/privacidade">{t("mainFooter.privacy")}</Link>
        </div>
        <div className={styles.copyright}>
          <p>{t("mainFooter.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;