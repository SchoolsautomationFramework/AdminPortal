"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2cPaymentPO = /** @class */ (function () {
    function b2cPaymentPO() {
    }
    b2cPaymentPO.MakePayment = protractor_1.element(protractor_1.by.className("btn btn-primary"));
    b2cPaymentPO.PaymentType = protractor_1.element(protractor_1.by.css("#paymentType"));
    b2cPaymentPO.TextArea = protractor_1.element(protractor_1.by.id("refundInfo"));
    b2cPaymentPO.Transaction_Reference = protractor_1.element(protractor_1.by.model("vm.paymentData.paymentReference"));
    b2cPaymentPO.Pay = protractor_1.element(protractor_1.by.className("btn btn-primary"));
    b2cPaymentPO.FirstName = protractor_1.element(protractor_1.by.className("k-input"));
    b2cPaymentPO.Click_Name = protractor_1.element(protractor_1.by.xpath("candidateDetails({candidateId: dataItem.CandidateId })"));
    return b2cPaymentPO;
}());
exports.b2cPaymentPO = b2cPaymentPO;
