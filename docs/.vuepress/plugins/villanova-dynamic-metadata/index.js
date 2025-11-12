// This plugin was derived from https://www.adamdehaven.com/blog/how-to-add-metadata-canonical-urls-and-structured-data-to-your-vuepress-site
const { path } = require('@vuepress/shared-utils')

module.exports = (options, ctx) => ({
    name: 'villanova-dynamic-metadata',
    extendPageData($page) {
        const frontmatter = $page.frontmatter;
        const siteConfig = ctx.siteConfig;        

        // Usa themeConfig.villanova.domain invece di themeConfig.entando.domain
        const coverUrl = frontmatter.cover
            ? siteConfig.themeConfig.villanova.domain + siteConfig.base + frontmatter.cover
            : undefined;

        const title = formatForMetaTag(frontmatter.title) ?? formatForMetaTag($page.title);
        const description = formatForMetaTag(frontmatter.summary);

        let meta_dynamicMeta = [
            // Open Graph
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: coverUrl },
            { property: 'og:type', content: 'article' },
            // Twitter
            { property: 'twitter:site', content: '@villanova' } // ← aggiorna l'handle
        ];

        // Rimuovi meta tag vuoti
        meta_dynamicMeta = meta_dynamicMeta.filter((meta) => meta.content && meta.content !== '');
        // Combina con frontmatter esistente
        meta_dynamicMeta = [...(frontmatter.meta || []), ...meta_dynamicMeta];
        // Rimuovi duplicati
        meta_dynamicMeta = getUniqueArray(meta_dynamicMeta, ['name', 'content', 'itemprop', 'property']);

        frontmatter.meta = meta_dynamicMeta;
    },
});

/**
 * Rimuove duplicati da un array di oggetti
 */
function getUniqueArray(arr, keyProps) {
    return Object.values(
        arr.reduce((uniqueMap, entry) => {
            const key = keyProps.map((k) => entry[k]).join('|');
            if (!(key in uniqueMap)) uniqueMap[key] = entry;
            return uniqueMap;
        }, {}),
    );
}

/**
 * Formatta testo per uso nei meta tag
 */
function formatForMetaTag(value) {
    if (!value) {
        return null;
    }
    return value.toString().replace(/["|'|\\]/g, '');
};
