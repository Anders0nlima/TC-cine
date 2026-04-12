/**
 * Factory for Insight section data.
 * @param {Function} t - Translation function from useLanguage hook.
 * @returns {Object} Structured data for the Insight component.
 */
export const getInsightData = (t) => ({
  titulo: t("insightPos.title"),
  tituloPrincipal: t("insightPos.mainTitle"),
  descricao: t("insightPos.description"),
  tabs: {
    experiencia: {
      nome: t("insightPos.bottonExp"),
      cards: [
        {
          title: t("insightPos.titleExpU"),
          mainTitulo: t("insightPos.mainTituloExpU"),
          subtitle: t("insightPos.subTitleExpU"),
          content: t("insightPos.contentExpU")
        },
        {
          title: t("insightPos.titleExpD"),
          mainTitulo: t("insightPos.mainTituloExpD"),
          subtitle: t("insightPos.subTitleExpD"),
          content: t("insightPos.contentExpD")
        },
        {
          title: t("insightPos.titleExpT"),
          mainTitulo: t("insightPos.mainTituloExpT"),
          subtitle: t("insightPos.subTitleExpT"),
          content: t("insightPos.contentExpT")
        }
      ]
    },
    otimizacao: {
      nome: t("insightPos.bottonOtm"),
      cards: [
        {
          title: t("insightPos.titleOtmU"),
          mainTitulo: t("insightPos.mainTituloOtmU"),
          subtitle: t("insightPos.subTitleOtmU"),
          content: t("insightPos.contentOtmU")
        },
        {
          title: t("insightPos.titleOtmD"),
          mainTitulo: t("insightPos.mainTituloOtmD"),
          subtitle: t("insightPos.subTitleOtmD"),
          content: t("insightPos.contentOtmD")
        },
        {
          title: t("insightPos.titleOtmT"),
          mainTitulo: t("insightPos.mainTituloOtmT"),
          subtitle: t("insightPos.subTitleOtmT"),
          content: t("insightPos.contentOtmT")
        }
      ]
    },
    organizacao: {
      nome: t("insightPos.bottonOrg"),
      cards: [
        {
          title: t("insightPos.titleOrgU"),
          mainTitulo: t("insightPos.mainTituloOrgU"),
          subtitle: t("insightPos.subTitleOrgU"),
          content: t("insightPos.contentOrgU")
        },
        {
          title: t("insightPos.titleOrgD"),
          mainTitulo: t("insightPos.mainTituloOrgD"),
          subtitle: t("insightPos.subTitleOrgD"),
          content: t("insightPos.contentOrgD")
        },
        {
          title: t("insightPos.titleOrgT"),
          mainTitulo: t("insightPos.mainTituloOrgT"),
          subtitle: t("insightPos.subTitleOrgT"),
          content: t("insightPos.contentOrgT")
        }
      ]
    }
  }
});
