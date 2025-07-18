import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes'
import { LanguageProvider } from './components/translationComponents/LanguageContext'


function App() {

  return (
    <>
      <BrowserRouter basename="/TC-cine">
      <LanguageProvider>
        <AppRoutes/>
      </LanguageProvider>
      </BrowserRouter>
    </>
  )
}

export default App
