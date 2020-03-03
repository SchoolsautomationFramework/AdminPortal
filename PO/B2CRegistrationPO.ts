import { element, by } from "protractor";

export class B2CRegistrationPO
{
    public static Registrations = element(by.id("registrations-menu-button"));
    public static B2CRegistrations = element(by.id("b2cRegistration-menu-button"));

    public static AddCandidate = element(by.id("addB2CCandidate-button"));
    public static Day = element(by.name("dateFields.day"));
    public static Selectmonth = element(by.css("body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > div.modal-body.ng-scope > ng-form > div > div > form > div.form-group > div > p > div > div:nth-child(2) > select"));
     public static Year = element(by.name("dateFields.year"));

    public static Title = element(by.id("TitleId"));
    public static FirstName = element(by.name("FirstName"));
    Candidate_FirstName = B2CRegistrationPO.FirstName;
    public static LastName = element(by.name("LastName"));
    Candidate_LastName = B2CRegistrationPO.LastName;
    public static Email = element(by.name("Email"));
    public static Gender = element(by.model("vm.data.CandidateDetails.Gender"));

    public static AddressLine1 = element(by.id("address-input"));
    public static AddressLine2 = element(by.id("address2-input"));
    public static City = element(by.id("city-input"));
    public static CountryDrpdwn=element(by.css("#country-select > div.ui-select-match.ng-scope > span"))
    public static CountrySelctn=element(by.xpath("//div[contains(text(),'Afghanistan')]"))
    public static Next = element(by.id("next-button"));
    public static Qualificationlevel = element(by.css("#qualificationLevel"));
    public static Standard = element(by.model("vm.item.retake.Type"));
    public static Session = element(by.css("#sessionMilestone "));
    public static Location = element(by.css("#location "));
    public static Exam = element(by.className("ui-select-placeholder text-muted ng-binding"));
    public static Subject = element(by.xpath("//*[contains(text(), '9706AY  ACCOUNTING - GCE A LEVEL OPT AY')]"));
    public static Addexam = element(by.xpath("//button[@id='add-exam-button']"));
    public static Nextbutton = element(by.xpath("//button[@id='next-button']"));
    public static IDdocument = element(by.className("ui-select-placeholder text-muted ng-binding"));
    public static IDdocumentType = element(by.xpath("//*[contains(text(), 'Passport')]"));
    public static DocumentNumber = element(by.id("DocumentNumber"));
    public static ExpiryDay = element(by.name("dateFields.day"));
    public static ExpiryMonth = element(by.css("body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > div.modal-body.ng-scope > ng-form > div > div > form > div:nth-child(4) > div > p > div > div:nth-child(2) > select"));
    public static ExpiryYear = element(by.name("dateFields.year"));
    public static Issuingauthority = element(by.id("IssuingAuthority"));
    public static Savebutton = element(by.id("save-button"));



}