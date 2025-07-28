import styles from "../../styles/componentsStyles/infoStyles/TermsOfUse.module.css";
import logo2 from "../../assets/homeMedia/homenavbar/logoCine2.png"

import Footer from "../reused/Footer";
import { NavBar } from "../reused/NavBar";
import { useLanguage } from "../translationComponents/LanguageContext";

export const Cookies = () => {
    const { t } = useLanguage();
    return(
        <>
       <NavBar/>
        <div className={styles.termsContainer} style={{ height: "240vh" }}>
            <div className={styles.logoimagem}>
                <img src={logo2}  alt="logo" />
            </div>
        <div className={styles.termsContent}>
        <div className={styles.coluna}>
        <h2>{t("cookies.h1pri")}</h2>
        <p>
          {t("cookies.ppri")}
        </p>
        </div>

        <div className={styles.coluna}>
        <h2>{t("cookies.h1seg")}</h2>
        <p>
          {t("cookies.pseg")}
        </p>
       </div>

       <div className={styles.coluna}>
        <h2>{t("cookies.h1ter")}</h2>
        <ul>
          <li>{t("cookies.pterli1")}</li>
          <li>{t("cookies.pterli2")}</li>
          <li>{t("cookies.pterli3")}</li>
          <li>{t("cookies.pterli4")}</li>
          <li>{t("cookies.pterli5")}</li>
        </ul>
        </div>

        <div className={styles.coluna}>
        <h2>{t("cookies.h1qua")}</h2>
        <ul>
          <li>{t("cookies.pquali1")}</li>
          <li>{t("cookies.pquali2")}</li>
          <li>{t("cookies.pquali3")}</li>
          <li>{t("cookies.pquali4")}</li>
        </ul>
        </div>

        <div className={styles.coluna}>
        <h2>{t("cookies.h1qui")}</h2>
        <p>
          {t("cookies.pqui1")}
        </p>
        </div>

        <div className={styles.coluna}>
        <h2>{t("cookies.h1sex")}</h2>
        <p>
          {t("cookies.psex")}
        </p>
        <ul>
          <li>{t("cookies.psexli1")}</li>
          <li>{t("cookies.psexli2")}</li>
          <li>{t("cookies.psexli3")}</li>
          <li>{t("cookies.psexli4")}</li>
        </ul>
        </div>


        <div className={styles.coluna}>
        <h2>{t("cookies.h1set")}</h2>
        <p>
          {t("cookies.pset")}
        </p>
        </div>

        <div className={styles.coluna}>
        <h2>{t("cookies.h1oit")}</h2>
        <p>
          {t("cookies.poit1")}
        </p>
      </div>

      
      </div>

    </div>
    <Footer/>
        </>
    )
}