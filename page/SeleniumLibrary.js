const sel = require('../test/selectors/sampleTest2');
const helper = require('../utils/helper');
const { expect } = require('chai');

class SeleniumLibrary {
    async clickOnRandomPackage(page) {
        await page.waitForSelector(sel.packages, true);
        const packageCount = (await page.$$(sel.allPackages)).length;
        const random = await helper.generateRandomNumber(1, packageCount);
        let packageElement = await page.$(sel.randomPackage(random));
        global.selectedPackage = await page.evaluate(el => el.textContent, packageElement);
        await packageElement.click();
    }

    async clickOnRandomClass(page) {
        let listNum = 2;
        await page.waitForSelector(sel.selectedPackage, true);
        let element = await page.$(sel.selectedPackage);
        let selectedPackage = await page.evaluate(el => el.textContent, element);
        selectedPackage = selectedPackage.replace("Package", "").trim();
        expect(selectedPackage).to.be.equal(global.selectedPackage);

        let classesCount = (await page.$$(sel.allClasses(listNum))).length;
        if (!classesCount) {
            console.log('enter if');
            listNum = 1;
            classesCount = (await page.$$(sel.allClasses(1))).length;
        };
        const random = await helper.generateRandomNumber(1, classesCount);
        let classElement = await page.$(sel.randomClass(random, listNum));
        global.selectedClass = await page.evaluate(el => el.textContent, classElement);
        await classElement.click();
    }

    async verifySelectedClassname(page) {
        await page.waitForSelector(sel.selectedClass);
        let element = await page.$(sel.selectedClass);
        let selectedClass = (await page.evaluate(el => el.textContent, element)).split(' ');
        expect(selectedClass[1]).to.be.eql(global.selectedClass);
    }
}

module.exports = SeleniumLibrary;