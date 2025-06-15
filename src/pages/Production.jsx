import { NavBar } from "../components/reused/NavBar"
import { useLanguage } from "../components/translationComponents/LanguageContext";
import styles from "../styles/pagesStyles/Production.module.css"
import video1 from "../assets/productionMedia/video1.mp4"
import videoBase1 from "../assets/productionMedia/video1.mp4"
import cartazfilme2 from "../assets/productionMedia/cartazfilme.jpg"
import { LandingPage } from "../components/reused/LandingPage";
import { NavBarRouter } from "../components/reused/NavBarRouter";
import Colaboradores from "../components/reused/Colaboradores";
import Metodos from "../components/reused/Metodos";
import Aplicacoes from "../components/reused/Aplicacoes";
import { MiniFooter } from "../components/reused/MiniFooter";


export const Production = () => {
    const { t } = useLanguage();
    return (
        <>
            <NavBar />
            <LandingPage
                videoSrc={video1}
                businessText={t("producao.business")}
                filmProductionsText={t("producao.filmProductions")}
                descriptionText={t("producao.description")}
                watchButtonText={t("posProducao.watchButton")}
            />
            <NavBarRouter
            items={[
                    { id: 'colaboradores', translationKey: 'navbarrouterteste.visaoGeral' },
                    { id: 'metodos', translationKey: 'navbarrouterteste.ColorGrading' },
                    { id: 'aplicacoes', translationKey: 'navbarrouterteste.DesighSonoro' }
                    ]}
                   stickyOffset={490}
                   scrollOffset={-80}
            />

            <section id="colaboradores" name="colaboradores" style={{ minHeight: '100vh', scrollMarginTop: '100px' }}>
                <Colaboradores
                    titulo={t("colaboradores.titulo")}
                    tituloPrincipal={t("colaboradores.tituloPrincipal")}
                    descricao={t("colaboradores.descricao")}
                    botaoUm={t("colaboradores.botaoUm")}
                    botaoDois={t("colaboradores.botaoDois")}
                    botaoTres={t("colaboradores.botaoTres")}
                    itensAccordion={
                        {
                            experiencia: [
                                {
                                    title: t("colaboradores.experienciaTitle1"),
                                    content: t("colaboradores.experienciaContent2")
                                },
                                {
                                    title: t("colaboradores.experienciaTitle3"),
                                    content: t("colaboradores.experienciaContent4")
                                },
                                {
                                    title: t("colaboradores.experienciaTitle5"),
                                    content: t("colaboradores.experienciaContent6")
                                }
                            ],
                            otimizacao: [
                                {
                                    title: t("colaboradores.otimizacaoTitle1"),
                                    content: t("colaboradores.otimizacaoContent2")
                                },
                                {
                                    title: t("colaboradores.otimizacaoTitle3"),
                                    content: t("colaboradores.otimizacaoContent4")
                                },
                                {
                                    title: t("colaboradores.otimizacaoTitle5"),
                                    content: t("colaboradores.otimizacaoContent6")
                                }
                            ],
                            organizacao: [
                                {
                                    title: t("colaboradores.organizacaoTitle1"),
                                    content: t("colaboradores.organizacaoContent2")
                                },
                                {
                                    title: t("colaboradores.organizacaoTitle3"),
                                    content: t("colaboradores.organizacaoContent4")
                                },
                                {
                                    title: t("colaboradores.organizacaoTitle5"),
                                    content: t("colaboradores.organizacaoContent6")
                                }
                            ]
                        }
                    }
                    filmeCartaz={cartazfilme2}
                />
            </section>

            <section id="metodos" name="metodos" style={{ minHeight: '100vh', scrollMarginTop: '100px' }}>
                <Metodos
                    titulo={t("metodos.titulo")}
                    tituloPrincipal={t("metodos.tituloPrincipal")}
                    descricao={t("metodos.descricao")}
                    videoExp={videoBase1}
                    Destaque={t("metodos.Destaque")}
                    subDescricao={t("metodos.subDescricao")}
                    variant="padrao"
                    containerTitulo={t("metodos.containerTitulo")}
                    containerDescricao={t("metodos.containerDescricao")}
                    watchButtonText={t("metodos.watchButton")}
                />
            </section>

            <section id="aplicacoes" name="aplicacoes" style={{ minHeight: '80vh', scrollMarginTop: '100px' }}>
                <Aplicacoes
                    titulo={t("aplicacoesProduction.titulo")}
                    tituloPrincipal={t("aplicacoesProduction.tituloPrincipal")}
                    descricao={t("aplicacoesProduction.descricao")}
                    botaoUm={t("aplicacoesProduction.botaoUm")}
                    botaoDois={t("aplicacoesProduction.botaoDois")}
                    botaoTres={t("aplicacoesProduction.botaoTres")}
                />
            </section>

            <MiniFooter
                tx1= {t("minifooter.tx1")}
                tx2={t("minifooter.tx2")}
                txbutton1={t("minifooter.txbutton1")}
                txbutton2={t("minifooter.txbutton2")}
                link1="/suporte"
                link2="/pos-producao"
            />
        </>
    )
}