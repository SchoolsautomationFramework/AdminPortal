import { element ,by} from "protractor";

export class loginPO{
    public static loginEmail=element(by.name("email"))
    public static loginPassword=element(by.name("password"))
    public static loginButton=element(by.id("login-button"))
}
