import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import {loginPO}from "../PO/loginPO";

export class loginLib
{
    public userLogin()
    {
        //loginPO.loginEmail.sendKeys("globaladmin1@britishcouncil.org");
        loginPO.loginEmail.sendKeys("admin@britishcouncil.org");
        loginPO.loginPassword.sendKeys("Password1");
        loginPO.loginButton.click();
        

    }
}