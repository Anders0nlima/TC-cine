import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.txt}>
        <h1>{tx1}</h1>
        <p>{tx2}</p>
      </div>

      <div className={styles.buttonsWrapper}>
        <Link to={link1 || '#'} className={`${styles.interesseWrapper} ${styles.primary}`}>
          <span className={styles.interesseText}>{txbutton1}</span>
          <div className={styles.iconButton}>
            <ChevronRight size={16} className={styles.arrowIcon} />
          </div>
        </Link>

        <Link to={link2 || '#'} className={styles.interesseWrapper}>
          <span className={styles.interesseText}>{txbutton2}</span>
          <div className={styles.iconButton}>
            <ChevronRight size={16} className={styles.arrowIcon} />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};
