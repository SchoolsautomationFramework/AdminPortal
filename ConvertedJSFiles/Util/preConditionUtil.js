"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var preConditionUtil = /** @class */ (function () {
    function preConditionUtil() {
    }
    preConditionUtil.setSyncTimeoutConfig = function () {
        protractor_1.browser.ignoreSynchronization = true;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    };
    return preConditionUtil;
}());
exports.preConditionUtil = preConditionUtil;
