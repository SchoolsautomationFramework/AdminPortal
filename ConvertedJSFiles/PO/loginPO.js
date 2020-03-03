"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var loginPO = /** @class */ (function () {
    function loginPO() {
    }
    loginPO.loginEmail = protractor_1.element(protractor_1.by.name("email"));
    loginPO.loginPassword = protractor_1.element(protractor_1.by.name("password"));
    loginPO.loginButton = protractor_1.element(protractor_1.by.id("login-button"));
    return loginPO;
}());
exports.loginPO = loginPO;
