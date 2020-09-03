class Login {
    async login(page, email, password) {
        const emailSelector = 'input[type="email"]';
        const passwordSelector = 'input[type="password"]';
        await page.waitForSelector(emailSelector, 3000);
        await page.click(emailSelector);
        await page.type(emailSelector, email)
        await page.click(".VfPpkd-RLmnJb");
        await page.waitForNavigation();
        await page.waitForSelector(passwordSelector, 3000);
        await page.click(passwordSelector);
        await page.type(passwordSelector, password);
        await page.click(".VfPpkd-RLmnJb");
        await page.waitForSelector('h1.x7WrMb');
        const element = await page.$("h1.x7WrMb");
        const heading = await page.evaluate(element => element.textContent, element);
        expect(heading).to.eql("Welcome, Sushma Patel");
    }
}

module.exports = Login;


