import styles from "../../styles/componentsStyles/infoStyles/TermsOfUse.module.css";
import logo2 from "../../assets/homeMedia/homenavbar/logoCine2.png"

import Footer from "../reused/Footer"
import { NavBar } from "../reused/NavBar"
import { useLanguage } from "../translationComponents/LanguageContext";

export const Privacidade = () => {
    const { t } = useLanguage();
    return(
        <>
        <NavBar/>
                <div className={styles.termsContainer} style={{ height: "260vh" }}> 
                    <div className={styles.logoimagem}>
                        <img src={logo2}  alt="logo" />
                    </div>
                <div className={styles.termsContent}>
                <div className={styles.coluna}>
                <h2>{t("priva.h1pri")}</h2>
                <p>
                  {t("priva.ppri")}
                </p>
                </div>
        
                <div className={styles.coluna}>
                <h2>{t("priva.h1seg")}</h2>
                <p>
                  {t("priva.pseg")}
                </p>
                <ul>
                  <li>{t("priva.psegli1")}</li>
                  <li>{t("priva.psegli2")}</li>
                  <li>{t("priva.psegli3")}</li>
                </ul>
               </div>
        
               <div className={styles.coluna}>
                <h2>{t("priva.h1ter")}</h2>
                <p>{t("priva.pter")}</p>
                <ul>
                  <li>{t("priva.pterli1")}</li>
                  <li>{t("priva.pterli2")}</li>
                  <li>{t("priva.pterli3")}</li>
                  <li>{t("priva.pterli4")}</li>
                  <li>{t("priva.pterli5")}</li>
                </ul>
                </div>
        
                <div className={styles.coluna}>
                <h2>{t("priva.h1qua")}</h2>
                <p>
                  {t("priva.pqua")}
                </p>
                <ul>
                  <li>{t("priva.pquali1")}</li>
                  <li>{t("priva.pquali2")}</li>
                  <li>{t("priva.pquali3")}</li>
                </ul>
                </div>
        
                <div className={styles.coluna}>
                <h2>{t("priva.h1qui")}</h2>
                <p>
                  {t("priva.pqui1")}
                </p>
                <p>
                  {t("priva.pqui2")}
                </p>
                <ul>
                  <li>{t("priva.pquili1")}</li>
                  <li>{t("priva.pquili2")}</li>
                  <li>{t("priva.pquili3")}</li>
                  <li>{t("priva.pquili4")}</li>
                  <li>{t("priva.pquili5")}</li>
                  <li>{t("priva.pquili6")}</li>
                  <li>{t("priva.pquili7")}</li>
                  <li>{t("priva.pquili8")}</li>
                </ul>
                </div>
        
                <div className={styles.coluna}>
                <h2>{t("priva.h1sex")}</h2>
                <p>
                  {t("priva.psex")}
                </p>
                </div>
        
        
                <div className={styles.coluna}>
                <h2>{t("priva.h1set")}</h2>
                <p>
                  {t("priva.pset")}
                </p>
                </div>
    
              </div>
        
            </div>
            <Footer/>
        </>
    )
}