const puppeteer = require('puppeteer');
const { expect } = require('chai');
const _ = require('lodash');
const globalVariables = _.pick(global, ['browser', 'expect']);

const opts = {
    headless: false,
    slowMo: 100,
    timeout: 90000
};

before(async function () {
    global.expect = expect;

    const browser = await puppeteer.launch(opts)
    global.browser = browser;
    const page = await browser.newPage();
    global.page = page;
});

after(function () {
    page.close();
    browser.close();

    global.browser = globalVariables.browser;
    global.expect = globalVariables.expect;
});