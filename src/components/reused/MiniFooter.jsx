import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from "../../styles/componentsStyles/reusedStyles/MiniFooter.module.css"

export const MiniFooter = ({ 
  tx1, 
  tx2,
  txbutton1,
  txbutton2,
  link1 = "/suporte",
  link2 = "/pos-producao",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.txt}>
        <h1>{tx1}</h1>
        <p>{tx2}</p>
      </div>

      <div className={styles.buttonsWrapper}>
        <Link to={link1 || '#'} className={styles.interesseWrapper}>
        <span className={styles.interesseText}><strong>{txbutton1}</strong></span>
          <div className={styles.iconButton}>
            <FontAwesomeIcon icon={faChevronRight} className={styles.arrowIcon} />
          </div>
        </Link>

            <Link to={link2 || '#'} className={styles.interesseWrapper}>
           <span className={styles.interesseText}><strong>{txbutton2}</strong></span>
           <div className={styles.iconButton}>
            <FontAwesomeIcon icon={faChevronRight} className={styles.arrowIcon} />
          </div>
        </Link>
      
      </div>
    </div>
  );
};