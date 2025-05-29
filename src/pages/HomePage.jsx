import { HomeNavBar } from "../components/reused/HomeNavBar"
import { LanguageProvider } from "../components/translationComponents/LanguageContext"
import styles from "../styles/pagesStyles/HomePage.module.css"

export const HomePage = () => {
    return(
        <>
        <LanguageProvider>
          <HomeNavBar/>
        </LanguageProvider>
        
        </>
    )
}