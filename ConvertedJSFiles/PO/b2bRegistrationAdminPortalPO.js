"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2bRegistrationAdminPortalPO = /** @class */ (function () {
    function b2bRegistrationAdminPortalPO() {
    }
    b2bRegistrationAdminPortalPO.b2bRegistrationTab = protractor_1.element(protractor_1.by.css("#b2bRegistration-menu-button"));
    b2bRegistrationAdminPortalPO.b2bRegisAddCandBttn = protractor_1.element(protractor_1.by.css("body > div.wrapper > div.content-wrapper > section > div.scopeng.ng-scope > div > div:nth-child(1) > div > div > button:nth-child(2)"));
    b2bRegistrationAdminPortalPO.b2bFirstName = protractor_1.element(protractor_1.by.xpath("//input[@id='CandidateDetails.FirstName']"));
    b2bRegistrationAdminPortalPO.b2bLastName = protractor_1.element(protractor_1.by.xpath("//input[@id='CandidateDetails.LastName']"));
    b2bRegistrationAdminPortalPO.b2bDOBday = protractor_1.element(protractor_1.by.xpath("//div[@name='CandidateDetails.DOB']//input[@placeholder='Day']"));
    b2bRegistrationAdminPortalPO.b2bDOBMonthDrpdwn = protractor_1.element(protractor_1.by.css("body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > div.modal-body.ng-scope > div > ng-form > div > div > form > div:nth-child(3) > div > p > div > div:nth-child(2) > select"));
    b2bRegistrationAdminPortalPO.b2bDOBYear = protractor_1.element(protractor_1.by.xpath("//div[@name='CandidateDetails.DOB']//input[@placeholder='Year']"));
    b2bRegistrationAdminPortalPO.b2bGenderMale = protractor_1.element(protractor_1.by.xpath("//label[contains(text(),'Male')]"));
    b2bRegistrationAdminPortalPO.b2bIDdrpdwn = protractor_1.element(protractor_1.by.model("vm.data.ProductDetails.SelectedIdentificationDocument"));
    b2bRegistrationAdminPortalPO.b2bidDocNum = protractor_1.element(protractor_1.by.xpath("//input[@id='ProductDetails.IdentificationDocNo']"));
    b2bRegistrationAdminPortalPO.b2bidexpday = protractor_1.element(protractor_1.by.xpath("//div[@name='ProductDetails.IdentificationDocExpiryDate']//input[@placeholder='Day']"));
    b2bRegistrationAdminPortalPO.b2bidexpMonthDrpdwn = protractor_1.element(protractor_1.by.css("body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > div.modal-body.ng-scope > div > ng-form > div > div > form > div:nth-child(10) > div > p > div > div:nth-child(2) > select"));
    b2bRegistrationAdminPortalPO.b2bidexpyear = protractor_1.element(protractor_1.by.xpath("//div[@name='ProductDetails.IdentificationDocExpiryDate']//input[@placeholder='Year']"));
    b2bRegistrationAdminPortalPO.b2bNextBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-primary']"));
    b2bRegistrationAdminPortalPO.b2bqualificationLeveldrpdwn = protractor_1.element(protractor_1.by.xpath("//div[@class='col-sm-9']//select[@id='qualificationLevel']"));
    b2bRegistrationAdminPortalPO.b2bStabdardRadioBtn = protractor_1.element(protractor_1.by.css("body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > div.modal-body.ng-scope > div > ng-form > div > div > form > div:nth-child(3) > div:nth-child(4) > div.form-group.col-sm-9 > div:nth-child(1) > div:nth-child(1) > input"));
    b2bRegistrationAdminPortalPO.b2bSessionStagedrpDwn = protractor_1.element(protractor_1.by.css("#sessionMilestone"));
    b2bRegistrationAdminPortalPO.b2bPrepratncntrdrpdwn = protractor_1.element(protractor_1.by.css("#preparationCentre"));
    b2bRegistrationAdminPortalPO.b2bexamdrpdwn = protractor_1.element(protractor_1.by.xpath("//span[@class='btn btn-default form-control ui-select-toggle']"));
    b2bRegistrationAdminPortalPO.b2bexamselctn = protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'ACCOUNTING - GCE A LEVEL OPT AY')]"));
    b2bRegistrationAdminPortalPO.b2bPickSelectedExam = protractor_1.element(protractor_1.by.xpath("//button[@id='add-exam-button']"));
    b2bRegistrationAdminPortalPO.b2bAddBtn = protractor_1.element(protractor_1.by.css("body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > div.modal-footer.ng-scope > div > button:nth-child(3)"));
    b2bRegistrationAdminPortalPO.b2blastnameValidation = protractor_1.element(protractor_1.by.css("#candiateRegistrations > div.k-grid-header > div > table > thead > tr.k-filter-row > th:nth-child(3) > span > span > span > input"));
    b2bRegistrationAdminPortalPO.b2bFirstnameValidation = protractor_1.element(protractor_1.by.css("#candiateRegistrations > div.k-grid-header > div > table > thead > tr.k-filter-row > th:nth-child(2) > span > span > span > input"));
    return b2bRegistrationAdminPortalPO;
}());
exports.b2bRegistrationAdminPortalPO = b2bRegistrationAdminPortalPO;
