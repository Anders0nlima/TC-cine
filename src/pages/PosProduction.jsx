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
                    titulo="Visão Geral"
                    tituloPrincipal="MELHORE O FLUXO DE TRABALHO"
                    descricao="A pós-produção é uma das etapas de produção de qualquer obra, ela é determinante para a qualidade final do projeto.  Para isso a Selo utiliza técnicas avançadas, workflows refinados e profissionais especializados prontos para extrair o máximo do processo. "
                    botaoUm="Edição"
                    botaoDois="Performance"
                    botaoTres="Criatividade"
                    itensAccordion={
                        {
                            experiencia: [
                                {
                                    title: "Produza ritmo com a edição",
                                    content: "O selo oferece serviços básicos de edição de vídeos em diferentes formatos, como: Curtas Longas-metragens, Comerciais, Documentários e vídeos institucionais."
                                },
                                {
                                    title: "Alie ciência e criatividade ",
                                    content: "São aplicadas e desenvolvidas estruturas narrativas e técnicas complexas, embasadas em fundamentos teóricos e metodologias científicas a respeito da montagem audiovisual. "
                                },
                                {
                                    title: "Inove por meio da arte",
                                    content: "Temos como princípio a inovação por meio da arte, por isso sempre valoriza novas abordagens criativas, garantindo um fluxo orgânico e adaptável a cada projeto."
                                }
                            ],
                            otimizacao: [
                                {
                                    title: "Seja produtivo com otimização",
                                    content: "Como parte essencial do selo, implementamos mecanismos que otimizam processos técnicos e valorizam a liberdade criativa."
                                },
                                {
                                    title: "Obtenha Melhores Resultados com Controle",
                                    content: "O selo assume toda a gestão do processo, garantindo controle total, estabilidade e confiança nos resultados entregues."
                                },
                                {
                                    title: "Tenha resultaos Dentro dos Prazos",
                                    content: "Cada etapa é conduzida com rigor técnico e supervisão especializada, assegurando entregas pontuais e de alta precisão."
                                }
                            ],
                            organizacao: [
                                {
                                    title: "Crie mais com integração criativa",
                                    content: "Cada departamento do selo atua em parceria com outras áreas criativas, garantindo conexões com diferentes aspectos do processo."
                                },
                                {
                                    title: "Alcance resultos com padrões de mercado ",
                                    content: "O selo segue padrões e tendências do mercado, o que garante obras atuais e com relevância no cenário social contemporâneo."
                                },
                                {
                                    title: "Construa produtos originais que se destaquem",
                                    content: "A liberdade artística é essencial para o selo, por isso buscamos sempre inovar e criar produtos audiovisuais marcantes."
                                }
                            ]
                        }
                    }
                    filmeCartaz={cartazfilme2}
                />
            </section>

            <section id="ColorGrading" name="metodos" style={{ minHeight: '100vh', scrollMarginTop: '100px' }} >
                <Metodos
                    titulo="Color gradind"
                    tituloPrincipal="VISUAL DE CINEMA"
                    descricao="A colorização é uma etapa essencial da pós-produção audiovisual, responsável por refinar e transformar o material Bruto em uma obra visualmente impactante. A selo atua nos dois segmentos da colorização tanto na forma técnica quanto na estética."
                    videoExp={videoposBase}
                    Destaque="Destaques"
                    subDescricao="O color grading não se limita à aplicação de filtros ou ajustes básicos, trata-se de um processo completo, dividido em etapas estratégicas."
                    variant="cinematografia"
                    containerTitulo="Veja o poder narrativo do color Granding"
                    containerDescricao="Escolha a melhor opção para sua produção cinematrográficas, retire suas ideas do pepel e veja como podemos ajudar você a produzir mais."
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