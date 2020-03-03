import { browser } from "protractor";


export class RandomStringGeneratorUtil{
   

    static getRandomString = function (characterLength) {
        var randomText = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < characterLength; i++)
            randomText += possible.charAt(Math.floor(Math.random() * possible.length));
        return randomText;
    };

    static makeEmail = function () {
        var strValues="abcdefg12345";
        var strEmail = "";
        var strTmp;
        for (var i=0;i<10;i++) {
            strTmp = strValues.charAt(Math.round(strValues.length*Math.random()));
            strEmail = strEmail + strTmp;
        }
        strTmp = "";
        strEmail = strEmail + "@";
        for (var j=0;j<8;j++) {
            strTmp = strValues.charAt(Math.round(strValues.length*Math.random()));
            strEmail = strEmail + strTmp;
        }
        strEmail = strEmail + ".com"
        return strEmail;
    };

    
    public static dateOfBirth(start, end)
    {
        return Math.floor(Math.random() * (start - end + 1) + end);
    }
}