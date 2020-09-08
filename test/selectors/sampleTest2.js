module.exports = {
    packages: 'div.indexContainer > ul[title="Packages"]',
    allPackages: 'div.indexContainer > ul[title="Packages"] > li',
    randomPackage: function (random) {
        return `div.indexContainer > ul[title="Packages"] > li:nth-child(${random})`
    },
    selectedPackage: 'h1.bar',
    allClasses: 'ul[title="Classes"] > li',
    randomClass: function (random) {
        return `ul[title="Classes"] > li:nth-child(${random})`
    },
    selectedClass: 'h2.title'
};