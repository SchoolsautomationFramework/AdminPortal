"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b2bPaymentAdminPortalPO_1 = require("../PO/b2bPaymentAdminPortalPO");
var RandomStringGeneratorUtil_1 = require("../Util/RandomStringGeneratorUtil");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var selectUtil_1 = require("../Util/selectUtil");
var b2bPaymentAdminPortalLib = /** @class */ (function () {
    function b2bPaymentAdminPortalLib() {
    }
    b2bPaymentAdminPortalLib.prototype.b2bRegistrationPayment = function () {
        waitStatementUtil_1.waitStatementUtil.customWait2();
        var transactionRef = RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(5);
        b2bPaymentAdminPortalPO_1.b2bPaymentAdminPortalPO.ClickValidatedFirstName.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        b2bPaymentAdminPortalPO_1.b2bPaymentAdminPortalPO.ClickValidatedFirstName.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        b2bPaymentAdminPortalPO_1.b2bPaymentAdminPortalPO.paymentBtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var paymentTypedrpDwn = new selectUtil_1.selectUtil(b2bPaymentAdminPortalPO_1.b2bPaymentAdminPortalPO.paymentTypedrpDwn);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        paymentTypedrpDwn.selectByIndex(2);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bPaymentAdminPortalPO_1.b2bPaymentAdminPortalPO.paymentTransactionRef.sendKeys(transactionRef);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bPaymentAdminPortalPO_1.b2bPaymentAdminPortalPO.PaymentBtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        //waitStatementUtil.customWait2()
        //waitStatementUtil.customWait2()
        //just checking the repo
    };
    return b2bPaymentAdminPortalLib;
}());
exports.b2bPaymentAdminPortalLib = b2bPaymentAdminPortalLib;
