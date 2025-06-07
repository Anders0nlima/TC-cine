import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import styles from "../../styles/componentsStyles/reusedStyles/NavBarRouter.module.css";

export const NavBarRouterPp = () => {
    const [activeSection, setActiveSection] = useState('visao-geral');
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        // Função para atualizar o tipo de tela
        const updateScreenType = () => ({
            isNotebookScreen: window.matchMedia('(min-width: 1024px) and (max-width: 1366px)').matches,
            isLargeScreen: window.matchMedia('(min-width: 1367px)').matches
        });

        // Função de scroll que usa o valor atualizado
        const handleScroll = () => {
            const { isNotebookScreen, isLargeScreen } = updateScreenType();
            const scrollThreshold = isNotebookScreen ? 600 : isLargeScreen ? 700 : 300;

            setIsSticky(window.scrollY > scrollThreshold);

            const sections = ['visao-geral', 'color-grading', 'design-sonoro', 'aplicacoes', 'metodos'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);


    return (
        <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
            <Link
                className={`${styles.navButton} ${activeSection === 'visao-geral' ? styles.active : ''}`}
                to="visao-geral"
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setActiveSection('visao-geral')}
            >
                <strong>Visão Geral</strong>
            </Link>

            <Link
                className={`${styles.navButton} ${activeSection === 'metodos' ? styles.active : ''}`}
                to="metodos"
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setActiveSection('metodos')}
            >
                <strong>Color Grading</strong>
            </Link>

            <Link
                className={`${styles.navButton} ${activeSection === 'design-sonoro' ? styles.active : ''}`}
                to="design-sonoro"
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setActiveSection('design-sonoro')}
            >
                <strong>Design Sonoro</strong>
            </Link>

            <Link
                className={`${styles.navButton} ${activeSection === 'aplicacoes' ? styles.active : ''}`}
                to="aplicacoes"
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setActiveSection('aplicacoes')}
            >
                <strong>Aplicações</strong>
            </Link>

        </nav>
    );
};