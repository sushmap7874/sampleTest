const expect = require('chai').expect;
const puppeteer = require('puppeteer');

describe('sample test', () => {
    let page;
    beforeEach(async function () {
        page = await browser.newPage();
        await page.goto('https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin');
    });

    afterEach(async function () {
        if (this.currentTest.state === 'failed') {
            await page.screenshot({
                fullPage: true,
                path: `screenshots/${Date.now()}.${this.currentTest.title}.png`
            });
        }
        await page.close();
    });

    it('should have correct page title', async () => {
        const title = await page.title();
        expect(title).to.eql('Sign in – Google accounts');
    });

    it('should have login the user', async () => {
        const email = 'input[type="email"]';
        const password = 'input[type="password"]';
        await page.waitForSelector(email, 3000);
        await page.click(email);
        await page.type(email, "patel.sushma@tftus.com")
        await page.click(".VfPpkd-RLmnJb");
        await page.waitForNavigation();
        await page.waitForSelector(password, 3000);
        await page.click(password);
        await page.type(password, 'sush7874');
        await page.click(".VfPpkd-RLmnJb");
        await page.waitForNavigation();
        await page.waitForSelector('h1.x7WrMb');
        const element = await page.$("h1.x7WrMb");
        const heading = await page.evaluate(element => element.textContent, element);
        expect(heading).to.eql("Welcome, Sushma Patel");
    });
});