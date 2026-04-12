import { HomeLandingPage } from "../components/reused/HomeLandingPage"
import { NavbarPremium } from "../components/reused/NavbarPremium"
import { LanguageProvider, useLanguage } from "../components/context/LanguageContext"
import { Descubra } from "../components/home/Discover"
import { HomePrePos } from "../components/home/HomePrePos"


import imagem10 from "../assets/homeMedia/homenavbar/imgcartazat.png"
import imagem1 from "../assets/homeMedia/homenavbar/imgcartazat.png"

import InsightPos from "../components/home/InsightPos"
import Footer from "../components/reused/Footer"
import { SideScrollDots } from "../components/reused/SideScrollDots"

export const HomePage = () => {
  const { t } = useLanguage();
  return (
    <>
      <NavbarPremium />
      <SideScrollDots />
      <div id="inicio">
        <HomeLandingPage />
      </div>
      <div id="descubra">
        <Descubra />
      </div>

      <div id="projetos">
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
              title: t("homePrePosPage.titleUmS"),
              description: t("homePrePosPage.descriptionUmS"),
              cartaz: imagem1,
              link: "/pos-producao",
              badge: "MARKETING",
              category: "ESTRATÉGIA & CRESCIMENTO",
              accordionItems: [
                {
                  title: t("homePrePosPage.accTitleUmS"),
                  content: t("homePrePosPage.accContentUmS")
                },
                {
                  title: t("homePrePosPage.accTitleDoisS"),
                  content: t("homePrePosPage.accContentDoisS")
                },
                {
                  title: t("homePrePosPage.accTitleTresS"),
                  content: t("homePrePosPage.accContentTresS")
                }
              ]
            }
          ]}
        />
      </div>

      <div id="insight">
        <InsightPos />
      </div>
      
      <div id="contato">
        <Footer />
      </div>
    </>
  );
};
