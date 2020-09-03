const expect = require('chai').expect;
const Login = require('../page/Login');

var loginPage = new Login();

describe('sample test', () => {
    beforeEach(async function () {
        await page.goto('https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin');
    });

    it('should have correct page title', async () => {
        const title = await page.title();
        expect(title).to.eql('Sign in – Google accounts');
    });

    it('should have login the user', async () => {
        await loginPage.login(page, "patel.sushma@tftus.com", "sush7874");
    });
});