import { createContext, useState, useContext } from 'react';
import translations from '../../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Verifica se há um idioma salvo no localStorage, caso contrário usa 'pt' como padrão
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('userLanguage') || 'pt';
  });

  const t = (key) => {
    const keys = key.split('.');
    const translationSet = translations[language] || translations['pt'];
    return keys.reduce((obj, key) => obj?.[key], translationSet) || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('userLanguage', lang);
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      changeLanguage,
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
