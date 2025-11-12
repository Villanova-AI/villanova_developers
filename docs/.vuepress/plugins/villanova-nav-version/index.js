const { path } = require('@vuepress/shared-utils')

module.exports = {
    name: 'villanova-nav-version',
    enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
}