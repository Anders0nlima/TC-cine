import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Verifica se há um idioma salvo no localStorage, caso contrário usa 'pt' como padrão
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('userLanguage') || 'pt';
  });
  
  const translations = {
    pt: {
      producao: {
        business: "Negócios",
        filmProductions: "Pré & Produções cinematográficas",
        description: "Escolha a melhor opção para sua produção cinematográfica. Tire suas ideias do papel e conte com a TC | CINE para transformar projetos em produções reais, criativas e eficientes.",
        watchButton: "Assista",
        pauseButton: "Pausar"
      },
      posProducao: {
        business: "Negócios ",
        filmProductions: "Pós-produções cinematográficas",
        description: "Escolha a melhor forma de finalizar seu projeto audiovisual. Alcance resultados Superiores com a pós-produção da TC|CINE. Descubra como podemos impulsionar sua obra com qualidade e precisão.",
        watchButton: "Assista",
        pauseButton: "Pausar"
      },
      navbarrouter:{
        visaoGeral: "Visão Geral",
        colaboradores: "Colaboradores",
        metodos: "Métodos",
        aplicacoes: "Aplicações",
        insight: "Insight"
      },
      visaoGeral:{
        titulo: "Visão Geral",
        tituloPrincipal: "TRANSFORME SUA MANEIRA DE PRODUZIR",
        descricao: "A Selo Produções é uma empresa focada na qualidade técnica e criativa de seus produtos, oferecendo aos clientes soluções logísticas e criativas que asseguram eficiência, inovação, qualidade e excelência nos resultados. Confira mais detalhes!",
        title1: "PROFISSIONAIS EXPERIENTES",
        content1: "Conte com os melhores proficcionais da área, e com experiência, possibilidades maior rendimento e otimização da produção.",
        title2: "PROFISSIONAIS RECOMENDADOS",
        content2: "Conte com os melhores proficcionais da área, e com experiência, possibilidades maior rendimento e otimização da produção.",
        title3: "EXPECIALISTAS DE PRODUÇÃO",
        content3: "Conte com os melhores proficcionais da área, e com experiência, possibilidades maior rendimento e otimização da produção.",
        destaquesBotao: "Destaques"
      }
    },
    en: {
      producao: {
        business: "Business",
        filmProductions: "Film productions",
        description: "Choose the best option for your film production, bring your ideas to life and see how we can help you produce more.",
        watchButton: "Watch",
        pauseButton: "Pause"
      },
      posProducao: {
        business: "Post-production",
        filmProductions: "Cinematic post-productions",
        description: "Choose the best option for your post-production needs. Bring your ideas to life and see how we can help you finish with excellence.",
        watchButton: "Watch",
        pauseButton: "Pause"
      },
      navbarrouter: {
        visaoGeral: "Overview",
        colaboradores: "Collaborators",
        metodos: "Methods",
        aplicacoes: "Applications",
        insight: "Insight"
      },
      visaoGeral:{
        titulo: "Overview",
        tituloPrincipal: "TRANSFORM YOUR WAY OF PRODUCING",
        descricao: "Selo Produções is a company focused on the technical and creative quality of its products, offering its customers logistical and creative solutions that ensure efficiency, innovation, quality and excellence in results. Check out more details!",
        title1: "EXPERIENCED PROFESSIONALS",
        content1: "Count on the best professionals in the field, with experience, possibilities for greater performance and production optimization.",
        title2: "RECOMMENDED PROFESSIONALS",
        content2: "Count on the best professionals in the field, with experience, possibilities for greater performance and production optimization.",
        title3: "PRODUCTION SPECIALISTS",
        content3: "Count on the best professionals in the field, with experience, possibilities for greater performance and production optimization.",
        destaquesBotao: "Highlights"
      }
    },
    fr: {
      producao: {
        business: "Entreprise",
        filmProductions: "Productions cinématographiques",
        description: "Choisissez la meilleure option pour votre production cinématographique, donnez vie à vos idées et découvrez comment nous pouvons vous aider à produire plus.",
        watchButton: "Regarder",
        pauseButton: "Pause"
      }
    },
    es: {
      producao: {
        business: "Negocios",
        filmProductions: "Producciones cinematográficas",
        description: "Elige la mejor opción para tu producción cinematográfica, da vida a tus ideas y descubre cómo podemos ayudarte a producir más.",
        watchButton: "Ver",
        pauseButton: "Pausa"
      }
    },
    zh: {
      producao: {
        business: "商务",
        filmProductions: "电影制作",
        description: "为您的电影制作选择最佳方案，实现您的创意，了解我们如何帮助您提高制作效率。",
        watchButton: "观看",
        pauseButton: "暂停"
      }
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, key) => obj?.[key], translations[language]) || key;
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