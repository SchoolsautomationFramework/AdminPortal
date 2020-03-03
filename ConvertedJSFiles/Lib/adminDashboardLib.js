"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adminDashboardPO_1 = require("../PO/adminDashboardPO");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var adminDashboardLib = /** @class */ (function () {
    function adminDashboardLib() {
    }
    adminDashboardLib.prototype.setDate = function () {
        waitStatementUtil_1.waitStatementUtil.implicitWait();
        adminDashboardPO_1.adminDashboardPO.changeDateTextbox.clear();
        adminDashboardPO_1.adminDashboardPO.changeDateTextbox.sendKeys("22/01/2020");
        adminDashboardPO_1.adminDashboardPO.changeDateButton.click();
    };
    adminDashboardLib.prototype.setSession = function () {
        waitStatementUtil_1.waitStatementUtil.customWait2();
        adminDashboardPO_1.adminDashboardPO.sessionList.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        adminDashboardPO_1.adminDashboardPO.activeSession.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
    };
    adminDashboardLib.prototype.selectCountry = function () {
        adminDashboardPO_1.adminDashboardPO.countryList.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        adminDashboardPO_1.adminDashboardPO.selectCountry.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        adminDashboardPO_1.adminDashboardPO.registrationTab.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
    };
    return adminDashboardLib;
}());
exports.adminDashboardLib = adminDashboardLib;
