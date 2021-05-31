module.exports = {
    packages: 'div.contentContainer > table[class="overviewSummary"]>caption>span:nth-child(1)',
    allPackages: 'div.contentContainer > table[class="overviewSummary"] > tbody:nth-child(3) > tr > th',
    randomPackage: function (random) {
        return `div.contentContainer > table[class="overviewSummary"] > tbody:nth-child(3) > tr:nth-child(${random}) > th`
    },
    selectedPackage: 'h1.title',
    allClasses: function (n) {
        return `li.blockList:nth-child(${n}) > table > tbody:nth-child(3)> tr > th`
    },
    randomClass: function (random, n) {
        return `li.blockList:nth-child(${n}) > table > tbody:nth-child(3)> tr:nth-child(${random}) > th > a`
    },
    selectedClass: 'h2.title'
};