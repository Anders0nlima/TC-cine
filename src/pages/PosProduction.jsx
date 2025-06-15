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
                    titulo="Design sonoro"
                    tituloPrincipal="SINTA A EXPLOSÃO SONORA"
                    descricao="O design sonoro é uma etapa essencial na pós-produção audiovisual, responsável por criar atmosfera, transmitir emoções e proporcionar uma experiência imersiva ao público, Desde Filmes de Ficção, Comerciais publicitários à Documentários "
                    cartazes={[
                        {
                            cartazImagem: imagemcartaz1,
                            cartazTitulo: "Som 3D inversivo",
                            cartazDescricao: "A pré-produção  cinematográfica e a fase de planejamento do filme, incluindo roteiro, orçamento, seleção de elenco, equipe escolha de locação e definição de espactos visuais."
                        },
                        {
                            cartazImagem: imagemcartaz1,
                            cartazTitulo: "Ambientação 5.1",
                            cartazDescricao: "A pré-produção  cinematográfica e a fase de planejamento do filme, incluindo roteiro, orçamento, seleção de elenco, equipe escolha de locação e definição de espactos visuais."
                        },
                        {
                            cartazImagem: imagemcartaz1,
                            cartazTitulo: "Estudio Foley",
                            cartazDescricao: "Conte com os melhores proposicionistas da área, e com experiências, possibilitando maior rendimento e otimização da pridução"
                        }
                    ]}
                    itensAccordion={[
                        {
                            title: "Imprecione o público com conceitos sonoros originais ",
                            content: "A equipe Selo de Sound Design atua em parceria com outros departamentos criativos do projeto, estudos acadêmicos e tendências do mercado audiovisual, garantido maior integração e potencializa a imersão "
                        },
                        {
                            title: "Trage o público para seu universos com a mixagem",
                            content: "A Selo não constroi apenas cenas que impactam pelo visual, mas que podem ser sentidas pela audição. Utilizamos tecnologias de pontas, como mixagem 3D e Áudio Binaural para criar espaços tridimensionais"
                        },
                        {
                            title: "Eletrize o público com composições originais  ",
                            content: "Na Selo Cada nota é pensada no impacto, ritmo, originalidade e identidade do projeto, tornando a experiência do público inesquecível. "
                        }
                    ]}
                    filmeCartaz={cartazfilme2}
                />

            </section>


            <section id="Aplicacao" name="metodos" style={{ minHeight: '100vh', scrollMarginTop: '100px' }}>
                   <Aplicacoes
                    titulo="Aplicações"
                    quartoBotaoNome="Todos"
                    quartoConteudo={{
                    titulo: "Pré-produção",
                    texto: "Ficou interessado nos serviços de pré-produção da Selo? Clique no botão abaixo para contratar ou, se ainda estiver com dúvidas, um de nossos especialistas entrará em contato para auxiliá-lo.",
                    imagem: imagem5
                }}
            />
            </section>
           

            <MiniFooter
                tx1="Ficou interessado?"
                tx2="Acesse a página de suporte ao cliente e entre em contato com um de nossos especialistas e tire suas dúvidas ao contrate os serviços da selo"
                txbutton1="Acesse a página de suporte ao cliente"
                txbutton2="Produção do Selo"
                link1="/suporte"
                link2="/producao"
            />


        </>
    )
}