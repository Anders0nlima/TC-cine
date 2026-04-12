import React from 'react';
import Colaboradores from "../components/reused/Colaboradores";
import Metodos from "../components/reused/Metodos";
import BeforeAfterSlider from "../components/pos-production/BeforeAfterSlider";
import DesignSonoro from "../components/pos-production/DesignSonoro";
import AplicacoesPp from "../components/reused/AplicaçãoPp";

/**
 * Factory for Solutions dashboard configuration.
 * @param {Function} t - Translation function.
 * @param {Object} assets - Object containing required media assets.
 * @returns {Object} Dashboard configuration mapping categories to components and props.
 */
export const getSolutionsConfig = (t, assets) => ({
    'visao-geral': {
        label: t('navbarrouter.visaoGeral'),
        sidebarTitle: 'Categorias de Produção',
        subItems: [
            { id: 'experiencia', label: t('colaboradores.botaoUm') },
            { id: 'otimizacao', label: t('colaboradores.botaoDois') },
            { id: 'organizacao', label: t('colaboradores.botaoTres') }
        ],
        component: Colaboradores,
        props: {
            titulo: t("colaboradores.titulo"),
            tituloPrincipal: t("colaboradores.tituloPrincipal"),
            descricao: t("colaboradores.descricao"),
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
            filmeCartaz: assets.cartazfilme2, 
            botaoUm: t("colaboradores.botaoUm"),
            botaoDois: t("colaboradores.botaoDois"),
            botaoTres: t("colaboradores.botaoTres")
        }
    },
    'metodos': {
        label: t('navbarrouter.metodos'),
        sidebarTitle: 'Estrutura de Métodos',
        subItems: [
            { id: 0, label: 'Resultado Final' },
            { id: 1, label: 'Estudo Dinâmico' },
            { id: 2, label: 'Técnicas Criativas' },
            { id: 3, label: 'Mapas Espaciais' },
            { id: 4, label: 'Simulações' }
        ],
        component: Metodos,
        props: {
            variant: 'padrao',
            titulo: t("metodos.titulo"),
            tituloPrincipal: t("metodos.tituloPrincipal"),
            descricao: t("metodos.descricao"),
            videoExp: assets.imgResultado, 
            Destaque: t("metodos.Destaque"),
            subDescricao: t("metodos.subDescricao"),
            customImages: {
                0: assets.imgResultado, 
                1: assets.imgEstudo,
                2: assets.imgTecnicas,
                3: assets.imgMapas,
                4: assets.imgSimulacoes
            }
        }
    },
    'color-grading': {
        label: t('navbarrouterteste.ColorGrading'),
        sidebarTitle: 'Workflow de Cor',
        subItems: [
            { id: 'fluxo', label: 'Fluxo de Cor' },
            { id: 'comparacao', label: 'Comparação' }
        ],
        component: ({ activeTabOverride, ...props }) => {
            if (activeTabOverride === 'comparacao') {
                return (
                    <BeforeAfterSlider 
                        customPairs={[
                            { id: 101, before: assets.img131, after: assets.img129, thumbnail: assets.img129 },
                            { id: 102, before: assets.img132, after: assets.img134, thumbnail: assets.img134 },
                            { id: 103, before: assets.img125, after: assets.img145, thumbnail: assets.img145 }
                        ]} 
                    />
                );
            }
            return (
                <Metodos 
                    {...props}
                    variant="cinematografia"
                    titulo={t("metodosPp.titulo")}
                    tituloPrincipal="ECOSSISTEMA DE COR"
                    descricao="Integramos as etapas de Correção Primária, Look & Estética e Finalização em um único workflow coeso para garantir a máxima integridade visual."
                    activeTabOverride={2}
                    customConteudos={{
                        'Fluxo de Cor': {
                            titulo: "Fluxo Cinematográfico Unificado",
                            texto: "Nossa metodologia de colorização transcende a simples correção de cor. Unimos o equilíbrio técnico (Correção Primária) com a alma narrativa (Look & Estética) e o refinamento de entrega (Finalização). O resultado é uma imagem com densidade cinematográfica, texturas ricas e consistência absoluta entre todos os planos.",
                            imagem: assets.imgColorApp
                        }
                    }}
                    customBotoes={['Fluxo de Cor']}
                />
            );
        },
        props: { t }
    },
    'design-sonoro': {
        label: t('navbarrouterteste.DesighSonoro'),
        sidebarTitle: 'Arquitetura de Som',
        subItems: [
            { id: 0, label: 'Som 3D Imersivo' },
            { id: 1, label: 'Ambientação 5.1' },
            { id: 2, label: 'Estúdio Foley' }
        ],
        component: DesignSonoro,
        props: {
            botaoDestaque: t("designSonoro.botao"),
            titulo: t("designSonoro.titulo"),
            tituloPrincipal: t("designSonoro.tituloPrincipal"),
            descricao: t("designSonoro.descricao"),
            cartazes: [
                { cartazImagem: assets.imgSonorizacao, cartazTitulo: t("designSonoro.cartazTituloUm"), cartazDescricao: t("designSonoro.cartazDescricaoUm") },
                { cartazImagem: assets.imgSonorizacao, cartazTitulo: t("designSonoro.cartazTituloUm"), cartazDescricao: t("designSonoro.cartazDescricaoUm") },
                { cartazImagem: assets.imgSonorizacao, cartazTitulo: t("designSonoro.cartazTituloUm"), cartazDescricao: t("designSonoro.cartazDescricaoUm") }
            ],
            itensAccordion: [
                { title: t("designSonoro.accordionTitleUm"), content: t("designSonoro.accodionContentUm") },
                { title: t("designSonoro.accordionTitleDois"), content: t("designSonoro.accodionContentDois") },
                { title: t("designSonoro.accordionTitleTres"), content: t("designSonoro.accodionContentTres") }
            ],
            filmeCartaz: assets.cartazfilmePos 
        }
    },
    'aplicacao': {
        label: t('navbarrouterteste.Aplicacao'),
        sidebarTitle: 'Módulos de Serviço',
        subItems: [
            { id: 'pre-producao', label: t("aplicacoesProduction.botaoUmPp") },
            { id: 'producao', label: t("aplicacoesProduction.botaoDoisPp") },
            { id: 'ambos', label: t("aplicacoesProduction.botaoTresPp") }
        ],
        component: AplicacoesPp,
        props: {
            titulo: t("aplicacoesProduction.titulo"),
            tituloPrincipal: t("aplicacoesProduction.tituloPrincipal"),
            descricao: t("aplicacoesProduction.descricao"),
            botaoUmPp: t("aplicacoesProduction.botaoUmPp"),
            botaoDoisPp: t("aplicacoesProduction.botaoDoisPp"),
            botaoTresPp: t("aplicacoesProduction.botaoTresPp"),
            quartoBotaoNome: t("aplicacoesProduction.botaoQuatroNome"),
            customImages: {
                'pre-producao': assets.imgEdicao,
                'producao': assets.imgColorApp,
                'ambos': assets.imgSonorizacao
            }
        }
    }
});
