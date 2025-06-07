
import { NavBar } from "../components/reused/NavBar"
import { useLanguage } from "../components/translationComponents/LanguageContext";
import styles from "../styles/pagesStyles/Production.module.css"
import video1 from "../assets/productionMedia/video1.mp4"
import { LandingPage } from "../components/reused/LandingPage";


export const Production = () => {
     const { t } = useLanguage();
    return(
        <>
            <NavBar/>
            <LandingPage
                videoSrc={video1}
                businessText={t("producao.business")}
                filmProductionsText={t("producao.filmProductions")}
                descriptionText={t("producao.description")}
                watchButtonText= {t("posProducao.watchButton")}
            />
        </>
    )
}