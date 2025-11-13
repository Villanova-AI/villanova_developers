const villanova10  = require('./villanova10.js');
const villanova09  = require('./villanova09.js');  
const navLinks = require('./navLinks.js');

module.exports = {
	title: 'Villanova Developers',
	port: 8080,
	description: 'Villanova Developers Docs',
	extraWatchFiles: [
		'villanova10.js',
		'villanova09.js'
		
	],
	base: '/villanova_developers/',
	head: [
		['link', { rel: 'icon', href: 'theme/favicon.png' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
		['script', { src: 'theme/javascript/hotjar.js' }],
		// Global site tag (gtag.js) - Google Analytics GA4
		//['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-1SVVHY8B1N' }],
		//['script', {}, [
		//  "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-1SVVHY8B1N');",
		//]],
		// ZoomInfo WebSights embed code
		['script', { src: 'theme/javascript/zoominfo.js' }]
	],
	plugins: [
		// Enable link checking
		'check-md',
		// Enable redirects configured via frontmatter
		'redirect-frontmatter',
		// Custom plugin to manage version in top nav
		require('./plugins/villanova-nav-version'),
		// Custom plugin to add metadata using frontmatter
		require('./plugins/villanova-dynamic-metadata'),
		// Add zoom option to images
		'vuepress-plugin-medium-zoom',
		// Add plugin to automatically enable copying code blocks
		'vuepress-plugin-code-copy', {
			align: 'top',
			selector: 'div[class*="language-"] pre'
		},
		// Replaced default search with full-text FlexSearch https://github.com/nextapps-de/flexsearch
//		'flexsearch', {
//			searchResultLength: 30
//		},
		// https://vuepress.vuejs.org/plugin/official/plugin-blog.html
		// https://github.com/vuepress/vuepress-plugin-blog/tree/master/docs/config
		['@vuepress/blog',  {
			directories: [
				{
					// Unique ID of current classification
					id: 'post',
					// Target directory
					dirname: '_posts',
					// Path of the `entry page` (or `list page`)
					path: '/blog/',
					itemPermalink: '/blog/:year/:month/:day/:slug',
					// Layouts
					layout: 'IndexPost',
					itemLayout: 'Post',
					pagination: {
						lengthPerPage: 6,
						layout: 'IndexPost'
					}
				},
			],
			frontmatters: [
				{
					id: "tag",
					keys: ['tags'],
					path: '/blog/tag/',
					layout: 'FrontmatterKey',
					scopeLayout: 'IndexPost',
					pagination: {
						lengthPerPage: 6,
						layout: 'IndexPost'
					}
				},
			],
		}],
	],
	themeConfig: {
		logo: '/theme/Entando_Logo_Dark_Blue.svg',
		repo: 'entando/entando-docs',
		editLinks: true,
		docsDir: 'vuepress/docs',
		docsBranch: 'main',
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last Updated',
		nav: [
			{
				text: 'Developers',
				type: 'links',
				items: [
					{ text: 'Home', link: '/' },
					{ text: 'Docs', link: '/villanova10/docs/' },
					{ text: 'Tutorials', link: '/villanova09/tutorials/' },
					{ text: 'Forum', link: 'https://forum.villanova.ai/' },
					//{ text: 'Slack', link: 'https://entandocommunity.slack.com/' },
				]
			},
		],
		landingSecondaryNav: [
			{ text: 'Docs', link: '/villanova09/docs/', target: '_self' },
			{ text: 'Tutorials', link: '/villanova09/tutorials/', target: '_self' },
			{ text: 'Forum', link: 'https://forum.villanova.ai/' },
		],
		
		secondaryNav: [
			{ text: 'Docs', link: 'javascript:Villanova.versionedLink("/villanova09/docs");', target: '_self' },
			{ text: 'Tutorials', link: 'javascript:Villanova.versionedLink("/villanova09/tutorials");', target: '_self' },
			{ text: 'Forum', link: 'https://forum.villanova.ai/' },
		],
		
		
		serviceWorker: {
			updatePopup: true
		},
		sidebar: {
			'/villanova10/docs/': villanova10.docsSidebar('/villanova10/'),
			'/villanova10/tutorials/': villanova10.tutorialsSidebar('/villanova10/'),
			'/villanova09/docs/': villanova09.docsSidebar('/villanova09/'),
			'/villanova09/tutorials/': villanova09.tutorialsSidebar('/villanova09/'),
			
		},
		//		// Custom theme config
		//		villanova: { 
		//  domain: "https://villanova.ai/",
		//  fixpack: {
		//    "villanova10": "Villanova 1.0.0",
		//    "villanova09": "Villanova 0.9.0",
		//  },
		//  logoLink: "https://villanova.ai/",
		//  section: "Docs",
		//  version: "Villanova 1.0",
		//  docs: navLinks.links('Docs', '/docs/'),
		//  tutorials: navLinks.links('Tutorials', '/tutorials/'),
		//},
		entando: {
			domain: "https://villanova.ai/",
			fixpack: {
				"villanova10": "Villanova 1.0.0",
				"villanova09": "Villanova 0.9.0",
				
			},
			logoLink: "https://villanova.ai/",
			section: "Docs",
			version: "Villanova 1.0",
			docs: navLinks.links('Docs', '/docs/'),
			tutorials: navLinks.links('Tutorials', '/tutorials/'),
		},
	}
}
