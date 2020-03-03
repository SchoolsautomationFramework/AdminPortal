"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b2cPaymentPO_1 = require("../PO/b2cPaymentPO");
var RandomStringGeneratorUtil_1 = require("../Util/RandomStringGeneratorUtil");
var winstonutility_1 = require("../loggingutility/winstonutility");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var selectUtil_1 = require("../Util/selectUtil");
var log = winstonutility_1.Logger.logger;
var b2cPaymentLib = /** @class */ (function () {
    function b2cPaymentLib() {
    }
    b2cPaymentLib.prototype.payment = function () {
        waitStatementUtil_1.waitStatementUtil.customWait2();
        b2cPaymentPO_1.b2cPaymentPO.MakePayment.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        var paymentTypedrpDwn = new selectUtil_1.selectUtil(b2cPaymentPO_1.b2cPaymentPO.PaymentType);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        paymentTypedrpDwn.selectByIndex(2);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cPaymentPO_1.b2cPaymentPO.TextArea.click();
        b2cPaymentPO_1.b2cPaymentPO.Transaction_Reference.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(5));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cPaymentPO_1.b2cPaymentPO.Pay.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
    };
    return b2cPaymentLib;
}());
exports.b2cPaymentLib = b2cPaymentLib;
