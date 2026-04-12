import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { NavbarPremium } from "../components/reused/NavbarPremium"
import { useLanguage } from "../components/context/LanguageContext";
import { LandingPage } from "../components/reused/LandingPage";
import Colaboradores from "../components/reused/Colaboradores";
import Metodos from "../components/reused/Metodos";
import Footer from "../components/reused/Footer";
import { BarChart3, Users, Target, TrendingUp, ArrowUpRight, CheckCircle2 } from 'lucide-react';

// Styling
import styles from "../styles/pagesStyles/MarketingDashboard.module.css";

// Assets - Common (Reusing some from production or generic if available)
// For now, using what's available or placeholders that look premium
import videoHero from "../assets/homeMedia/homenavbar/publi.mov";
import imgMarketing1 from "../assets/productionMedia/resultado_final.png"; 
import imgMarketing2 from "../assets/productionMedia/Estudo_dinamico.png";
import imgMarketing3 from "../assets/productionMedia/Tecnicas_Criativas.png";

export const MarketingPage = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('estrategia');
    const [activeSubTab, setActiveSubTab] = useState('dores');
    const [isDashboardActive, setIsDashboardActive] = useState(false);

    const whatsappLink = "https://wa.me/message/E7CCCIDLHOIMP1";

    // Master Config for the Marketing Dashboard
    const dashboardConfig = useMemo(() => ({
        'estrategia': {
            label: t("marketingPage.dashboard.tabs.estrategia"),
            sidebarTitle: t("marketingPage.dashboard.sidebar.estrategia"),
            subItems: [
                { id: 'dores', label: 'Dores do Mercado' },
                { id: 'diagnostico', label: 'Diagnóstico ROI' }
            ],
            component: Colaboradores,
            props: {
                titulo: t("marketingPage.pain.tag"),
                tituloPrincipal: t("marketingPage.pain.title"),
                descricao: t("marketingPage.pain.p1"),
                itensAccordion: {
                    dores: [
                        { title: 'Dependência de Indicação', content: 'Viver sem previsibilidade é o maior risco para o seu caixa.' },
                        { title: 'Marketing de Esperança', content: 'Investir sem saber exatamente quanto cada real retorna.' },
                        { title: 'Invisibilidade Digital', content: 'Ser a melhor opção do mercado, mas ninguém saber disso.' }
                    ],
                    diagnostico: [
                        { title: 'Gargalos de Conversão', content: 'Identificamos onde seu funil está perdendo dinheiro agora.' },
                        { title: 'Análise Competitiva', content: 'O que seus concorrentes estão fazendo para roubar seus clientes.' },
                        { title: 'Plano de Escala', content: 'A rota exata para triplicar seu faturamento com segurança.' }
                    ]
                },
                filmeCartaz: imgMarketing1,
                botaoUm: 'Dores',
                botaoDois: 'Diagnóstico',
                botaoTres: 'Plano'
            }
        },
        'solucoes': {
            label: t("marketingPage.dashboard.tabs.solucoes"),
            sidebarTitle: t("marketingPage.dashboard.sidebar.solucoes"),
            subItems: [
                { id: 0, label: 'Ads de Elite' },
                { id: 1, label: 'Ecossistema de Busca' },
                { id: 2, label: 'Identidade Premium' }
            ],
            component: Metodos,
            props: {
                variant: 'padrao',
                titulo: 'Nossas Ferramentas',
                tituloPrincipal: 'MOTORES DE CRESCIMENTO',
                descricao: 'Sistemas desenhados para atrair, qualificar e converter leads em faturamento real.',
                cardTag: "ESTRATÉGIA DE CRESCIMENTO",
                customBotoes: ['Ads de Elite', 'Ecossistema de Busca', 'Identidade Premium'],
                customConteudos: {
                    'Ads de Elite': {
                        titulo: "Tráfego Pago de Alta Performance",
                        texto: "Não entregamos cliques, entregamos clientes interessados. Nossa gestão de Meta e Google Ads foca na redução drástica do seu custo por lead e na escala agressiva do ROI.",
                        imagem: imgMarketing2
                    },
                    'Ecossistema de Busca': {
                        titulo: "SEO & Domínio Digital",
                        texto: "Dominamos as buscas para que você seja visto como a autoridade máxima do seu nicho. Criamos ecossistemas que geram leads orgânicos e qualificados de forma recorrente.",
                        imagem: imgMarketing3
                    },
                    'Identidade Premium': {
                        titulo: "Branding de Autoridade",
                        texto: "Design de elite que comunica alto valor. Transformamos sua percepção de marca para que você possa cobrar mais e ser escolhido pelos melhores clientes.",
                        imagem: imgMarketing1
                    }
                }
            }
        },
        'metodologia': {
            label: t("marketingPage.dashboard.tabs.metodologia"),
            sidebarTitle: t("marketingPage.dashboard.sidebar.metodologia"),
            subItems: [
                { id: 'workflow', label: 'Método TCCINE' },
                { id: 'ia', label: 'Dados & IA' }
            ],
            component: ({ activeTabOverride }) => (
                <div style={{ padding: '40px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    {activeTabOverride === 'workflow' ? (
                        <div style={{ display: 'grid', gap: '30px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#d4af37' }}>Workflow de Elite</h2>
                            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                                Onde o Cinema encontra a Performance. Criamos criativos que param o scroll e despertam o desejo imediato de compra, utilizando gatilhos mentais validados.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '20px', borderRadius: '15px' }}>
                                    <Target size={30} color="#d4af37" />
                                    <h4 style={{ margin: '15px 0 10px' }}>Hyper-Target</h4>
                                    <p style={{ fontSize: '0.9rem' }}>Foco cirúrgico no público que realmente tem dinheiro para pagar.</p>
                                </div>
                                <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '20px', borderRadius: '15px' }}>
                                    <TrendingUp size={30} color="#d4af37" />
                                    <h4 style={{ margin: '15px 0 10px' }}>Scaling</h4>
                                    <p style={{ fontSize: '0.9rem' }}>Aceleração de verba baseada em performance comprovada.</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gap: '30px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#d4af37' }}>Inteligência Data-Driven</h2>
                            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                                Tomamos decisões baseadas em lucros reais, não em métricas de vaidade (likes/comentários). Nossas IAs analisam o comportamento do seu cliente para prever o próximo passo da venda.
                            </p>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <BarChart3 size={40} color="#d4af37" />
                                <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>Decisões rápidas para um mercado dinâmico.</span>
                            </div>
                        </div>
                    )}
                </div>
            ),
            props: {}
        },
        'resultados': {
            label: t("marketingPage.dashboard.tabs.resultados"),
            sidebarTitle: t("marketingPage.dashboard.sidebar.resultados"),
            subItems: [
                { id: 'metricas', label: 'A Ciência do ROI' },
                { id: 'cta', label: 'Decisão de Escala' }
            ],
            component: ({ activeTabOverride }) => (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                    {activeTabOverride === 'metricas' ? (
                        <>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '40px' }}>{t("marketingPage.proof.title")}</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '40px', maxWidth: '800px', margin: '0 auto' }}>
                                <div>
                                    <span style={{ display: 'block', fontSize: '3.5rem', fontWeight: 900, color: '#d4af37' }}>+300%</span>
                                    <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.6 }}>Clientes Qualificados</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '3.5rem', fontWeight: 900, color: '#d4af37' }}>4x</span>
                                    <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.6 }}>ROI de Elite</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '3.5rem', fontWeight: 900, color: '#d4af37' }}>100%</span>
                                    <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.6 }}>Foco no Teu Caixa</span>
                                </div>
                            </div>
                            <p style={{ marginTop: '50px', fontStyle: 'italic', fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)' }}>
                                "{t("marketingPage.proof.expert")}"
                            </p>
                        </>
                    ) : (
                        <div style={{ padding: '40px', background: 'linear-gradient(135deg, #d4af37 0%, #aa8c2c 100%)', borderRadius: '30px', color: '#121214' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px' }}>{t("marketingPage.final.title")}</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '30px', fontWeight: 500 }}>
                                {t("marketingPage.final.description")}
                            </p>
                            <a 
                                href={whatsappLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    gap: '10px', 
                                    padding: '18px 40px', 
                                    background: '#121214', 
                                    color: '#fff', 
                                    borderRadius: '50px', 
                                    fontWeight: 700, 
                                    textDecoration: 'none',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            >
                                {t("marketingPage.final.cta")}
                                <ArrowUpRight size={20} />
                            </a>
                        </div>
                    )}
                </div>
            ),
            props: {}
        }
    }), [t]);

    const currentTabConfig = dashboardConfig[activeTab];

    // Reset subtab when tab changes
    useEffect(() => {
        setActiveSubTab(currentTabConfig.subItems[0].id);
    }, [activeTab, currentTabConfig.subItems]);

    // Scroll listener for dashboard activation
    useEffect(() => {
        const handleScroll = () => {
            setIsDashboardActive(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.pageWrapper}>
            <NavbarPremium hide={isDashboardActive} />
            <LandingPage
                videoSrc={videoHero}
                businessText={t("marketingPage.hero.business")}
                filmProductionsText={t("marketingPage.hero.title")}
                descriptionText={t("marketingPage.hero.description")}
                watchButtonText="Ver Case de Sucesso"
                ctaText={t("marketingPage.hero.cta")}
            />

            {/* TOP RAIL NAVIGATOR */}
            <nav className={`${styles.topRail} ${isDashboardActive ? styles.topRailSticky : ''}`}>
                {Object.entries(dashboardConfig).map(([id, config]) => (
                    <button
                        key={id}
                        className={`${styles.topNavItem} ${activeTab === id ? styles.activeTopNav : ''}`}
                        onClick={() => setActiveTab(id)}
                    >
                        {config.label}
                        {activeTab === id && (
                            <motion.div 
                                layoutId="topActive" 
                                className={styles.activeIndicator} 
                            />
                        )}
                    </button>
                ))}
            </nav>

            <div className={styles.dashboardContainer}>
                {/* MAIN DASHBOARD GRID */}
                <div className={styles.mainGrid}>
                    {/* PERSISTENT SIDEBAR */}
                    <aside className={styles.masterSidebar}>
                        <h3 className={styles.sidebarTitle}>{currentTabConfig.sidebarTitle}</h3>
                        {currentTabConfig.subItems.map((item) => (
                            <button
                                key={item.id}
                                className={`${styles.sidebarItem} ${activeSubTab === item.id ? styles.activeSidebarItem : ''}`}
                                onClick={() => setActiveSubTab(item.id)}
                            >
                                <span>{item.label}</span>
                                {activeSubTab === item.id && <div className={styles.subIndicator} />}
                            </button>
                        ))}
                    </aside>

                    {/* DYNAMIC CONTENT AREA */}
                    <main className={styles.contentArea}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeTab}-${activeSubTab}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <currentTabConfig.component 
                                    {...currentTabConfig.props} 
                                    activeTabOverride={activeSubTab}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
};
