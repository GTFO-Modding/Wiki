const path = require('path')

/**
 * Creates a Sidebar
 * @param {string} title Name of the Sidebar
 * @param {bool} collapsable  Is the Sidebar collapsable?
 * @param  {...string} children Sidebars children
 */
function createSideBar(title, collapsable, ...children) {
    return [{
        title,
        collapsable,
        children
    }]
}

module.exports = {
    head: [
        ["link", {
            rel: "icon",
            href: "./logo.png"
        }],
        ['meta', {
            name: 'theme-color',
            content: '#2196f3'
        }]
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

        // logo: "./logo.png",
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
                nav: [{
                        text: "Home",
                        ariaLabel: "Home",
                        link: "/"
                    },
                    {
                        text: "Documentation",
                        ariaLabel: "Documentation",
                        items: [
                            {
                                text: "Getting Started",
                                link: "/docs/beginners-guide/getting-setup/"
                            },
                            {
                                text: "Developers",
                                link: "/docs/developers/modding-rundowns/"
                            }
                        ],
                    },
                    {
                        text: "Discord",
                        ariaLabel: "Discord",
                        link: "https://discord.com/invite/rRMPtv4FAh"
                    }
                ],
                sidebar: {
                    "/docs/": [{
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
                                    sidebarDepth: -1,
                                    children: [{
                                            title: "Shared",
                                            collapsable: true,
                                            sidebarDepth: -1,
                                            children: [
                                                "/docs/developers/datablocks/shared/model-data",
                                                "/docs/developers/datablocks/shared/linked-slave-model-data",
                                                "/docs/developers/datablocks/shared/min-max-value",
                                                "/docs/developers/datablocks/shared/health-data"
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
            pageChunkName: ({
                key
            }) => `page${key.slice(1)}`,
            layoutChunkName: ({
                componentName
            }) => `layout-${componentName}`,
        }],
        // Still need to configure this! https://github.com/lorisleiva/vuepress-plugin-seo
        ["seo", {

        }]
        ["sitemap", {
            hostname: "https://mtfo.wiki"
        }]
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@images': path.resolve(__dirname, '../.assets/images'),
            },
        },
    },
}