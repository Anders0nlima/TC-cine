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
      colaboradores:{
        titulo:"Visao geral",
        tituloPrincipal:"CONHEÇA COMO PODEMOS AJUDÁ-LO!",
        descricao:"A Selo Produções é uma empresa focada na qualidade técnica e criativa de seus produtos, oferecendo aos clientes soluções logísticas e criativas que asseguram eficiência, inovação, qualidade e excelência nos resultados. Confira abaixo mais detalhes!",
        botaoUm:"Produções",
        botaoDois:"Assessoria",
        botaoTres:"Serviços",
        experienciaTitle1:"Vá longe com as pessoas certas",
        experienciaContent2:"Com um corpo técnico altamente qualificado e uma ampla rede de profissionais parceiros, a TC|CINE é capaz de executar projetos de forma ágil, estratégica e com excelência.",
        experienciaTitle3:"Escolha no variado leque de produção",
        experienciaContent4:"Atuamos diretamente em diferentes naturezas e formatos de produção, incluindo curtas, longas-metragens, documentários, conteúdos publicitários, entre outros. Entre em contato para saber mais.",
        experienciaTitle5:"Faça a escolha correta!",
        experienciaContent6:"A TC|CINE atua em produções completas, ou como coprodutora em projetos audiovisuais. Ambas contam com uma estrutura profissional para atender todas as etapas: pré-produção, produção e pós-produção.",
        otimizacaoTitle1:"Conte com estruturas criativas",
        otimizacaoContent2:"A TC|CINE conta com núcleos especializados na formulação de roteiros, propostas visuais, storyboards, consultores especialidos, entre outras ferramentas pensadas para ajudá-lo a alcançar os resultados esperados.",
        otimizacaoTitle3:"Foque no que realmente importa",
        otimizacaoContent4:"Fique livre de questões técnicas atrapalhando seu processo criativo. A TC|CINE conta com departamentos especializados que realizam estudos de viabilidade técnica e outros planejamentos essenciais para a sua produção.",
        otimizacaoTitle5:"Torne suas ideias reais",
        otimizacaoContent6:"A TC|CINE também conta com um setor dedicado à captação de recursos financeiros, seja por meio de leis de incentivo ou de investimentos privados. Além disso, elabora projetos completos para submissão, facilitando todo o processo.",
        organizacaoTitle1:"Execute as etapas de forma eficiênte",
        organizacaoContent2:"A Selo oferece uma abordagem completa e personalizada no campo da produção executiva, desde a elaboração de cronogramas e orçamentos até a gestão e supervisão de recursos e equipes.",
        organizacaoTitle3:"Exceda os limites da produção",
        organizacaoContent4:"Na TC|CINE, nossas estruturas operacionais permitem que os processos de filmagem ocorram de forma integrada com a equipe, garantindo otimização, agilidade e excelência técnica em cada entrega.",
        organizacaoTitle5:"Vá além com uma equipe integrada",
        organizacaoContent6:"A equipe da TC|CINE é formada por profissionais altamente qualificados e conectados à estrutura técnica da produtora, permitindo resultados que vão além da execução técnica, alcançando inovação, criatividade e impacto.",
      },
      metodos:{
        titulo: "Métodos",
        tituloPrincipal: "PRODUZA MAIS COM ORGANIZAÇÃO",
        descricao: "a Selo produções se destaca não apenas pela variedade e qualidade dos serviços oferecidos, mas, acima de tudo, por sua estrutura organizacional sólida, que permite a execução de projetos de maneira organizada, eficiente e altamente produtiva.",
        Destaque: "Experiência",
        subDescricao: "Cada etapa do processo da concepção à finalização é conduzida com planejamento estratégico e gestão criteriosa, otimizando recursos, tempo e resultados. Veja como aplicamos esses critérios",
        variant: "padrao",
        containerTitulo: "Produções cinematográficas",
        containerDescricao: "Escolha a melhor opção para sua produção cinematrográficas, retire suas ideias do pepel e veja como podemos ajudar você a produzir mais.",
        watchButton: "Assistir",
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
      colaboradores:{
        titulo:"Overview",
        tituloPrincipal:"FIND OUT HOW WE CAN HELP YOU!",
        descricao:"Selo Produções is a company focused on the technical and creative quality of its products, offering its customers logistical and creative solutions that ensure efficiency, innovation, quality and excellence in results. Check out more details below",
        botaoUm:"Productions",
        botaoDois:"Advice",
        botaoTres:"Services",
        experienciaTitle1:"Go far with the right people",
        experienciaContent2:"With a highly qualified technical team and a wide network of professional partners, TC|CINE is capable of executing projects in an agile, strategic and excellent manner.",
        experienciaTitle3:"Choose from a wide range of products",
        experienciaContent4:"We work directly with different types and formats of production, including short films, feature films, documentaries, advertising content, among others. Contact us to find out more.",
        experienciaTitle5:"Make the right choice!",
        experienciaContent6:"TC|CINE works on complete productions, or as a co-producer in audiovisual projects. Both have a professional structure to cover all stages: pre-production, production and post-production.",
        otimizacaoTitle1:"Count on creative structures",
        otimizacaoContent2:"TC|CINE has specialized teams in the formulation of scripts, visual proposals, storyboards, specialized consultants, among other tools designed to help you achieve the expected results.",
        otimizacaoTitle3:"Focus on what really matters",
        otimizacaoContent4:"Avoid technical issues that hinder your creative process. TC|CINE has specialized departments that carry out technical feasibility studies and other essential planning for your production.",
        otimizacaoTitle5:"Make your ideas real",
        otimizacaoContent6:"TC|CINE also has a department dedicated to raising financial resources, whether through incentive laws or private investments. In addition, it prepares complete projects for submission, facilitating the entire process.",
        organizacaoTitle1:"Perform the steps efficiently",
        organizacaoContent2:"Selo offers a complete and personalized approach in the field of executive production, from the preparation of schedules and budgets to the management and supervision of resources and teams.",
        organizacaoTitle3:"Exceed the limits of production",
        organizacaoContent4:"At TC|CINE, our operational structures allow filming processes to occur in an integrated manner with the team, ensuring optimization, agility and technical excellence in each delivery.",
        organizacaoTitle5:"Go further with an integrated team",
        organizacaoContent6:"The TC|CINE team is made up of highly qualified professionals connected to the production company's technical structure, enabling results that go beyond technical execution, achieving innovation, creativity and impact.",
      },
      metodos:{
        titulo: "Methods",
        tituloPrincipal: "PRODUCE MORE WITH ORGANIZATION",
        descricao: "Selo Produções stands out not only for the variety and quality of the services offered, but, above all, for its solid organizational structure, which allows the execution of projects in an organized, efficient and highly productive manner.",
        Destaque: "Experience",
        subDescricao: "Each stage of the process from conception to completion is conducted with strategic planning and careful management, optimizing resources, time and results. See how we apply these criteria",
        containerTitulo: "Film productions",
        containerDescricao: "Choose the best option for your film production, take your ideas off the paper and see how we can help you produce more.",
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
    /*fr: {
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
    }*/
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