import { NavbarPremium } from "../components/reused/NavbarPremium"
import { useLanguage } from "../components/context/LanguageContext";
import video1 from "../assets/homeMedia/homenavbar/tcVideo.mp4"
import videoBase1 from "../assets/productionMedia/video1.mp4"
import cartazfilme2 from "../assets/posProductionMedia/posternovo2.png"
import { LandingPage } from "../components/reused/LandingPage";
import { NavBarRouter } from "../components/reused/NavBarRouter";
import Colaboradores from "../components/reused/Colaboradores";
import Metodos from "../components/reused/Metodos";
import Aplicacoes from "../components/reused/Aplicacoes";
import Footer from "../components/reused/Footer";

// Data
import { getProductionData } from '../data/productionData.jsx';

export const Production = () => {
    const { t } = useLanguage();
    
    // Data Factory
    const data = getProductionData(t, { videoBase1, cartazfilme2 });

    return (
        <>
            <NavbarPremium />
            <LandingPage
                videoSrc={video1}
                businessText={t("producao.business")}
                filmProductionsText={t("producao.filmProductions")}
                descriptionText={t("producao.description")}
                watchButtonText={t("posProducao.watchButton")}
            />
            <NavBarRouter
            items={[
                    { id: 'colaboradores', translationKey: 'navbarrouter.visaoGeral' },
                    { id: 'metodos', translationKey: 'navbarrouter.metodos' },
                    { id: 'aplicacoes', translationKey: 'navbarrouter.aplicacoes' }
                    ]}
                   stickyOffset={490}
                   scrollOffset={-80}
            />

            <section id="colaboradores" name="colaboradores" style={{ minHeight: '100vh', scrollMarginTop: '100px' }}>
                <Colaboradores {...data.colaboradores} />
            </section>

            <section id="metodos" name="metodos" style={{ minHeight: '100vh', scrollMarginTop: '100px' }}>
                <Metodos {...data.metodos} variant="padrao" />
            </section>

            <section id="aplicacoes" name="aplicacoes" style={{ minHeight: '80vh', scrollMarginTop: '100px' }}>
                <Aplicacoes {...data.aplicacoes} />
            </section>

            <Footer />
        </>
    )
}
