"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var selectUtil = /** @class */ (function () {
    function selectUtil(dropdownElement) {
        this.dropdown = dropdownElement;
        dropdownElement.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
    }
    selectUtil.prototype.selectByIndex = function (index) {
        this.dropdown.element(protractor_1.by.css("option:nth-child(" + index + ")")).click();
    };
    return selectUtil;
}());
exports.selectUtil = selectUtil;
