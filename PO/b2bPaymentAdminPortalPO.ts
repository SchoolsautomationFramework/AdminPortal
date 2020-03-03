import { element ,by} from "protractor";
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
export class b2bPaymentAdminPortalPO
{
public static ClickValidatedFirstName=element(by.css("#candiateRegistrations > div.k-grid-content.k-auto-scrollable > table > tbody > tr > td:nth-child(2) > a:nth-child(1)"))
public static paymentBtn=element(by.xpath("//button[contains(text(),'Pay all')]"))
// public static paymentTypedrpDwn=element(by.xpath("//select[@id='paymentType']"))
// public static paymentTypeSelctn=element(by.xpath("//option[contains(text(),'Bank Transfer')]"))
public static paymentTypedrpDwn=element(by.css("#paymentType"))
public static paymentTransactionRef=element(by.xpath("//input[@class='form-control ng-pristine ng-untouched ng-scope ng-empty ng-invalid ng-invalid-required']"))
public static PaymentBtn=element(by.xpath("//button[@class='btn btn-primary']"))

}