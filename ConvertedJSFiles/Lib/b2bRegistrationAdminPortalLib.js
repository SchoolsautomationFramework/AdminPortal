"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b2bRegistrationAdminPortalPO_1 = require("../PO/b2bRegistrationAdminPortalPO");
var RandomStringGeneratorUtil_1 = require("../Util/RandomStringGeneratorUtil");
var protractor_1 = require("protractor");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var selectUtil_1 = require("../Util/selectUtil");
var b2bRegistrationAdminPortalLib = /** @class */ (function () {
    function b2bRegistrationAdminPortalLib() {
    }
    b2bRegistrationAdminPortalLib.prototype.selectB2BRegistrationTabAdminPortal = function () {
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bRegistrationTab.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
    };
    b2bRegistrationAdminPortalLib.prototype.selectAddCandidateB2BregistrationAdminPortal = function () {
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bRegisAddCandBttn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
    };
    b2bRegistrationAdminPortalLib.prototype.b2bRegistrationAdminPortalusingAddCandidate = function () {
        var firstname = RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(5);
        var lastname = RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(5);
        var passportNum = RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(5);
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bFirstName.click();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bFirstName.sendKeys(firstname);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bLastName.sendKeys(lastname);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bDOBday.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.dateOfBirth(1, 28));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2bDOBMonthDrpdwn = new selectUtil_1.selectUtil(b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bDOBMonthDrpdwn);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2bDOBMonthDrpdwn.selectByIndex(4);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bDOBYear.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.dateOfBirth(1991, 1995));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bGenderMale.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2bIDdrpdwn = new selectUtil_1.selectUtil(b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bIDdrpdwn);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2bIDdrpdwn.selectByIndex(2);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bidDocNum.sendKeys(passportNum);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bidexpday.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.dateOfBirth(1, 28));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2bidexpMonthDrpdwn = new selectUtil_1.selectUtil(b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bidexpMonthDrpdwn);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2bidexpMonthDrpdwn.selectByIndex(5);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bidexpyear.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.dateOfBirth(2030, 2040));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bNextBtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2bqualificationLeveldrpdwn = new selectUtil_1.selectUtil(b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bqualificationLeveldrpdwn);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2bqualificationLeveldrpdwn.selectByIndex(2);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bStabdardRadioBtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2bSessionStagedrpDwn = new selectUtil_1.selectUtil(b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bSessionStagedrpDwn);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2bSessionStagedrpDwn.selectByIndex(2);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2bPrepratncntrdrpdwn = new selectUtil_1.selectUtil(b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bPrepratncntrdrpdwn);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2bPrepratncntrdrpdwn.selectByIndex(2);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bexamdrpdwn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bexamselctn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bPickSelectedExam.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        protractor_1.browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
        waitStatementUtil_1.waitStatementUtil.customWait2();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bAddBtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        protractor_1.browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bFirstnameValidation.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2bFirstnameValidation.sendKeys(firstname);
        //waitStatementUtil.customWait1()
        waitStatementUtil_1.waitStatementUtil.customWait2();
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2blastnameValidation.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        // waitStatementUtil.customWait2()
        b2bRegistrationAdminPortalPO_1.b2bRegistrationAdminPortalPO.b2blastnameValidation.sendKeys(lastname);
        waitStatementUtil_1.waitStatementUtil.customWait2();
        // waitStatementUtil.customWait2()
    };
    return b2bRegistrationAdminPortalLib;
}());
exports.b2bRegistrationAdminPortalLib = b2bRegistrationAdminPortalLib;
