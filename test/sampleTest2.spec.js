const expect = require('chai').expect;
const SeleniumLibrary = require('../page/SeleniumLibrary');

var seleniumLibraryPage = new SeleniumLibrary();

describe('sample test 2', () => {
    beforeEach(async function () {
        await page.goto('https://www.selenium.dev/selenium/docs/api/java/index.html');
    });

    it('should have clicked random classes and packages of selenium libraries', async () => {
        await seleniumLibraryPage.clickOnRandomPackage(page);
        await seleniumLibraryPage.clickOnRandomClass(page);
        await seleniumLibraryPage.verifySelectedClassname(page);
    });
});