"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
require("jasmine");
var loginLib_1 = require("../Lib/loginLib");
var adminDashboardLib_1 = require("../Lib/adminDashboardLib");
var b2bRegistrationAdminPortalLib_1 = require("../Lib/b2bRegistrationAdminPortalLib");
var b2bPaymentAdminPortalLib_1 = require("../Lib/b2bPaymentAdminPortalLib");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var preConditionUtil_1 = require("../Util/preConditionUtil");
var B2CRegistrationLib_1 = require("../Lib/B2CRegistrationLib");
var b2cPaymentlib_1 = require("../Lib/b2cPaymentlib");
describe("User will login to admin portal", function () {
    var Loginlib = new loginLib_1.loginLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("User login", function () {
        protractor_1.browser.get("http://qa-schoolexamsadmin-uat.britishcouncil.org/signin");
        //browser.get("http://lima-schoolexamsadmin-dev.dev.britishcouncil.org/")
        Loginlib.userLogin();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
describe("User will select session, date and country", function () {
    var AdminDashboardLib = new adminDashboardLib_1.adminDashboardLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("session, date and country selection", function () {
        AdminDashboardLib.setDate();
        AdminDashboardLib.setSession();
        AdminDashboardLib.selectCountry();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
describe("B2B Registration usingAdmin Portal", function () {
    var B2bRegistrationAdminPortalLib = new b2bRegistrationAdminPortalLib_1.b2bRegistrationAdminPortalLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("B2B Registration", function () {
        waitStatementUtil_1.waitStatementUtil.implicitWait();
        B2bRegistrationAdminPortalLib.selectB2BRegistrationTabAdminPortal();
        B2bRegistrationAdminPortalLib.selectAddCandidateB2BregistrationAdminPortal();
        B2bRegistrationAdminPortalLib.b2bRegistrationAdminPortalusingAddCandidate();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
describe("User will pay registered b2b candidate", function () {
    var B2bPaymentAdminPortalLib = new b2bPaymentAdminPortalLib_1.b2bPaymentAdminPortalLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("b2b payment", function () {
        B2bPaymentAdminPortalLib.b2bRegistrationPayment();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
describe("User will register b2c candidate", function () {
    var register = new B2CRegistrationLib_1.B2CRegistrationLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("b2c registration from admin portal", function () {
        register.registrations();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
describe("User will pay for registered b2c candidate", function () {
    var Payment = new b2cPaymentlib_1.b2cPaymentLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("b2c payment from admin portal", function () {
        Payment.payment();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
