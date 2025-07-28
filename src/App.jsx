import './App.css'
import AppRoutes from './routes'
import { LanguageProvider } from './components/translationComponents/LanguageContext'


function App() {

  return (
    <>
      <LanguageProvider>
        <AppRoutes/>
      </LanguageProvider>
    </>
  )
}

export default App
