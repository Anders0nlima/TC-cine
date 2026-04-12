import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTiktok, faXTwitter  } from '@fortawesome/free-brands-svg-icons';
import styles from '../../styles/componentsStyles/reusedStyles/Footer.module.css';
import { useLanguage } from '../context/LanguageContext';
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
    } catch {
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };




  return (
    <footer className={styles.main_footer}>
      <div className={styles.footer_container}>
        {/* Row 1: Brand, Links, Newsletter */}
        <div className={styles.footer_content}>
          
          {/* Brand & Mission */}
          <div className={styles.footer_brand}>
            <img className={styles.primary_logo} src={logo1} alt="TC|CINE Logo" />
            <p className={styles.brand_mission}>
              {t("homeLandingPage.descriptionText")}
            </p>
            <div className={styles.brand_socials_hidden}>
              {/* Socials moved to column */}
            </div>
          </div>

          {/* Links Grid */}
          <div className={styles.links_section}>
            <div className={styles.link_column}>
              <h4>Explorar</h4>
              <Link to="/">{t("navbar.home")}</Link>
              <Link to="/producao">{t("navbar.producao")}</Link>
              <Link to="/pos-producao">{t("navbar.posProducao")}</Link>
            </div>
            <div className={styles.link_column}>
              <h4>Suporte</h4>
              <Link to="/suporte">{t("mainFooter.linkUm")}</Link>
            </div>
            <div className={styles.link_column}>
              <h4>Redes Sociais</h4>
              <div className={styles.social_list}>
                <a href="https://www.instagram.com/tccinelabs/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/company/tccine-tecnologia-criativa-cinematogr%C3%A1fica/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://x.com/TCCINELABS" target="_blank" rel="noopener noreferrer">Twitter / X</a>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className={styles.newsletter_section}>
            <h4>Newsletter</h4>
            <p>{t("mainFooter.newsletterText")}</p>
            <form onSubmit={handleNewsletterSubmit} className={styles.newsletter_form}>
              <div className={styles.input_wrapper}>
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
                    ? <div className={styles.spinner}></div>
                    : submitted
                    ? t("mainFooter.subscribed")
                    : t("mainFooter.subscribe")}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Partners / Ecosystem Logos */}
        <div className={styles.ecosystem_logos}>
          <div className={styles.ecosystem_title}>ECOSSISTEMA TC|CINE</div>
          <div className={styles.logo_group}>
            <img src={logo2} alt="Partner 2" />
            <img src={logo3} alt="Partner 3" />
            <img src={logo4} alt="Partner 4" />
            <img src={logo5} alt="Partner 5" />
          </div>
        </div>

        {/* Bottom Bar: Language, Policies, Copyright */}
        <div className={styles.footer_bottom}>
          <div className={styles.bottom_left}>
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
                    {Object.values(languageOptions).map((opt) => (
                      <button
                        key={opt.code}
                        className={`${styles.languageOption} ${language === opt.code ? styles.selected : ''}`}
                        onClick={() => handleLanguageChange(opt.code)}
                      >
                        <div className={styles.flagContainer}>
                          <img src={opt.flag} alt={opt.name} className={styles.flagImage} />
                        </div>
                        <span>{opt.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.legal_links}>
              <Link to="/infoPages/termos">{t("mainFooter.terms")}</Link>
              <Link to="/infoPages/cookies">{t("mainFooter.cookies")}</Link>
              <Link to="/infoPages/privacidade">{t("mainFooter.privacy")}</Link>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>{t("mainFooter.copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
