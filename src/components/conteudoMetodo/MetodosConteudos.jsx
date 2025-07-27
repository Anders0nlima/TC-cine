import imagem1 from "../../assets/productionMedia/resultado_final.png";
import imagem3 from "../../assets/productionMedia/Estudo_dinamico.png";
import imagem4 from "../../assets/productionMedia/Tecnicas_Criativas.png";
import imagem5 from "../../assets/productionMedia/Mapas_espaciais.png";
import imagem6 from "../../assets/productionMedia/Simulacoes_tecnicas.png";
import grind1 from "../../assets/productionMedia/grind1.png";
import grind2 from "../../assets/productionMedia/grind2.png";
import grind3 from "../../assets/productionMedia/grind3.png";
import { useLanguage } from "../translationComponents/LanguageContext";

export const getConteudos = () => {
  const { t } = useLanguage();

  // Sistema de tradução segura com fallback
  const safeTranslate = (key, defaultValue = '') => {
    try {
      const translation = t(key);
      return translation || defaultValue;
    } catch (error) {
      //console.warn(`Falha na tradução para a chave: ${key}`, error);
      return defaultValue;
    }
  };

  // IDs constantes para referência interna
  const CONTENT_IDS = {
    PADRAO: {
      RESULTADO: 'resultado_final',
      ESTUDO: 'estudo_dinamico',
      TECNICAS: 'tecnicas_criativas',
      MAPA: 'mapa_espaciais',
      SIMULACOES: 'simulacoes_tecnicas'
    },
    CINEMATOGRAFIA: {
      CORRECAO: 'correcao',
      LOOK: 'look',
      COLORIZACAO: 'colorizacao'
    }
  };

  // Conteúdos base (não muda entre idiomas)
  const BASE_CONTENTS = {
    padrao: {
      [CONTENT_IDS.PADRAO.RESULTADO]: {
        titulo: t('metodosConteudosText.TitleUm'),
        texto: t('metodosConteudosText.TextUm'),
        imagem: imagem1
      },
      [CONTENT_IDS.PADRAO.ESTUDO]: {
        titulo: t('metodosConteudosText.TitleDois'),
        texto: t('metodosConteudosText.TextDois'),
        imagem: imagem3
      },
      [CONTENT_IDS.PADRAO.TECNICAS]: {
        titulo: t('metodosConteudosText.TitleTres'),
        texto: t('metodosConteudosText.TextTres'),
        imagem: imagem4
      },
      [CONTENT_IDS.PADRAO.MAPA]: {
        titulo: t('metodosConteudosText.TitleQuatro'),
        texto: t('metodosConteudosText.TextQuatro'),
        imagem: imagem5
      },
      [CONTENT_IDS.PADRAO.SIMULACOES]: {
        titulo: t('metodosConteudosText.TitleCinco'),
        texto: t('metodosConteudosText.TextCinco'),
        imagem: imagem6
      }
    },
    cinematografia: {
      [CONTENT_IDS.CINEMATOGRAFIA.CORRECAO]: {
        titulo: t('metodosConteudosTextPp.TitleUm'),
        texto: t('metodosConteudosTextPp.TextUm'),
        imagem: grind1
      },
      [CONTENT_IDS.CINEMATOGRAFIA.LOOK]: {
        titulo: t('metodosConteudosTextPp.TitleDois'),
        texto: t('metodosConteudosTextPp.TextDois'),
        imagem: grind2
      },
      [CONTENT_IDS.CINEMATOGRAFIA.COLORIZACAO]: {
        titulo: t('metodosConteudosTextPp.TitleTres'),
        texto: t('metodosConteudosTextPp.TextTres'),
        imagem: grind3
      }
    }
  };

  // Textos dos botões (traduzíveis)
  const BUTTON_TEXTS = {
    padrao: {
      [CONTENT_IDS.PADRAO.RESULTADO]: safeTranslate('metodosConteudos.botaoUm', 'Resultado final'),
      [CONTENT_IDS.PADRAO.ESTUDO]: safeTranslate('metodosConteudos.botaoDois', 'Estudo dinâmico'),
      [CONTENT_IDS.PADRAO.TECNICAS]: safeTranslate('metodosConteudos.botaoTres','Técnicas criativas'),
      [CONTENT_IDS.PADRAO.MAPA]: safeTranslate('metodosConteudos.botaoQuatro','Mapa espaciais'),
      [CONTENT_IDS.PADRAO.SIMULACOES]: safeTranslate('metodosConteudos.botaoCinco','Simulações técnicas')
    },
    cinematografia: {
      [CONTENT_IDS.CINEMATOGRAFIA.CORRECAO]: safeTranslate('metodosConteudosPp.botaoUm', 'Correção'),
      [CONTENT_IDS.CINEMATOGRAFIA.LOOK]: safeTranslate('metodosConteudosPp.botaoDois', 'Look'),
      [CONTENT_IDS.CINEMATOGRAFIA.COLORIZACAO]: safeTranslate('metodosConteudosPp.botaoTres', 'Colorização')
    }
  };

  // Construir a estrutura final
  const buildContentStructure = () => {
    const result = {};
    
    for (const [variant, contents] of Object.entries(BASE_CONTENTS)) {
      const translatedContents = {};
      const buttons = [];
      
      // Mapear cada conteúdo para sua versão traduzida
      for (const [contentId, content] of Object.entries(contents)) {
        const buttonText = BUTTON_TEXTS[variant][contentId];
        translatedContents[buttonText] = content;
        buttons.push(buttonText);
      }
      
      result[variant] = {
        botoes: buttons,
        dados: translatedContents
      };
    }
    
    return result;
  };

  return buildContentStructure();
};