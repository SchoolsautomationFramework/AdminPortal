"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var B2CRegistrationPO_1 = require("../PO/B2CRegistrationPO");
var protractor_1 = require("protractor");
var RandomStringGeneratorUtil_1 = require("../Util/RandomStringGeneratorUtil");
var winstonutility_1 = require("../loggingutility/winstonutility");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var selectUtil_1 = require("../Util/selectUtil");
var log = winstonutility_1.Logger.logger;
var B2CRegistrationLib = /** @class */ (function () {
    function B2CRegistrationLib() {
    }
    B2CRegistrationLib.prototype.registrations = function () {
        protractor_1.browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.B2CRegistrations.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.AddCandidate.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.Day.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.dateOfBirth(1, 28));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2cDOBMonthDrpdwn = new selectUtil_1.selectUtil(B2CRegistrationPO_1.B2CRegistrationPO.Selectmonth);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2cDOBMonthDrpdwn.selectByIndex(5);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.Year.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.dateOfBirth(1991, 1995));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2cTitleDrpdwn = new selectUtil_1.selectUtil(B2CRegistrationPO_1.B2CRegistrationPO.Title);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2cTitleDrpdwn.selectByIndex(2);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var firstname = RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(5);
        B2CRegistrationPO_1.B2CRegistrationPO.FirstName.sendKeys(firstname);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var lastname = RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(6);
        B2CRegistrationPO_1.B2CRegistrationPO.LastName.sendKeys(lastname);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.Email.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.makeEmail());
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.Gender.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.AddressLine1.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(8));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.AddressLine2.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(5));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.City.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(4));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.CountryDrpdwn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.CountrySelctn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.Next.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        var Selb2cQualificationDrpdwn = new selectUtil_1.selectUtil(B2CRegistrationPO_1.B2CRegistrationPO.Qualificationlevel);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2cQualificationDrpdwn.selectByIndex(2);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.Standard.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2cSessionDrpdwn = new selectUtil_1.selectUtil(B2CRegistrationPO_1.B2CRegistrationPO.Session);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2cSessionDrpdwn.selectByIndex(2);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2cLocationDrpdwn = new selectUtil_1.selectUtil(B2CRegistrationPO_1.B2CRegistrationPO.Location);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2cLocationDrpdwn.selectByIndex(3);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.Exam.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.Subject.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        B2CRegistrationPO_1.B2CRegistrationPO.Addexam.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        B2CRegistrationPO_1.B2CRegistrationPO.Nextbutton.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        B2CRegistrationPO_1.B2CRegistrationPO.IDdocument.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.IDdocumentType.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.DocumentNumber.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(5));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.ExpiryDay.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.dateOfBirth(1, 28));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2cExpMonthDrpdwn = new selectUtil_1.selectUtil(B2CRegistrationPO_1.B2CRegistrationPO.ExpiryMonth);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2cExpMonthDrpdwn.selectByIndex(5);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.ExpiryYear.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.dateOfBirth(2030, 2038));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.Issuingauthority.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(5));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        B2CRegistrationPO_1.B2CRegistrationPO.Savebutton.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
    };
    return B2CRegistrationLib;
}());
exports.B2CRegistrationLib = B2CRegistrationLib;
