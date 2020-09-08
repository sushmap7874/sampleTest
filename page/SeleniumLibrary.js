const sel = require('../test/selectors/sampleTest2');
const helper = require('../utils/helper');
const { expect } = require('chai');

class SeleniumLibrary {
    async getAllFrames(page) {
        const frames = await page.frames();
        return frames;
    }

    async clickOnRandomPackage(page) {
        const frames = await this.getAllFrames(page);
        const packageListIframe = frames.find(f => f.name() === 'packageListFrame');
        await packageListIframe.waitForSelector(sel.packages, true);
        const packageCount = (await packageListIframe.$$(sel.allPackages)).length;
        const random = await helper.generateRandomNumber(1, packageCount);
        await packageListIframe.click(sel.randomPackage(random));
        let packageElement = await packageListIframe.$(sel.randomPackage(random));
        global.selectedPackage = await packageListIframe.evaluate(el => el.textContent, packageElement);
    }

    async clickOnRandomClass(page) {
        const frames = await this.getAllFrames(page);
        const packageIframe = frames.find(f => f.name() === 'packageFrame');
        await packageIframe.waitForSelector(sel.selectedPackage, true);
        let element = await packageIframe.$(sel.selectedPackage);
        let selectedPackage = await packageIframe.evaluate(el => el.textContent, element);
        expect(selectedPackage).to.be.eql(global.selectedPackage);

        const classesCount = (await packageIframe.$$(sel.allClasses)).length;
        const random = await helper.generateRandomNumber(1, classesCount);
        await packageIframe.click(sel.randomClass(random));
        let classElement = await packageIframe.$(sel.randomClass(random));
        global.selectedClass = await packageIframe.evaluate(el => el.textContent, classElement);
    }

    async verifySelectedClassname(page) {
        const frames = await this.getAllFrames(page);
        const classIframe = frames.find(f => f.name() === 'classFrame');
        await classIframe.waitForSelector(sel.selectedClass);
        let element = await classIframe.$(sel.selectedClass);
        let selectedClass = (await classIframe.evaluate(el => el.textContent, element)).split(' ');
        expect(selectedClass[1]).to.be.eql(global.selectedClass);
    }
}

module.exports = SeleniumLibrary;