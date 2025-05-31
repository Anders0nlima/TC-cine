import { HomeLandingPage } from "../components/reused/HomeLandingPage"
import { HomeNavBar } from "../components/reused/HomeNavBar"
import { LanguageProvider } from "../components/translationComponents/LanguageContext"
import { Descubra } from "../componentsHomepage/Discover"
import styles from "../styles/pagesStyles/HomePage.module.css"

export const HomePage = () => {
    return(
        <>
        <LanguageProvider>
          <div className="home-page">
             <HomeNavBar transparent={true}/>
             <HomeLandingPage/>
          </div>
          <Descubra/>
          
        </LanguageProvider>
        
        </>
    )
}