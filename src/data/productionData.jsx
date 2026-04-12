/**
 * Factory for Production page data.
 * @param {Function} t - Translation function.
 * @param {Object} assets - Object containing required media assets.
 * @returns {Object} Structured data for the Production sections.
 */
export const getProductionData = (t, assets) => ({
    colaboradores: {
        titulo: t("colaboradores.titulo"),
        tituloPrincipal: t("colaboradores.tituloPrincipal"),
        descricao: t("colaboradores.descricao"),
        botaoUm: t("colaboradores.botaoUm"),
        botaoDois: t("colaboradores.botaoDois"),
        botaoTres: t("colaboradores.botaoTres"),
        itensAccordion: {
            experiencia: [
                { title: t("colaboradores.experienciaTitle1"), content: t("colaboradores.experienciaContent2") },
                { title: t("colaboradores.experienciaTitle3"), content: t("colaboradores.experienciaContent4") },
                { title: t("colaboradores.experienciaTitle5"), content: t("colaboradores.experienciaContent6") }
            ],
            otimizacao: [
                { title: t("colaboradores.otimizacaoTitle1"), content: t("colaboradores.otimizacaoContent2") },
                { title: t("colaboradores.otimizacaoTitle3"), content: t("colaboradores.otimizacaoContent4") },
                { title: t("colaboradores.otimizacaoTitle5"), content: t("colaboradores.otimizacaoContent6") }
            ],
            organizacao: [
                { title: t("colaboradores.organizacaoTitle1"), content: t("colaboradores.organizacaoContent2") },
                { title: t("colaboradores.organizacaoTitle3"), content: t("colaboradores.organizacaoContent4") },
                { title: t("colaboradores.organizacaoTitle5"), content: t("colaboradores.organizacaoContent6") }
            ]
        },
        filmeCartaz: assets.cartazfilme2
    },
    metodos: {
        titulo: t("metodos.titulo"),
        tituloPrincipal: t("metodos.tituloPrincipal"),
        descricao: t("metodos.descricao"),
        videoExp: assets.videoBase1,
        Destaque: t("metodos.Destaque"),
        subDescricao: t("metodos.subDescricao"),
        containerTitulo: t("metodos.containerTitulo"),
        containerDescricao: t("metodos.containerDescricao"),
        watchButtonText: t("metodos.watchButton")
    },
    aplicacoes: {
        titulo: t("aplicacoesProduction.titulo"),
        tituloPrincipal: t("aplicacoesProduction.tituloPrincipal"),
        descricao: t("aplicacoesProduction.descricao"),
        botaoUm: t("aplicacoesProduction.botaoUm"),
        botaoDois: t("aplicacoesProduction.botaoDois"),
        botaoTres: t("aplicacoesProduction.botaoTres")
    }
});
