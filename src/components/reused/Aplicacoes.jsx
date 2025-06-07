import React, { useState } from 'react';
import styles from "../../styles/componentsStyles/reusedStyles/Aplicacoes.module.css"
import imagemEdicao from "../../assets/productionMedia/edicao.png"
import imagemSonoridade from "../../assets/productionMedia/sonorizacao.png"
import imagemGrind from "../../assets/productionMedia/colorgrading.png"
import { BotaoGeral } from '../reused/BotaoGeral';


const Aplicacoes = ({
  titulo = "Utilitários",
  tituloPrincipal = "CONTRATE NOSSOS SERVIÇOS",
  descricao = "Confira abaixo o que mais se adapta às suas necessidades e fale com um de nossos especialistas.",
  quartoBotaoNome = null, // Alterado para null como padrão
  quartoConteudo = null,   // Alterado para null como padrão
  botaoUm = "Edição",
  botaoDois = "Color Granding",
  botaoTres = "Sonorização"
}) => {
  const [activeTab, setActiveTab] = useState('pre-producao');

  const conteudos = {
    'pre-producao': {
      titulo: "Edição Audiovisual",
      texto: " A Selo oferece diversos formatos de edição para produtos audiovisuais. Tem uma obra seja documentário, ficção, publicitário ou institucionale busca um resultado eficiente, que valorize ao máximo o seu material? Conte com a Selo.  Clique no botão abaixo para contratar os serviços ou entrar em contato com nossos especialistas.",
      imagem: imagemEdicao
    },
    'producao': {
      titulo: "Color Grading",
      texto: "Ficou interessado no poder do color grading para o seu produto audiovisual? Conte com a Selo para transformar seu conteúdo em uma verdadeira obra visual, com qualidade e estilo. Clique no botão abaixo para contratar os serviços ou entrar em contato com nossos especialistas.",
      imagem: imagemGrind
    },
    'ambos': {
      titulo: "Design Sonoro",
      texto: "Quer que seu projeto tenha o máximo de imersão e impacto no público? Os serviços de  Design Sonoro da Selo é a opção certa para você. Clique no botão abaixo para contratar ou, se ainda tiver alguma dúvida, um de nossos especialistas entrará em contato para ajudá-lo.",
      imagem: imagemSonoridade
    },
    /*'pre-producaoP':{
      titulo: "Edição Audiovisual",
      texto: " A Selo oferece diversos formatos de edição para produtos audiovisuais. Tem uma obra seja documentário, ficção, publicitário ou institucionale busca um resultado eficiente, que valorize ao máximo o seu material? Conte com a Selo.  Clique no botão abaixo para contratar os serviços ou entrar em contato com nossos especialistas.",
      imagem: preproducao
    },
    'producaoP': {
      titulo: "Edição Audiovisual",
      texto: " A Selo oferece diversos formatos de edição para produtos audiovisuais. Tem uma obra seja documentário, ficção, publicitário ou institucionale busca um resultado eficiente, que valorize ao máximo o seu material? Conte com a Selo.  Clique no botão abaixo para contratar os serviços ou entrar em contato com nossos especialistas.",
      imagem: producao
    },
    'ambosP': {
      titulo: "Edição Audiovisual",
      texto: " A Selo oferece diversos formatos de edição para produtos audiovisuais. Tem uma obra seja documentário, ficção, publicitário ou institucionale busca um resultado eficiente, que valorize ao máximo o seu material? Conte com a Selo.  Clique no botão abaixo para contratar os serviços ou entrar em contato com nossos especialistas.",
      imagem: imagemAmbos
    },*/
    ...(quartoConteudo && { 'novo-servico': quartoConteudo }) // Só adiciona se quartoConteudo existir
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="aplicacoes" name="aplicacoes" className={styles.section}> 
      <div className={styles.primeiroContudo}>
        <h4>{titulo}</h4>
        <h1>{tituloPrincipal}</h1>
        <p>{descricao}</p>
      </div>

      <div className={styles.segundoContudo}>
        <div className={styles.tabsContainer}>
          <div className={styles.tabButtons}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'pre-producao' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('pre-producao')}
            >
              {botaoUm}
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'producao' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('producao')}
            >
              {botaoDois}
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'ambos' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('ambos')}
            >
              {botaoTres}
            </button>

            {/*<button 
              className={`${styles.tabButton} ${activeTab === 'pre-producaoP' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('pre-producaoP')}
            >
              {botaoUm}
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'producaoP' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('producaoP')}
            >
              {botaoDois}
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'ambosP' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('ambosP')}
            >
              {botaoTres}
            </button>*/}
            
            {/* Só renderiza o quarto botão se quartoBotaoNome existir */}
            {quartoBotaoNome && (
              <button 
                className={`${styles.tabButton} ${activeTab === 'novo-servico' ? styles.activeTab : ''}`}
                onClick={() => handleTabChange('novo-servico')}
              >
                {quartoBotaoNome}
              </button>
            )}
          </div>
        </div>

        <div className={styles.conteudoContainer}>
          <div className={styles.imagemWrapper}>
            <img 
              src={conteudos[activeTab]?.imagem} 
              alt={conteudos[activeTab]?.titulo || ''}
              className={styles.imagemConteudo}
            />
          </div>

          <div className={styles.textoWrapper}>
            <h2 className={styles.tituloConteudo}>{conteudos[activeTab]?.titulo}</h2>
            <p className={styles.textoConteudo}>{conteudos[activeTab]?.texto}</p>
            
            <BotaoGeral
            texto="Veja Mais"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Aplicacoes;