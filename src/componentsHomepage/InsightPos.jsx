import { useState } from 'react';
import styles from "../styles/componentsStyles/homepageStyles/InsightPos.module.css";

const InsightPos = ({
  titulo = "INSIGHT",
  tituloPrincipal = "A MELHOR OPÇÃO",
  descricao = "Descubra por que a Selo é a escolha ideal na produção audiovisual. Fale com a gente e veja como a Selo pode transformar suas ideias em realidade.",
  tabs = {
    experiencia: {
      nome: "Pilares",
      cards: [
        {
          title: "Pilares",
          mainTitulo: "Produza mais com organização",
          subtitle: "Organização alinhada com criatividade",
          content: "Na TC|CINE, a organização é a base da criatividade. Projetos bem estruturados liberam o potencial artístico, garantindo eficiência, clareza e excelência desde a pré-produção até a entrega final."
        },
        {
          title: "Pilares",
          mainTitulo: "Otimize etapas técnicas",
          subtitle: "Otimização para melhores performance",
          content: "Cada processo passa por constantes análises e melhorias. Buscamos eficiência sem abrir mão da qualidade, otimizando recursos e etapas para alcançar resultados de alto desempenho técnico."
        },
        {
          title: "Pilares",
          mainTitulo: "Obtenha qualidade superiores",
          subtitle: "Resultados Supriendentes",
          content: "Mais do que resultados em produtos, a TC|CINE proporciona experiências. Nossa estrutura é pensada para gerar resultados superiores, que surpreendem e conectam com o público de forma profunda e memorável."
        }
      ]
    },
    otimizacao: {
      nome: "Ciência & Arte",
      cards: [
        {
          title: "Ciência & Arte",
          mainTitulo: "Bases científicas",
          subtitle: "Fundamentos científicos em execução",
          content: "Toda a estrutura da Selo é fundamentada em estudos e práticas científicas. Acreditamos que a Arte é uma extensão essencial da Ciência e no audiovisual, essa união se transforma em linguagem, precisão e inovação."
        },
        {
          title: "Ciência & Arte",
          mainTitulo: "Busca por inovação",
          subtitle: "Práticas Cientícas os melhores resultados",
          content: "A equipe da Selo está em constante diálogo com processos científicos e criativos, explorando novas formas de aplicar a ciência à arte para aprimorar cada etapa da produção audiovisual."
        },
        {
          title: "Ciência & Arte",
          mainTitulo: "Atuação acadêmica",
          subtitle: "Pontos entre o mercado e a Acadêmia científica",
          content: "A Selo também atua como ponte entre o mercado e a academia, desenvolvendo e compartilhando novas perspectivas sobre o audiovisual com base científica, contribuindo para a evolução do setor."
        }
      ]
    },
    organizacao: {
      nome: "Criatividade",
      cards: [
        {
          title: "Criatividade",
          mainTitulo: "Mercado Saturado",
          subtitle: "Compreendimento do Mercado",
          content: "O mercado audiovisual muitas vezes se mostra saturado, especialmente por limitações criativas. Desenvolvemos processos que priorizam a originalidade, promovendo soluções inovadoras que se destacam."
        },
        {
          title: "Criatividade",
          mainTitulo: "Liberdade Artística",
          subtitle: "Valores Criativos",
          content: "A liberdade artística é a base para projetos verdadeiramente autênticos e disruptivos. Valorizamos ideias ousadas e investimos em profissionais com visões únicas e fora do convencional."
        },
        {
          title: "Criatividade",
          mainTitulo: "Adaptação Econômica",
          subtitle: "Estrutura econômica dinâmica",
          content: "Estruturas altamente flexíveis que se adaptam a diferentes faixas orçamentárias de produções menores a médias. Trabalhamos com métodos criativos que revelam novas possibilidades e perspectivas pouco exploradas."
        }
      ]
    }
  }
}) => {
  const [activeTab, setActiveTab] = useState('experiencia');
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(1);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + 3) % 3);
  };

  const getCardPosition = (index) => {
    if (index === currentIndex) return 'center';
    if (index === (currentIndex + 1) % 3) return 'right';
    return 'left';
  };

  return (
    <section id="insight" name="insight" className={styles.section}> 
      <div className={styles.primeiroContudo}>
        <h4>{titulo}</h4>
        <h1>{tituloPrincipal}</h1>
        <p>{descricao}</p>
      </div>

      <div className={styles.segundoContudo}>
        <div className={styles.tabButtons}>
          {Object.entries(tabs).map(([tabId, { nome }]) => (
            <button 
              key={tabId}
              className={`${styles.tabButton} ${activeTab === tabId ? styles.activeTab : ''}`}
              onClick={() => handleTabChange(tabId)}
            >
              {nome}
            </button>
          ))}
        </div>

        <div className={styles.cardsContainer}>
          {[0, 1, 2].map((index) => {
            const position = getCardPosition(index);
            const card = tabs[activeTab].cards[index];
            return (
              <div 
                key={index}
                className={`${styles.card} ${styles[position + 'Card']}`}
              >
                <span className={styles.cardTitle}>{card.title}</span>
                <h3 className={styles.cardMainTitle}>{card.mainTitulo}</h3>
                <div className={styles.cardUnderline}></div>
                <span className={styles.cardSubtitle}>{card.subtitle}</span>
                <p className={styles.cardContent}>{card.content}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.navigationWrapper}>
          <div className={styles.navigationControls}>
            <button onClick={handlePrev} className={styles.navButton}>&lt;</button>
            <button onClick={handleNext} className={styles.navButton}>&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightPos;