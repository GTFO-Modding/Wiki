const path = require("path")

module.exports = {
    title: "MTFO Wiki",
    description: "An Unofficial GTFO Modding Group",
    domain: "wiki.mtfo.dev",
    themeColor: "#121212",
    imageWidth: 256,
    imageHeight: 256,

    head: [
        ["link", { rel: "icon", href: "/favicon.png" }]
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
        extendMarkdown: md => {
            md.use(require("markdown-it-task-lists"));
        }
    },

    theme: "yuu",
    themeConfig: {
        yuu: {
            defaultColorTheme: "blue",
            disableThemeIgnore: true,
            labels: {
                darkTheme: "Dark theme",
                ignoreThemes: "Ignore themes"
            }
        },

        repo: "GTFO-Modding/Wiki",
        docsDir: "wiki",
        editLinks: true,

        // logo: "./logo.png",
        smoothScroll: true,
        displayAllHeaders: true,
        activeHeaderLinks: true,

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
                    // {
                    //     text: "Beginners Guide",
                    //     ariaLabel: "Getting Setup",
                    //     link: "/guides/beginners/setting-up-bepinex"
                    // },
                    {
                        text: "Guides",
                        ariaLabel: "Guides",
                        items: [
                            {
                                text: "Beginners Guide",
                                link: "/beginners-guide/"
                            },
                            {
                                text: "Creating Rundowns",
                                link: "/creating-rundowns/"
                            },
                            {
                                text: "Creating Plugins",
                                link: "/creating-plugins/"
                            }
                        ]
                    },
                    // {
                    //     text: "Thunderstore",
                    //     ariaLabel: "Thunderstore",
                    //     link: "https://gtfo.thunderstore.io/"
                    // },
                    {
                        text: "Discord",
                        ariaLabel: "Discord",
                        link: "https://discord.com/invite/rRMPtv4FAh"
                    }
                ],
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
        // "vuepress-plugin-smooth-scroll",
        ["@vuepress/last-updated", {
            transformer: timestamp => require('dateformat')(timestamp, 'yyyy/mm/dd hh:MM:ss TT')
        }],
        // ['@vuepress/search', {
        //     searchMaxSuggestions: 10
        // }],
        ['@vuepress/medium-zoom', {
            options: {
                margin: 8,
                background: '#21253073',
            },
        }],
        "@vuepress/nprogress",
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
        ["@vuepress/pwa", {
            serviceWorker: true,
            updatePopup: false
        }],
        ["sitemap", {
            hostname: "https://wiki.mtfo.dev",
            outFile: "sitemap.xml"
        }],
        ["seo", {
            // siteTitle: (_, $site) => $site.title,
            // title: $page => $page.title,
            // description: $page => $page.frontmatter.description,
            // author: (_, $site) => $site.themeConfig.author,
            // tags: $page => $page.frontmatter.tags,
            // twitterCard: _ => false,
            // twitterTitle: _ => false,
            // twitterUrl: _ => false,
            // type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
            // url: (_, $site, path) => ($site.themeConfig.domain || "") + path,
            image: ($page, $site) => $page.frontmatter.image ? (($site.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image) : "/favicon.png",
            // publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
            // modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
            customMeta: (add, context) => {
                const { $site, $page } = context;

                add("theme-color", $page.frontmatter.themeColor || ($site.themeColor || "#121212"), "property");

                add("og:image:width", $page.frontmatter.imageWidth || $site.imageWidth || 256, "property");
                add("og:image:height", $page.frontmatter.imageHeight || $site.imageHeight || 256, "property");
            }
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
