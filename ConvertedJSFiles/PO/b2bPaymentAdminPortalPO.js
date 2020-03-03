"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2bPaymentAdminPortalPO = /** @class */ (function () {
    function b2bPaymentAdminPortalPO() {
    }
    b2bPaymentAdminPortalPO.ClickValidatedFirstName = protractor_1.element(protractor_1.by.css("#candiateRegistrations > div.k-grid-content.k-auto-scrollable > table > tbody > tr > td:nth-child(2) > a:nth-child(1)"));
    b2bPaymentAdminPortalPO.paymentBtn = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Pay all')]"));
    // public static paymentTypedrpDwn=element(by.xpath("//select[@id='paymentType']"))
    // public static paymentTypeSelctn=element(by.xpath("//option[contains(text(),'Bank Transfer')]"))
    b2bPaymentAdminPortalPO.paymentTypedrpDwn = protractor_1.element(protractor_1.by.css("#paymentType"));
    b2bPaymentAdminPortalPO.paymentTransactionRef = protractor_1.element(protractor_1.by.xpath("//input[@class='form-control ng-pristine ng-untouched ng-scope ng-empty ng-invalid ng-invalid-required']"));
    b2bPaymentAdminPortalPO.PaymentBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-primary']"));
    return b2bPaymentAdminPortalPO;
}());
exports.b2bPaymentAdminPortalPO = b2bPaymentAdminPortalPO;
