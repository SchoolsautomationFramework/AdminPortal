"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomStringGeneratorUtil = /** @class */ (function () {
    function RandomStringGeneratorUtil() {
    }
    RandomStringGeneratorUtil.dateOfBirth = function (start, end) {
        return Math.floor(Math.random() * (start - end + 1) + end);
    };
    RandomStringGeneratorUtil.getRandomString = function (characterLength) {
        var randomText = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < characterLength; i++)
            randomText += possible.charAt(Math.floor(Math.random() * possible.length));
        return randomText;
    };
    RandomStringGeneratorUtil.makeEmail = function () {
        var strValues = "abcdefg12345";
        var strEmail = "";
        var strTmp;
        for (var i = 0; i < 10; i++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strTmp = "";
        strEmail = strEmail + "@";
        for (var j = 0; j < 8; j++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strEmail = strEmail + ".com";
        return strEmail;
    };
    return RandomStringGeneratorUtil;
}());
exports.RandomStringGeneratorUtil = RandomStringGeneratorUtil;
