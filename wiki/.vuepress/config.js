
/**
 * Creates a Sidebar
 * @param {string} title Name of the Sidebar
 * @param {bool} collapsable  Is the Sidebar collapsable?
 * @param  {...string} children Sidebars children
 */
function createSideBar(title, collapsable , ...children) {
    return [{
        title,
        collapsable,
        children
    }]
}

module.exports = {
    head: [
        ["link", { rel: "icon", href: "/images/logo.png" }],
        ['meta', { name: 'theme-color', content: '#2196f3' }]
    ],
    locales: {
        "/": {
            lang: "en-US",
            title: "MTFO Wiki",
        },
        // "/fr/": {
        //     lang: "fr-FR",
        //     title: "MTFO Wiki"
        // },
        // "/de/": {
        //     lang: "de-DE",
        //     title: "MTFO Wiki"
        // }
    },
    markdown: {
        extendMarkdown: md => md.use(require('markdown-it-task-lists')),
        lineNumbers: false,
        // toc: { 
        //     includeLevel: [1, 2, 3]    
        // }
    },
    theme: "yuu",
    themeConfig: {
        yuu: {
            defaultColorTheme: 'blue',
            disableThemeIgnore: true,
            labels: {
				darkTheme: "Dark theme",
				ignoreThemes: "Ignore themes"
			}
        },

        repo: "GTFO-Modding/Wiki",
        docsDir: "docs",
        editLinks: true,

        logo: "/images/logo.png",
        smoothScroll: true,
        displayAllHeaders: false,
        activeHeaderLinks: false,

        locales: {
            "/": {
                selectText: "Language",
                label: "English",
                ariaLabel: "Language",
                editLinkText: "Help improve this page!",
                lastUpdated: "Last Updated",
                nav: [
                    { text: "Home", link: "/" },
                    { text: "Docs", link: "/docs/" },
                    { text: "Discord", link: "https://discord.com/invite/rRMPtv4FAh" }
                ],
                sidebar: {
                    "/docs/": [
                        {
                            title: "Beginners Guide",
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                "beginners-guide/getting-setup",
                                "beginners-guide/installing-rundowns",
                            ]
                        },
                        {
                            title: "Developers",
                            collapsable: true,
                            children: [
                                "/docs/developers/modding-rundowns",
                                "/docs/developers/creating-plugins",
                                {
                                    title: "Datablocks",
                                    collapsable: true,
                                    initialOpenGroupIndex: -1,
                                    children: [
                                        {
                                            title: "Shared",
                                            collapsable: true,

                                            children: [
                                                "/docs/developers/datablocks/shared/model-data",
                                                "/docs/developers/datablocks/shared/linked-slave-model-data"
                                            ]
                                        },
                                        "/docs/developers/datablocks/level-layout",
                                        "/docs/developers/datablocks/player-offline-gear",
                                        "/docs/developers/datablocks/light-settings",
                                        "/docs/developers/datablocks/enemy",
                                        "/docs/developers/datablocks/enemy-detection",
                                        "/docs/developers/datablocks/enemy-balancing",
                                        "/docs/developers/datablocks/enemy-movement",
                                        "/docs/developers/datablocks/enemy-behavior",
                                        "/docs/developers/datablocks/enemy-population",
                                        "/docs/developers/datablocks/rundown"
                                    ]
                                }
                            ]
                        }
                    ],
                    "/": [
                        ""
                    ]
                }
            },
            "/fr/": {
                selectText: "Langue",
                label: "Français",
                ariaLabel: "Langue",
                editLinkText: "Aidez à améliorer cette page !",
                lastUpdated: "Dernière mise à jour",
                nav: [

                ],
                sidebar: {

                }
            },
            "/de/": {
                selectText: "",
                label: "",
                ariaLabel: "",
                editLinkText: "",
                lastUpdated: "",
                nav: [

                ],
                sidebar: {

                }
            }
        }
    },
    plugins: [
        "vuepress-plugin-smooth-scroll",
        "@vuepress/nprogress",
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ["@vuepress/last-updated", {
            transformer: timestamp => require('dateformat')(timestamp, 'yyyy/mm/dd hh:MM:ss TT')
        }],
        ['@vuepress/medium-zoom', {
            options: {
                margin: 8,
                background: '#21253073',
            },
        }],
        ["container", {
            type: "feature",
            before: info => `<div class="feature"><h2>${info}</h2>`,
            after: "</div>",
        }],
        ['container', {
            type: "param",
            before: `<div class="block">`,
            after: "</div>",
        }],
        ["named-chunks", {
            pageChunkName: ({ key }) => `page${key.slice(1)}`,
            layoutChunkName: ({ componentName }) => `layout-${componentName}`,
        }],
        ["vuepress-plugin-redirect", {
            locales: true,
            redirectors: [
                {
                    base: "/docs",
                    stroage: true,
                    alternative: "../docs/beginners-guide/getting-setup"
                },
                {
                    base: "/docs/beginners-guide",
                    storage: true,
                    alternative: "getting-setup/"
                },
                {
                    base: "/beginners-guide",
                    stroage: true,
                    alternative: "../docs/beginners-guide/getting-setup/"
                },
                {
                    base: "/docs/developers",
                    storage: true,
                    alternative: "modding-rundowns/"
                },
                {
                    base: "/developers",
                    stroage: true,
                    alternative: "../docs/developers/modding-rundowns/"
                },
                {
                    base: "/docs/developers/datablocks",
                    storage: true,
                    alternative: "level-layout"
                },
                {
                    base: "/docs/datablocks",
                    storage: true,
                    alternative: "../developers/datablocks/level-layout/"
                },
                {
                    base: "/datablocks",
                    storage: true,
                    alternative: "../docs/developers/datablocks/level-layout/"
                },
                {
                    base: "/installing-rundowns",
                    storage: true,
                    alternative: "../docs/beginners-guide/installing-rundowns"
                },
            ]
        }],
        // Still need to configure this! https://github.com/lorisleiva/vuepress-plugin-seo
        ["seo", {
            
        }]
        ["sitemap", {
            hostname: "https://wiki.gtfomodding.dev/"
        }]
    ]
}