beforeEach(async function () {
    const testPath = this.currentTest.file;
    global.testPath = testPath;
    global.testState = this.currentTest.state;
});

afterEach(async function () {
    try {
        if (this.currentTest.state === 'failed') {
            await page.screenshot({
                fullPage: true,
                path: `testReports/screenshots/${Date.now()}.${this.currentTest.title}.png`
            });
        }
    } catch (err) {
        console.warn(err, 'Error closing page/browser');
    }
});