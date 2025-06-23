import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedinIn, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import styles from '../../styles/componentsStyles/reusedStyles/Footer.module.css'
import { useLanguage } from '../translationComponents/LanguageContext';


function Footer(){
  const { t } = useLanguage();
    return(
        <footer className={styles.main_footer}>
          <div className={styles.footer_content}>
            <div className={styles.footer_section}>
              <h3>{t("footer.h3P")}</h3>
              <p>{t("footer.p")}</p>
            </div>
            <div className={styles.footer_section}>
              <h3>{t("footer.h3S")}</h3>
              <ul>
                <li><Link to="/sobre">{t("footer.link1")}</Link></li>
                <li><Link to="/bibliotecas">{t("footer.link2")}</Link></li>
                <li><Link to="/junte-se">{t("footer.link3")}</Link></li>
              </ul>
            </div>
            <div className={styles.footer_section}>
              <h3>{t("footer.h3T")}</h3>
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
        </footer>
    )
}

export default Footer