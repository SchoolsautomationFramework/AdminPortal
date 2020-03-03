"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var adminDashboardPO = /** @class */ (function () {
    function adminDashboardPO() {
    }
    adminDashboardPO.changeDateTextbox = protractor_1.element(protractor_1.by.model("layout.currentTimeString"));
    adminDashboardPO.changeDateButton = protractor_1.element(protractor_1.by.id("set-date-button"));
    adminDashboardPO.sessionList = protractor_1.element(protractor_1.by.css("#selectedSession>span"));
    //public static activeSession=element(by.xpath("//div[@class='k-widget k-treeview']/ul/li[@class='k-item k-first']/ul/li[2]"))
    adminDashboardPO.activeSession = protractor_1.element(protractor_1.by.xpath("//span[text()='May/June 2020 (Cambridge International) - active']"));
    adminDashboardPO.countryList = protractor_1.element(protractor_1.by.css("#country-menu-select > a"));
    adminDashboardPO.selectCountry = protractor_1.element(protractor_1.by.xpath("//li[@id='country-menu-select']//ul[@class='dropdown-menu']/li[2]"));
    adminDashboardPO.registrationTab = protractor_1.element(protractor_1.by.css("#registrations-menu-button"));
    return adminDashboardPO;
}());
exports.adminDashboardPO = adminDashboardPO;
