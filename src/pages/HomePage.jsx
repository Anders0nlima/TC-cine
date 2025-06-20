import { HomeLandingPage } from "../components/reused/HomeLandingPage"
import { HomeNavBar } from "../components/reused/HomeNavBar"
import { LanguageProvider, useLanguage } from "../components/translationComponents/LanguageContext"
import { Descubra } from "../componentsHomepage/Discover"
import { HomePrePos } from "../componentsHomepage/HomePrePos"

import styles from "../styles/pagesStyles/HomePage.module.css"

import imagem10 from "../assets/homeMedia/homenavbar/imagem10.jpg"
import imagem1 from "../assets/homeMedia/homenavbar/imagem1.jpg"
import InsightPos from "../componentsHomepage/InsightPos"
import Footer from "../components/reused/Footer"

export const HomePage = () => {
  const { t } = useLanguage();
    return(
        <>
        <LanguageProvider>
          <div className="home-page">
             <HomeNavBar transparent={true}/>
             <HomeLandingPage/>
          </div>
          <Descubra/>

          <HomePrePos
             items={[
                {
                  title: t("homePrePosPage.titleUmP"),
                  description: t("homePrePosPage.descriptionUmP"),
                  cartaz: imagem10,
                  link: "/producao",
                  accordionItems: [
                    {
                      title: t("homePrePosPage.accTitleUmP"),
                      content: t("homePrePosPage.accContentUmP")
                    },
                    {
                      title: t("homePrePosPage.accTitleDoisP"),
                      content: t("homePrePosPage.accContentDoisP")
                    },
                    {
                      title: t("homePrePosPage.accTitleTresP"),
                      content: t("homePrePosPage.accContentTresP")
                    }
                  ]
                },
                {
                    title:  t("homePrePosPage.titleUmS"),
                    description:  t("homePrePosPage.descriptionUmS"),
                    cartaz: imagem1,
                    link: "/pos-producao",
                    accordionItems: [
                      {
                        title:  t("homePrePosPage.accTitleUmS"),
                        content:  t("homePrePosPage.accContentUmS")
                      },
                      {
                        title:  t("homePrePosPage.accTitleDoisS"),
                        content:  t("homePrePosPage.accContentDoisS")
                      },
                      {
                        title:  t("homePrePosPage.accTitleTresS"),
                        content:  t("homePrePosPage.accContentTresS")
                      }
                    ]
                  }
              ]}
           />

           <InsightPos/>

           <Footer/>
          
        </LanguageProvider>
        
        </>
    )
}