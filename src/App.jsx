import './App.css'
import AppRoutes from './routes'
import { LanguageProvider } from './components/context/LanguageContext'
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
