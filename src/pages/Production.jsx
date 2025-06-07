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
            <NavBarRouter />

            <section id="colaboradores" name="colaboradores" style={{ minHeight: '100vh', scrollMarginTop: '100px' }}>
                <Colaboradores
                    titulo="Visao geral"
                    tituloPrincipal="CONHEÇA COMO PODEMOS AJUDÁ-LO!"
                    descricao="A Selo Produções é uma empresa focada na qualidade técnica e criativa de seus produtos, oferecendo aos clientes soluções logísticas e criativas que asseguram eficiência, inovação, qualidade e excelência nos resultados. Confira abaixo mais detalhes!"
                    botaoUm="Produções"
                    botaoDois="Assessoria"
                    botaoTres="Serviços"
                    itensAccordion={
                        {
                            experiencia: [
                                {
                                    title: "Vá longe com as pessoas certas",
                                    content: "Com um corpo técnico altamente qualificado e uma ampla rede de profissionais parceiros, a TC|CINE é capaz de executar projetos de forma ágil, estratégica e com excelência."
                                },
                                {
                                    title: "Escolha no variado leque de produção",
                                    content: "Atuamos diretamente em diferentes naturezas e formatos de produção, incluindo curtas, longas-metragens, documentários, conteúdos publicitários, entre outros. Entre em contato para saber mais."
                                },
                                {
                                    title: "Faça a escolha correta!",
                                    content: "A TC|CINE atua em produções completas, ou como coprodutora em projetos audiovisuais. Ambas contam com uma estrutura profissional para atender todas as etapas: pré-produção, produção e pós-produção."
                                }
                            ],
                            otimizacao: [
                                {
                                    title: "Conte com estruturas criativas",
                                    content: "A TC|CINE conta com núcleos especializados na formulação de roteiros, propostas visuais, storyboards, consultores especialidos, entre outras ferramentas pensadas para ajudá-lo a alcançar os resultados esperados."
                                },
                                {
                                    title: "Foque no que realmente importa",
                                    content: "Fique livre de questões técnicas atrapalhando seu processo criativo. A TC|CINE conta com departamentos especializados que realizam estudos de viabilidade técnica e outros planejamentos essenciais para a sua produção."
                                },
                                {
                                    title: "Torne suas ideias reais",
                                    content: "A TC|CINE também conta com um setor dedicado à captação de recursos financeiros, seja por meio de leis de incentivo ou de investimentos privados. Além disso, elabora projetos completos para submissão, facilitando todo o processo."
                                }
                            ],
                            organizacao: [
                                {
                                    title: "Execute as etapas de forma eficiênte",
                                    content: "A Selo oferece uma abordagem completa e personalizada no campo da produção executiva, desde a elaboração de cronogramas e orçamentos até a gestão e supervisão de recursos e equipes."
                                },
                                {
                                    title: "Exceda os limites da produção",
                                    content: "Na TC|CINE, nossas estruturas operacionais permitem que os processos de filmagem ocorram de forma integrada com a equipe, garantindo otimização, agilidade e excelência técnica em cada entrega."
                                },
                                {
                                    title: "Vá além com uma equipe integrada",
                                    content: "A equipe da TC|CINE é formada por profissionais altamente qualificados e conectados à estrutura técnica da produtora, permitindo resultados que vão além da execução técnica, alcançando inovação, criatividade e impacto."
                                }
                            ]
                        }
                    }
                    filmeCartaz={cartazfilme2}
                />
            </section>

            <section id="metodos" name="metodos" style={{ minHeight: '100vh', scrollMarginTop: '100px' }}>
                <Metodos
                    titulo="Métodos"
                    tituloPrincipal="PRODUZA MAIS COM ORGANIZAÇÃO"
                    descricao="a Selo produções se destaca não apenas pela variedade e qualidade dos serviços oferecidos, mas, acima de tudo, por sua estrutura organizacional sólida, que permite a execução de projetos de maneira organizada, eficiente e altamente produtiva."
                    videoExp={videoBase1}
                    Destaque="Experiência"
                    subDescricao="Cada etapa do processo da concepção à finalização é conduzida com planejamento estratégico e gestão criteriosa, otimizando recursos, tempo e resultados. Veja como aplicamos esses critérios"
                    variant="padrao"
                    containerTitulo="Produções cinematográficas"
                    containerDescricao="Escolha a melhor opção para sua produção cinematrográficas, retire suas ideias do pepel e veja como podemos ajudar você a produzir mais."
                />
            </section>

            <section id="aplicacoes" name="aplicacoes" style={{ minHeight: '80vh', scrollMarginTop: '100px' }}>
                <Aplicacoes
                    titulo="Aplicações"
                    tituloPrincipal="NOSSOS SERVIÇOS PRINCIPAIS"
                    descricao="Conheça nossos serviços principais para produção audiovisual."
                    botaoUm="Pré-Produção"
                    botaoDois="Produção"
                    botaoTres="Ambos"
                />
            </section>

            <MiniFooter
                tx1="Ficou interessado?"
                tx2="Acesse a página de suporte ao cliente e entre em contato com um de nossos especialistas e tire suas dúvidas ao contrate os serviços da selo"
                txbutton1="Acesse a página de suporte ao cliente"
                txbutton2="Pós-produção do Selo"
                link1="/suporte"
                link2="/pos-producao"
            />
        </>
    )
}