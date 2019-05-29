"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('Protractor Typescript Demo', function () {
    it('title verifications', function () {
        protractor_1.browser.get('https://angularjs.org/');
        protractor_1.browser.getTitle().then(function (title) {
            console.log("The title is  : " + title);
            protractor_1.browser.sleep(5000);
        });
    });
});
