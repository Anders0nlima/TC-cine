import styles from "../../styles/componentsStyles/infoStyles/TermsOfUse.module.css";
import logo2 from "../../assets/homeMedia/homenavbar/logoCine2.png"
import Footer from "../reused/Footer";
import { NavBar } from "../reused/NavBar";
import { useLanguage } from "../translationComponents/LanguageContext";

export const Termos = () => {
    const { t } = useLanguage();
    return(
        <>
        <NavBar/>
        <div className={styles.termsContainer} style={{ height: "220vh" }}>
            <div className={styles.logoimagem}>
                <img src={logo2}  alt="logo" />
            </div>
        <div className={styles.termsContent}>
        <div className={styles.coluna}>
        <h2>{t("infoTermos.h1pri")}</h2>
        <p>
          {t("infoTermos.ppri")}
        </p>
        </div>

        <div className={styles.coluna}>
        <h2>{t("infoTermos.h1seg")}</h2>
        <p>
          {t("infoTermos.pseg")}
        </p>
       </div>

       <div className={styles.coluna}>
        <h2>{t("infoTermos.h1ter")}</h2>
        <ul>
          <li>{t("infoTermos.pterli1")}</li>
          <li>{t("infoTermos.pterli2")}</li>
          <li>{t("infoTermos.pterli3")}</li>
        </ul>
        </div>

        <div className={styles.coluna}>
        <h2>{t("infoTermos.h1qua")}</h2>
        <p>
          {t("infoTermos.pqua")}
        </p>
        </div>

        <div className={styles.coluna}>
        <h2>{t("infoTermos.h1qui")}</h2>
        <p>
          {t("infoTermos.pqui1")}
        </p>
        <p>
          {t("infoTermos.pqui2")}
        </p>
        </div>

        <div className={styles.coluna}>
        <h2>{t("infoTermos.h1sex")}</h2>
        <p>
          {t("infoTermos.psex")}
        </p>
        </div>


        <div className={styles.coluna}>
        <h2>{t("infoTermos.h1set")}</h2>
        <p>
          {t("infoTermos.pset")}
        </p>
        </div>

        <div className={styles.coluna}>
        <h2>{t("infoTermos.h1oit")}</h2>
        <p>
          {t("infoTermos.poit1")}
          <strong> {t("infoTermos.poit2")}</strong>{t("infoTermos.poit3")}
        </p>
      </div>

      
      </div>

    </div>
    <Footer/>
    </>
    )
}