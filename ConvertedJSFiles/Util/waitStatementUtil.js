"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var waitStatementUtil = /** @class */ (function () {
    function waitStatementUtil() {
    }
    waitStatementUtil.implicitWait = function () {
        protractor_1.browser.manage().timeouts().implicitlyWait(30000);
    };
    waitStatementUtil.customWait1 = function () {
        protractor_1.browser.sleep(700);
    };
    waitStatementUtil.customWait2 = function () {
        protractor_1.browser.sleep(7000);
    };
    return waitStatementUtil;
}());
exports.waitStatementUtil = waitStatementUtil;
