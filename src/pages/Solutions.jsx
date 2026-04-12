import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { NavbarPremium } from "../components/reused/NavbarPremium"
import { useLanguage } from "../components/context/LanguageContext";
import { LandingPage } from "../components/reused/LandingPage";
import Colaboradores from "../components/reused/Colaboradores";
import Metodos from "../components/reused/Metodos";
import BeforeAfterSlider from "../components/pos-production/BeforeAfterSlider";
import DesignSonoro from "../components/pos-production/DesignSonoro";
import AplicacoesPp from "../components/reused/AplicaçãoPp";
import Footer from "../components/reused/Footer";

// Data & Scaling
import { getSolutionsConfig } from '../data/solutionsData.jsx';

// Styling
import styles from "../styles/pagesStyles/SolutionsDashboard.module.css";

// Assets - Optimized WebP
import img125 from "../assets/posProductionMedia/Group 125.webp";
import img129 from "../assets/posProductionMedia/Group 129.webp";
import img131 from "../assets/posProductionMedia/Group 131.webp";
import img132 from "../assets/posProductionMedia/Group 132.webp";
import img134 from "../assets/posProductionMedia/Group 134.webp";
import img145 from "../assets/posProductionMedia/Group 145.webp";

// Assets - Common
import videoHero from "../assets/homeMedia/homenavbar/doc.mov";
import cartazfilme2 from "../assets/posProductionMedia/posternovo2.png";
import cartazfilmePos from "../assets/posProductionMedia/posternovo1.png";

// Assets - Methods (Real Content)
import imgResultado from "../assets/productionMedia/resultado_final.png";
import imgEstudo from "../assets/productionMedia/Estudo_dinamico.png";
import imgTecnicas from "../assets/productionMedia/Tecnicas_Criativas.png";
import imgMapas from "../assets/productionMedia/Mapas_espaciais.png";
import imgSimulacoes from "../assets/productionMedia/Simulacoes_tecnicas.png";

// Assets - Sound & General
import imgSonorizacao from "../assets/productionMedia/sonorizacao.png";
import imgEdicao from "../assets/productionMedia/edicao.png";
import imgColorApp from "../assets/productionMedia/colorgrading.png";

const assets = {
    img125, img129, img131, img132, img134, img145,
    cartazfilme2, cartazfilmePos, imgResultado, imgEstudo,
    imgTecnicas, imgMapas, imgSimulacoes, imgSonorizacao,
    imgEdicao, imgColorApp
};

export const Solutions = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('visao-geral');
    const [activeSubTab, setActiveSubTab] = useState(0);
    const [isDashboardActive, setIsDashboardActive] = useState(false);

    // Master Config from External Factory
    const dashboardConfig = useMemo(() => getSolutionsConfig(t, assets), [t]);

    const currentTabConfig = dashboardConfig[activeTab];

    // Reset subtab when tab changes
    useEffect(() => {
        setActiveSubTab(currentTabConfig.subItems[0].id);
    }, [activeTab, currentTabConfig.subItems]);

    // Scroll listener para assumir navbar principal
    useEffect(() => {
        const handleScroll = () => {
            // Se o usuário descer mais de 400px, o dashboard assume o topo
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
                businessText={t("solucoesPage.business")}
                filmProductionsText={t("solucoesPage.filmProductions")}
                descriptionText={t("solucoesPage.description")}
                watchButtonText={t("solucoesPage.watchButton")}
                ctaText={t("solucoesPage.cta")}
            />

            {/* TOP RAIL NAVIGATOR - Moved outside for reliable sticky behavior */}
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
