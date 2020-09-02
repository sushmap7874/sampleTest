const puppeteer = require('puppeteer');
const { expect } = require('chai');
const _ = require('lodash');
const globalVariables = _.pick(global, ['browser', 'expect']);

const opts = {
    headless: false,
    slowMo: 100,
    timeout: 10000
};

before(function (done) {
    global.expect = expect;

    puppeteer
        .launch(opts)
        .then(function (browser) {
            global.browser = browser;
            done();
        });
});

after(function () {
    browser.close();

    global.browser = globalVariables.browser;
    global.expect = globalVariables.expect;
});