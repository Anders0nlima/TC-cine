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
      metodosConteudos:{
        botaoUm:"Resultado final",
        botaoDois:"Estudo dinâmico",
        botaoTres: "Técnicas criativas",
        botaoQuatro:"Mapa espaciais",
        botaoCinco:"Simulações técnicas"
      },
      metodosConteudosText:{
        TitleUm:"Resultado Final",
        TextUm:"O Resultado Final é fruto das Técnicas Desenvolvidas pela TC|CINE. Por meio de processos organizados e Otimizados, garantimos alta qualidade visual ao alinhar rigor Técnico e criatividade. Clique nos botões acima e acompanhe em detalhes cada etapa do nosso fluxo de Trabalho.",
        TitleDois:"Estudo Dinâmico",
        TextDois:"Na TC|CINE, Utilizados estruturas organizacionais na Pré & Produção que facilitam o controle de equipamentos, orçamentos e cronogramas, além de decupagens Dinâmicas e ordem de serviços detalhadas, tudo de forma automática e precisa. Otimizando e assegurando a qualidade desejada.",
        TitleTres:"Técnicas Criativas",
        TextTres:"Ambientes controlados e bem organizados são a base para a liberdade criativa. A função da TC|CINE é criar um espaço técnico onde a criatividade possa ser aplicada em Planos de filmagens, MoodBoards e Shotlists, criando um universo que possa ser compartilhado com o restante da equipe.",
        TitleQuatro:"Mapa Espaciais",
        TextQuatro:"Contamos com equipes capazes de criar Blueprints e modelos de planejamento espacial em locações. Esses mapas garantem que diretores avaliem as disponibilidades técnicas e antecipem obstáculos, além da sua função criativa, definido melhor o fluxo de produção objetivamente.",
        TitleCinco:"Simulações Técnicas",
        TextCinco:"Com todos os documentos técnicos definidos, nosso time de designers 3D realiza simulações completas: ângulos de câmera, composições, iluminação, cenografia e muito além. A pré-visualização virtual torna o processo criativo mais dinâmico, seguro e econômico, justamento por seu objetivo assertivo.",
      },
      metodosConteudosPp:{
        botaoUm:"Correção",
        botaoDois:"Look",
        botaoTres: "Colorização"
      },
      metodosConteudosTextPp:{
        TitleUm:"Correção de Cor",
        TextUm:"A correção de cor é a base do color Grading. Seu principal objetivo é garantir a uniformidade técnica das imagens obtidas diretamente das câmeras.",
        TitleDois:"Definição do Look",
        TextDois:"Em produções mais exigentes é necessário dar passos a mais no quesito color Grading, esse é o caso da Definição de Look.",
        TitleTres:"Colorização Estética",
        TextTres:"A colorização estética é a etapa de manuseio dos materiais e aplicações das estéticas estabelecidas."
      },
      aplicacoesProduction:{
        titulo: "Aplicações",
        tituloPrincipal: "NOSSOS SERVIÇOS PRINCIPAIS",
        descricao: "Conheça nossos serviços principais para produção audiovisual.",
        botaoUm: "Pré-Produção",
        botaoDois: "Produção",
        botaoTres: "Ambos",
        contTituloUm: "Edição Audiovisual",
        contTextoUm: "A Selo oferece diversos formatos de edição para produtos audiovisuais. Tem uma obra seja documentário, ficção, publicitário ou institucionale busca um resultado eficiente, que valorize ao máximo o seu material? Conte com a Selo.  Clique no botão abaixo para contratar os serviços ou entrar em contato com nossos especialistas.",
        contTituloDois:"Color Grading",
        contTextoDois:"Ficou interessado no poder do color grading para o seu produto audiovisual? Conte com a Selo para transformar seu conteúdo em uma verdadeira obra visual, com qualidade e estilo. Clique no botão abaixo para contratar os serviços ou entrar em contato com nossos especialistas.",
        contTituloTres:"Design Sonoro",
        contTextoTres:"Quer que seu projeto tenha o máximo de imersão e impacto no público? Os serviços de  Design Sonoro da Selo é a opção certa para você. Clique no botão abaixo para contratar ou, se ainda tiver alguma dúvida, um de nossos especialistas entrará em contato para ajudá-lo.",
        contBotao:"Veja Mais"
      },
      minifooter:{
        tx1: "Ficou interessado?",
        tx2: "Acesse a página de suporte ao cliente e entre em contato com um de nossos especialistas e tire suas dúvidas ao contrate os serviços da selo",
        txbutton1: "Acesse a página de suporte ao cliente",
        txbutton2: "Pós-produção do Selo",
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
      navbarrouterteste:{
       visaoGeral: "Visão Geral",
       ColorGrading: "Color Grading",
       DesighSonoro: "Design Sonoro",
       Aplicacao: "Aplicação"
      },
      colaboradoresPp:{
        titulo:"Visao geral",
        tituloPrincipal:"MELHORE O FLUXO DE TRABALHO",
        descricao:"A pós-produção é uma das etapas de produção de qualquer obra, ela é determinante para a qualidade final do projeto.  Para isso a Selo utiliza técnicas avançadas, workflows refinados e profissionais especializados prontos para extrair o máximo do processo.",
        botaoUm:"Edição",
        botaoDois:"Performance",
        botaoTres:"Criatividade",
        experienciaTitle1:"Produza ritmo com a edição",
        experienciaContent2:"O selo oferece serviços básicos de edição de vídeos em diferentes formatos, como: Curtas Longas-metragens, Comerciais, Documentários e vídeos institucionais.",
        experienciaTitle3:"Alie ciência e criatividade",
        experienciaContent4:"São aplicadas e desenvolvidas estruturas narrativas e técnicas complexas, embasadas em fundamentos teóricos e metodologias científicas a respeito da montagem audiovisual. ",
        experienciaTitle5:"Inove por meio da arte",
        experienciaContent6:"Temos como princípio a inovação por meio da arte, por isso sempre valoriza novas abordagens criativas, garantindo um fluxo orgânico e adaptável a cada projeto.",
        otimizacaoTitle1:"Seja produtivo com otimização",
        otimizacaoContent2:"Como parte essencial do selo, implementamos mecanismos que otimizam processos técnicos e valorizam a liberdade criativa.",
        otimizacaoTitle3:"Obtenha Melhores Resultados com Controle",
        otimizacaoContent4:"O selo assume toda a gestão do processo, garantindo controle total, estabilidade e confiança nos resultados entregues.",
        otimizacaoTitle5:"Tenha resultaos Dentro dos Prazos",
        otimizacaoContent6:"Cada etapa é conduzida com rigor técnico e supervisão especializada, assegurando entregas pontuais e de alta precisão.",
        organizacaoTitle1:"Crie mais com integração criativa",
        organizacaoContent2:"Cada departamento do selo atua em parceria com outras áreas criativas, garantindo conexões com diferentes aspectos do processo.",
        organizacaoTitle3:"Alcance resultos com padrões de mercado",
        organizacaoContent4:"O selo segue padrões e tendências do mercado, o que garante obras atuais e com relevância no cenário social contemporâneo.",
        organizacaoTitle5:"Construa produtos originais que se destaquem",
        organizacaoContent6:"A liberdade artística é essencial para o selo, por isso buscamos sempre inovar e criar produtos audiovisuais marcantes.",
      },
      metodosPp:{
       titulo: "Color gradind",
       tituloPrincipal: "VISUAL DE CINEMA",
       descricao: "A colorização é uma etapa essencial da pós-produção audiovisual, responsável por refinar e transformar o material Bruto em uma obra visualmente impactante. A selo atua nos dois segmentos da colorização tanto na forma técnica quanto na estética.",
       Destaque: "Destaques",
       subDescricao: "O color grading não se limita à aplicação de filtros ou ajustes básicos, trata-se de um processo completo, dividido em etapas estratégicas.",
       containerTitulo: "Veja o poder narrativo do color Granding",
       containerDescricao: "Escolha a melhor opção para sua produção cinematrográficas, retire suas ideas do pepel e veja como podemos ajudar você a produzir mais.",
       watchButton: "Assista",
       pauseButton: "Pausar"
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
      aplicacoesProduction:{
        titulo: "Applications",
        tituloPrincipal: "OUR MAIN SERVICES",
        descricao: "Discover our main services for audiovisual production.",
        botaoUm: "Pre-Production",
        botaoDois: "Production",
        botaoTres: "Both",
        contTituloUm: "Audiovisual Edition",
        contTextoUm: "Selo offers several editing formats for audiovisual products. Do you have a documentary, fiction, advertising or institutional work and are looking for an efficient result that maximizes the value of your material? Count on Selo. Click the button below to hire our services or contact our specialists.",
        contTituloDois:"Color Grading",
        contTextoDois:"Are you interested in the power of color grading for your audiovisual product? Count on Selo to transform your content into a true visual work, with quality and style. Click the button below to hire the services or contact our experts.",
        contTituloTres:"Sound Design",
        contTextoTres:"Do you want your project to have maximum immersion and impact on the audience? Selo's Sound Design services are the right option for you. Click the button below to hire us or, if you still have any questions, one of our experts will contact you to help you.",
        contBotao:"See More"
      },
      minifooter:{
        tx1: "Are you interested?",
        tx2: "Access the customer support page and contact one of our specialists and clear up any doubts you may have when hiring Selo's services.",
        txbutton1: "Visit the customer support page",
        txbutton2: "Post-production of the Seal",
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
       metodosConteudos:{
        botaoUm:"Final result",
        botaoDois:"Dynamic Study",
        botaoTres: "Creative techniques",
        botaoQuatro:"Space map",
        botaoCinco:"Technical simulations"
      },
      metodosConteudosText:{
        TitleUm:"Final result",
        TextUm:"The Final Result is the result of the Techniques Developed by TC|CINE. Through organized and optimized processes, we ensure high visual quality by aligning technical rigor and creativity. Click on the buttons above and follow each step of our workflow in detail.",
        TitleDois:"Dynamic Study",
        TextDois:"At TC|CINE, we use organizational structures in Pre & Production that facilitate the control of equipment, budgets and schedules, in addition to Dynamic breakdowns and detailed service orders, all automatically and accurately. Optimizing and ensuring the desired quality.",
        TitleTres:"Creative techniques",
        TextTres:"Controlled and well-organized environments are the basis for creative freedom. TC|CINE's role is to create a technical space where creativity can be applied to filming plans, mood boards and shotlists, creating a universe that can be shared with the rest of the team.",
        TitleQuatro:"Space map",
        TextQuatro:"We have teams capable of creating Blueprints and spatial planning models on location. These maps ensure that directors assess technical availability and anticipate obstacles, in addition to their creative function, better defining the production flow objectively.",
        TitleCinco:"Technical simulations",
        TextCinco:"With all the technical documents defined, our team of 3D designers performs complete simulations: camera angles, compositions, lighting, scenography and much more. Virtual preview makes the creative process more dynamic, safe and economical, precisely because of its assertive objective.",
      },
       metodosConteudosPp:{
        botaoUm:"Correction",
        botaoDois:"Look",
        botaoTres: "Colorization"
      },
      metodosConteudosTextPp:{
        TitleUm:"Color Correction",
        TextUm:"Color correction is the basis of color grading. Its main objective is to ensure the technical uniformity of images obtained directly from cameras.",
        TitleDois:"Look Definition",
        TextDois:"In more demanding productions, it is necessary to take further steps in terms of color grading, this is the case with Look Definition.",
        TitleTres:"Aesthetic Colorization",
        TextTres:"A colorização estética é a etapa de manuseio dos materiais e aplicações das estéticas estabelecidas."
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
        navbarrouterteste:{
       visaoGeral: "Overview",
       ColorGrading: "Color Grading",
       DesighSonoro: "Sound Design",
       Aplicacao: "Application"
      },
      colaboradoresPp:{
        titulo:"Overview",
        tituloPrincipal:"IMPROVE WORKFLOW",
        descricao:"Post-production is one of the production stages of any work, and it is crucial to the final quality of the project. To achieve this, Selo uses advanced techniques, refined workflows and specialized professionals ready to get the most out of the process.",
        botaoUm:"Edition",
        botaoDois:"Performance",
        botaoTres:"Creativity",
        experienciaTitle1:"Create rhythm with editing",
        experienciaContent2:"The label offers basic video editing services in different formats, such as: Short Films, Feature Films, Commercials, Documentaries and institutional videos.",
        experienciaTitle3:"Combine science and creativity",
        experienciaContent4:"Complex narrative structures and techniques are applied and developed, based on theoretical foundations and scientific methodologies regarding audiovisual editing.",
        experienciaTitle5:"Innovate through art",
        experienciaContent6:"Our principle is innovation through art, which is why we always value new creative approaches, ensuring an organic and adaptable flow for each project.",
        otimizacaoTitle1:"Be productive with optimization",
        otimizacaoContent2:"As an essential part of the label, we implement mechanisms that optimize technical processes and value creative freedom.",
        otimizacaoTitle3:"Get Better Results with Control",
        otimizacaoContent4:"The seal assumes the entire management of the process, ensuring total control, stability and confidence in the results delivered.",
        otimizacaoTitle5:"Get results on time",
        otimizacaoContent6:"Each stage is conducted with technical rigor and specialized supervision, ensuring punctual and highly accurate deliveries.",
        organizacaoTitle1:"Create more with creative integration",
        organizacaoContent2:"Each department of the label works in partnership with other creative areas, ensuring connections with different aspects of the process.",
        organizacaoTitle3:"Achieve results with market standards",
        organizacaoContent4:"The seal follows market standards and trends, which guarantees current works with relevance in the contemporary social scenario.",
        organizacaoTitle5:"Build original products that stand out",
        organizacaoContent6:"Artistic freedom is essential for the label, which is why we always seek to innovate and create remarkable audiovisual products.",
      },
       metodosPp:{
       titulo: "Color gradind",
       tituloPrincipal: "CINEMA LOOK",
       descricao: "Coloring is an essential stage of audiovisual post-production, responsible for refining and transforming raw material into a visually striking work. The label operates in both segments of colorization, both technically and aesthetically.",
       Destaque: "Highlights",
       subDescricao: "Color grading is not limited to applying filters or basic adjustments, it is a complete process, divided into strategic steps.",
       containerTitulo: "See the narrative power of color grading",
       containerDescricao: "Choose the best option for your film production, take your ideas off the paper and see how we can help you produce more.",
       watchButton: "Watch",
       pauseButton: "Pause"
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