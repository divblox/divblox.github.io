const path = require('path');
module.exports = {
    title: 'Divblox',
    tagline: 'Create experiences. Not just apps.',
    url: 'https://divblox.github.io',
    baseUrl: '/',
    favicon: 'img/favicon.png', // Set to dx image
    githubHost: 'github.com',
    organizationName: 'divblox', // Usually your GitHub org/user name.
    projectName: 'divblox.github.io', // Usually your repo name.
    themes: ['@docusaurus/theme-classic'], // Default
    themeConfig: {
        navbar: {
            title: 'Divblox',
            logo: {
                alt: 'dxLogo',
                src: 'img/favicon.png',
            },
            links: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                /*{
                    to: 'blog',
                    label: 'Blog',
                    position: 'left'
                },*/
                {
                    href: 'https://github.com/divblox',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        colorMode: {
            // "light" | "dark"
            defaultMode: "light",
            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: true,
            // Should we use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode
            respectPrefersColorScheme: false,
        },
        // footer: {
        //     style: 'dark',
        //     links: [
        //         {
        //             title: 'Docs',
        //             items: [
        //                 {
        //                     label: 'Style Guide',
        //                     to: 'docs/',
        //                 },
        //                 {
        //                     label: 'Second Doc',
        //                     to: 'docs/doc2/',
        //                 },
        //             ],
        //         },
        //         {
        //             title: 'Community',
        //             items: [
        //                 {
        //                     label: 'Stack Overflow',
        //                     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //                 },
        //                 {
        //                     label: 'Discord',
        //                     href: 'https://discordapp.com/invite/docusaurus',
        //                 },
        //                 {
        //                     label: 'Twitter',
        //                     href: 'https://twitter.com/docusaurus',
        //                 },
        //             ],
        //         },
        //         {
        //             title: 'More',
        //             items: [
        //                 {
        //                     label: 'Blog',
        //                     to: 'blog',
        //                 },
        //                 {
        //                     label: 'GitHub',
        //                     href: 'https://github.com/facebook/docusaurus',
        //                 },
        //             ],
        //         },
        //     ],
        //     copyright: `Copyright © ${new Date().getFullYear()} Divblox by Stratusolve`,
        // },
        // announcementBar: {
        //     id: 'covid_alert', // Any value that will identify this message.
        //     content:
        //         'To learn more about our Covid-19 assistance fund, click <a target="_blank" rel="noopener noreferrer" href="#">here</a>',
        //     backgroundColor: '#fafbfc', // Defaults to `#fff`.
        //     textColor: '#091E42', // Defaults to `#000`.
        // },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    homePageId: 'getting-started-introduction',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: null,
                    // 'https://github.com/divblox/divblox.github.io/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        require.resolve('docusaurus-lunr-search')
    ],
    customFields: {
        dxlogo: '/img/_media/divblox-logo-1.png',
        keywords: [],
    },
};
