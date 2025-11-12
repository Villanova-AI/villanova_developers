module.exports = {
    links: function (section, path) {
        return [
            {
                text: section,
                items: [
                    { text: 'Villanova 1.0', link: '/villanova10' + path },
                    { text: 'Villanova 0.9', link: '/villanova09' + path },
                    
                ]
            }
        ]
    }
}
