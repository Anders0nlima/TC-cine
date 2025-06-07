import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { useLanguage } from "../../components/translationComponents/LanguageContext";
import styles from "../../styles/componentsStyles/reusedStyles/NavBarRouter.module.css";

export const NavBarRouter = () => {
    const { t } = useLanguage();
    const [activeSection, setActiveSection] = useState('visao-geral');
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Verifica se o navbar principal passou do topo
            if (window.scrollY > 490) { // Ajuste este valor conforme necessário
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            // Detecta a seção ativa
            const sections = ['colaboradores', 'metodos', 'aplicacoes'];
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
            {/*<Link
                className={`${styles.navButton} ${activeSection === 'visao-geral' ? styles.active : ''}`}
                to="visao-geral"
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setActiveSection('visao-geral')}
            >
                <strong>{t('navbarrouter.visaoGeral')}</strong>
            </Link>*/}

            <Link
                className={`${styles.navButton} ${activeSection === 'colaboradores' ? styles.active : ''}`}
                to="colaboradores"
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setActiveSection('colaboradores')}
            >
                <strong>{t('navbarrouter.visaoGeral')}</strong>
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
                <strong>{t('navbarrouter.metodos')}</strong>
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
                <strong>{t('navbarrouter.aplicacoes')}</strong>
            </Link>

            {/*<Link
                className={`${styles.navButton} ${activeSection === 'insight' ? styles.active : ''}`}
                to="insight"
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setActiveSection('insight')}
            >
                <strong>{t('navbarrouter.insight')}</strong>
            </Link>*/}
        </nav>
    );
};