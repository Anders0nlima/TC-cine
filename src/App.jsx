import './App.css'
import AppRoutes from './routes'
import { LanguageProvider } from './components/translationComponents/LanguageContext'
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <>
      <LanguageProvider>
        <AppRoutes/>
      </LanguageProvider>
      <Analytics />
    </>
  )
}

export default App
