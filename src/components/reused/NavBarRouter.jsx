import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { useLanguage } from "../translationComponents/LanguageContext";
import styles from "../../styles/componentsStyles/reusedStyles/NavBarRouter.module.css";

export const NavBarRouter = ({ 
  items = [
    /*{ id: 'colaboradores', translationKey: 'navbarrouter.visaoGeral' },
    { id: 'metodos', translationKey: 'navbarrouter.metodos' },
    { id: 'aplicacoes', translationKey: 'navbarrouter.aplicacoes' }*/
  ], 
  stickyOffset = 490, 
  scrollOffset = -80 
}) => {
    const { t } = useLanguage();
    const [activeSection, setActiveSection] = useState(items[0]?.id || '');
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Verifica se o navbar principal passou do topo
            if (window.scrollY > stickyOffset) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            // Detecta a seção ativa
            for (const item of items) {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(item.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [items, stickyOffset]);

    return (
        <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
            {items.map((item) => (
                <Link
                    key={item.id}
                    className={`${styles.navButton} ${activeSection === item.id ? styles.active : ''}`}
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={scrollOffset}
                    spy={true}
                    onSetActive={() => setActiveSection(item.id)}
                >
                    <strong>{t(item.translationKey)}</strong>
                </Link>
            ))}
        </nav>
    );
};