import { LandingPage } from "../components/reused/LandingPage";
import { NavBar } from "../components/reused/NavBar"
import { useLanguage } from "../components/translationComponents/LanguageContext";
import videopos from "../assets/posProductionMedia/videopos.mp4"
import cartazfilme2 from "../assets/posProductionMedia/imgpos.jpg";
import videoposBase from "../assets/PosProductionMedia/videopos.mp4"
import imagemcartaz1 from "../assets/posProductionMedia/cartazimagem1.jpg"
import imagem5 from "../assets/posProductionMedia/imagem5.jpg"
import styles from "../styles/pagesStyles/PosProduction.module.css"
import Colaboradores from "../components/reused/Colaboradores";
import Metodos from "../components/reused/Metodos";
import BeforeAfterSlider from "../componentsPosProduction/BeforeAfterSlider";
import DesignSonoro from "../componentsPosProduction/DesignSonoro";
import Aplicacoes from "../components/reused/Aplicacoes";
import { MiniFooter } from "../components/reused/MiniFooter";
import { NavBarRouter } from "../components/reused/NavBarRouter";
import AplicacoesPp from "../components/reused/AplicaçãoPp";


export const PosProduction = () => {
    const { t } = useLanguage();
    return (
        <>
            <NavBar />
            <LandingPage
                videoSrc={videopos}
                businessText={t("posProducao.business")}
                filmProductionsText={t("posProducao.filmProductions")}
                descriptionText={t("posProducao.description")}
                watchButtonText={t("posProducao.watchButton")}
            />
            <NavBarRouter
            items={[
                    { id: 'VisaoGeral', translationKey: 'navbarrouterteste.visaoGeral' },
                    { id: 'ColorGrading', translationKey: 'navbarrouterteste.ColorGrading' },
                    { id: 'DesighSonoro', translationKey: 'navbarrouterteste.DesighSonoro' },
                    { id: 'Aplicacao', translationKey: 'navbarrouterteste.Aplicacao' } 
                    ]}
                   stickyOffset={490}
                   scrollOffset={-80}
            />

            <section id="VisaoGeral" name="colaboradores" style={{ minHeight: '100vh', scrollMarginTop: '100px' }}>
                <Colaboradores
                    titulo={t("colaboradoresPp.titulo")}
                    tituloPrincipal={t("colaboradoresPp.tituloPrincipal")}
                    descricao={t("colaboradoresPp.descricao")}
                    botaoUm={t("colaboradoresPp.botaoUm")}
                    botaoDois={t("colaboradoresPp.botaoDois")}
                    botaoTres={t("colaboradoresPp.botaoTres")}
                    itensAccordion={
                        {
                            experiencia: [
                                {
                                    title: t("colaboradoresPp.experienciaTitle1"),
                                    content: t("colaboradoresPp.experienciaContent2")
                                },
                                {
                                    title: t("colaboradoresPp.experienciaTitle3"),
                                    content: t("colaboradoresPp.experienciaContent4")
                                },
                                {
                                    title: t("colaboradoresPp.experienciaTitle5"),
                                    content: t("colaboradoresPp.experienciaContent6")
                                }
                            ],
                            otimizacao: [
                                {
                                    title: t("colaboradoresPp.otimizacaoTitle1"),
                                    content: t("colaboradoresPp.otimizacaoContent2")
                                },
                                {
                                    title: t("colaboradoresPp.otimizacaoTitle3"),
                                    content: t("colaboradoresPp.otimizacaoContent4")
                                },
                                {
                                    title: t("colaboradoresPp.otimizacaoTitle5"),
                                    content: t("colaboradoresPp.otimizacaoContent6")
                                }
                            ],
                            organizacao: [
                                {
                                    title: t("colaboradoresPp.organizacaoTitle1"),
                                    content: t("colaboradoresPp.organizacaoContent2")
                                },
                                {
                                    title: t("colaboradoresPp.organizacaoTitle3"),
                                    content: t("colaboradoresPp.organizacaoContent4")
                                },
                                {
                                    title: t("colaboradoresPp.organizacaoTitle5"),
                                    content: t("colaboradoresPp.organizacaoContent6")
                                }
                            ]
                        }
                    }
                    filmeCartaz={cartazfilme2}
                />
            </section>

            <section id="ColorGrading" name="metodos" style={{ minHeight: '100vh', scrollMarginTop: '100px' }} >
                <Metodos
                    titulo={t("metodosPp.titulo")}
                    tituloPrincipal={t("metodosPp.tituloPrincipal")}
                    descricao={t("metodosPp.descricao")}
                    videoExp={videoposBase}
                    Destaque={t("metodosPp.Destaque")}
                    subDescricao={t("metodosPp.subDescricao")}
                    variant="cinematografia"
                    containerTitulo={t("metodosPp.containerTitulo")}
                    containerDescricao={t("metodosPp.containerDescricao")}
                    watchButtonText={t("metodosPp.watchButton")}
                />
            </section>
            <BeforeAfterSlider />

            <section id="DesighSonoro" name="metodos" style={{ minHeight: '100vh', scrollMarginTop: '100px' }}>
                <DesignSonoro
                    botaoDestaque={t("designSonoro.botao")}
                    titulo= {t("designSonoro.titulo")}
                    tituloPrincipal={t("designSonoro.tituloPrincipal")}
                    descricao={t("designSonoro.descricao")}
                    cartazes={[
                        {
                            cartazImagem: imagemcartaz1,
                            cartazTitulo: t("designSonoro.cartazTituloUm"),
                            cartazDescricao: t("designSonoro.cartazDescricaoUm")
                        },
                        {
                            cartazImagem: imagemcartaz1,
                            cartazTitulo: t("designSonoro.cartazTituloDois"),
                            cartazDescricao: t("designSonoro.cartazDescricaoDois")
                        },
                        {
                            cartazImagem: imagemcartaz1,
                            cartazTitulo: t("designSonoro.cartazTituloTres"),
                            cartazDescricao: t("designSonoro.cartazDescricaoTres")
                        }
                    ]}
                    itensAccordion={[
                        {
                            title: t("designSonoro.accordionTitleUm"),
                            content: t("designSonoro.accodionContentUm")
                        },
                        {
                            title: t("designSonoro.accordionTitleDois"),
                            content: t("designSonoro.accodionContentDois")
                        },
                        {
                            title: t("designSonoro.accordionTitleTres"),
                            content: t("designSonoro.accodionContentTres")
                        }
                    ]}
                    filmeCartaz={cartazfilme2}
                />

            </section>


            <section id="Aplicacao" name="metodos" style={{ minHeight: '100vh', scrollMarginTop: '100px' }}>
                   <AplicacoesPp
                    titulo={t("aplicacoesProduction.titulo")}
                    tituloPrincipal={t("aplicacoesProduction.tituloPrincipal")}
                    descricao={t("aplicacoesProduction.descricao")}
                    botaoUmPp={t("aplicacoesProduction.botaoUmPp")}
                    botaoDoisPp={t("aplicacoesProduction.botaoDoisPp")}
                    botaoTresPp={t("aplicacoesProduction.botaoTresPp")}
                    quartoBotaoNome={t("aplicacoesProduction.botaoQuatroNome")}
                    quartoConteudo={{
                    titulo: t("aplicacoesProduction.botaoQuatroTitulo"),
                    texto: t("aplicacoesProduction.botaoQuatroTexto"),
                    imagem: imagem5
                }}
            />
            </section>
           

            <MiniFooter
                tx1= {t("minifooter.tx1")}
                tx2={t("minifooter.tx2")}
                txbutton1={t("minifooter.txbutton1")}
                txbutton2={t("minifooter.txbutton2Pp")}
                link1="/suporte"
                link2="/producao"
            />


        </>
    )
}