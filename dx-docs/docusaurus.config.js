module.exports = {
    title: 'Divblox Documentation',
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
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    href: 'https://github.com/divblox',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            // links: [
            //     {
            //         title: 'Docs',
            //         items: [
            //             {
            //                 label: 'Style Guide',
            //                 to: 'docs/',
            //             },
            //             {
            //                 label: 'Second Doc',
            //                 to: 'docs/doc2/',
            //             },
            //         ],
            //     },
            //     {
            //         title: 'Community',
            //         items: [
            //             {
            //                 label: 'Stack Overflow',
            //                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //             },
            //             {
            //                 label: 'Discord',
            //                 href: 'https://discordapp.com/invite/docusaurus',
            //             },
            //             {
            //                 label: 'Twitter',
            //                 href: 'https://twitter.com/docusaurus',
            //             },
            //         ],
            //     },
            //     {
            //         title: 'More',
            //         items: [
            //             {
            //                 label: 'Blog',
            //                 to: 'blog',
            //             },
            //             {
            //                 label: 'GitHub',
            //                 href: 'https://github.com/facebook/docusaurus',
            //             },
            //         ],
            //     },
            // ],
            copyright: `Copyright © ${new Date().getFullYear()} Divblox by StratuSolve`,
        },
        announcementBar: {
            id: 'covid_alert', // Any value that will identify this message.
            content:
                'To learn more about our Covid-19 assistance fund, click <a target="_blank" rel="noopener noreferrer" href="#">here</a>',
            backgroundColor: '#fafbfc', // Defaults to `#fff`.
            textColor: '#091E42', // Defaults to `#000`.
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    homePageId: 'doc1',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/master/website/',
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
    plugins: [],
};
