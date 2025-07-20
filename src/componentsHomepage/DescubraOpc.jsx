import styles from '../styles/componentsStyles/homepageStyles/DescubraOpc.module.css';
import descubraImg1 from "../assets/homeMedia/homenavbar/descubraImg1.png"
import descubraImg2 from "../assets/homeMedia/homenavbar/descubraImg2.png"
import { useLanguage } from '../components/translationComponents/LanguageContext';


export const DescubraOpc = () => {
  const { t } = useLanguage();
    return(
        <>
        <div className={styles.containeGeral}>
        <div className={styles.containerUm}>
          <h2 className={styles.title}>{t("homeDescubraPage.conteudoTituloUm")}</h2>
          <img className={styles.img} src={descubraImg2} alt="" />
          <p className={styles.descricao}>{t("homeDescubraPage.contuedoDescricaoUm")}</p>
        </div>

        <div className={styles.containeUM}>
          <h2 className={styles.title}>{t("homeDescubraPage.conteudoTituloDois")}</h2>
          <img className={styles.img} src={descubraImg1} alt="" />
          <p className={styles.descricao}>{t("homeDescubraPage.contuedoDescricaoDois")}</p>
        </div>
        </div>
        </>
    )
}