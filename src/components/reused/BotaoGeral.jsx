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


// LoadingOverlay - animação de carregamento

{/*import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import styles from "../../styles/componentsStyles/reusedStyles/BotaoGeral.module.css";
import { LoadingOverlay } from "./LoadingOverlay";

export const BotaoGeral = ({
  texto,
  link,
  delay = 300
}) => {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);

  const handleClick = () => {
    if (link) {
      setShowLoading(true); // Mostra o overlay
      setTimeout(() => {
        navigate(link);
      }, delay);
    }
  };

  return (
    <>
      <button className={styles.novoBotao} onClick={handleClick}>
        <div className={styles.amareloWrapper}>
          <FontAwesomeIcon icon={faChevronRight} className={styles.novoIcone} />
        </div>
        <span className={styles.novoTexto}><strong>{texto}</strong></span>
      </button>

      {showLoading && <LoadingOverlay />}
    </>
  );
};*/}