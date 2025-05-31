import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

import styles from "../../styles/componentsStyles/reusedStyles/BotaoGeral.module.css"


export const BotaoGeral = ({
    texto,
    link
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (link) {
            navigate(link); 
        }
    };

    return(
        <>
        <button className={styles.novoBotao} onClick={handleClick}>
            <div className={styles.amareloWrapper}>
                <FontAwesomeIcon icon={faChevronRight} className={styles.novoIcone} />
            </div>
            <span className={styles.novoTexto}><strong>{texto}</strong></span>
        </button>
        </>
    )
}