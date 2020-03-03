import { element ,by} from "protractor";
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
export class b2bRegistrationAdminPortalPO
{
    public static b2bRegistrationTab=element(by.css("#b2bRegistration-menu-button"))
    public static b2bRegisAddCandBttn=element(by.css("body > div.wrapper > div.content-wrapper > section > div.scopeng.ng-scope > div > div:nth-child(1) > div > div > button:nth-child(2)"))
    public static b2bFirstName=element(by.xpath("//input[@id='CandidateDetails.FirstName']"))
    public static b2bLastName=element(by.xpath("//input[@id='CandidateDetails.LastName']"))
    public static b2bDOBday=element(by.xpath("//div[@name='CandidateDetails.DOB']//input[@placeholder='Day']"))
    public static b2bDOBMonthDrpdwn=element(by.css("body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > div.modal-body.ng-scope > div > ng-form > div > div > form > div:nth-child(3) > div > p > div > div:nth-child(2) > select"))
    public static b2bDOBYear=element(by.xpath("//div[@name='CandidateDetails.DOB']//input[@placeholder='Year']"))
    public static b2bGenderMale=element(by.xpath("//label[contains(text(),'Male')]"))
    public static b2bIDdrpdwn=element(by.model("vm.data.ProductDetails.SelectedIdentificationDocument"))
    public static b2bidDocNum=element(by.xpath("//input[@id='ProductDetails.IdentificationDocNo']"))
    public static b2bidexpday=element(by.xpath("//div[@name='ProductDetails.IdentificationDocExpiryDate']//input[@placeholder='Day']"))
    public static b2bidexpMonthDrpdwn=element(by.css("body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > div.modal-body.ng-scope > div > ng-form > div > div > form > div:nth-child(10) > div > p > div > div:nth-child(2) > select"))
    public static b2bidexpyear=element(by.xpath("//div[@name='ProductDetails.IdentificationDocExpiryDate']//input[@placeholder='Year']"))
    public static b2bNextBtn=element(by.xpath("//button[@class='btn btn-primary']"))
    public static b2bqualificationLeveldrpdwn=element(by.xpath("//div[@class='col-sm-9']//select[@id='qualificationLevel']"))
    public static b2bStabdardRadioBtn=element(by.css("body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > div.modal-body.ng-scope > div > ng-form > div > div > form > div:nth-child(3) > div:nth-child(4) > div.form-group.col-sm-9 > div:nth-child(1) > div:nth-child(1) > input"))
    public static b2bSessionStagedrpDwn=element(by.css("#sessionMilestone"))
    public static b2bPrepratncntrdrpdwn=element(by.css("#preparationCentre"))
    public static b2bexamdrpdwn=element(by.xpath("//span[@class='btn btn-default form-control ui-select-toggle']"))
    public static b2bexamselctn=element(by.xpath("//div[contains(text(),'ACCOUNTING - GCE A LEVEL OPT AY')]"))
    public static b2bPickSelectedExam=element(by.xpath("//button[@id='add-exam-button']"))
    public static b2bAddBtn=element(by.css("body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > div.modal-footer.ng-scope > div > button:nth-child(3)"))
    public static b2blastnameValidation=element(by.css("#candiateRegistrations > div.k-grid-header > div > table > thead > tr.k-filter-row > th:nth-child(3) > span > span > span > input"))
    public static b2bFirstnameValidation=element(by.css("#candiateRegistrations > div.k-grid-header > div > table > thead > tr.k-filter-row > th:nth-child(2) > span > span > span > input"))

}