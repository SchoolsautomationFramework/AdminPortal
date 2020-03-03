import { B2CRegistrationPO } from "../PO/B2CRegistrationPO";
import { browser, protractor } from "protractor";
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import { Logger } from "../loggingutility/winstonutility";
import { waitStatementUtil } from "../Util/waitStatementUtil";
import { selectUtil} from "../Util/selectUtil";
let log = Logger.logger
export class B2CRegistrationLib
{

    public registrations()
    { 
       
browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
waitStatementUtil.customWait1()
B2CRegistrationPO.B2CRegistrations.click();
waitStatementUtil.customWait1()
B2CRegistrationPO.AddCandidate.click();
waitStatementUtil.customWait1()
B2CRegistrationPO.Day.sendKeys(RandomStringGeneratorUtil.dateOfBirth(1,28));
waitStatementUtil.customWait1()

let Selb2cDOBMonthDrpdwn:selectUtil = new selectUtil(B2CRegistrationPO.Selectmonth);
waitStatementUtil.customWait1()
Selb2cDOBMonthDrpdwn.selectByIndex(5)
waitStatementUtil.customWait1()

B2CRegistrationPO.Year.sendKeys(RandomStringGeneratorUtil.dateOfBirth(1991,1995));
waitStatementUtil.customWait1()

let Selb2cTitleDrpdwn:selectUtil = new selectUtil(B2CRegistrationPO.Title);
waitStatementUtil.customWait1()
Selb2cTitleDrpdwn.selectByIndex(2)
waitStatementUtil.customWait1()
waitStatementUtil.customWait1()
let firstname: string= RandomStringGeneratorUtil.getRandomString(5);
B2CRegistrationPO.FirstName.sendKeys(firstname);
waitStatementUtil.customWait1()
let lastname : string = RandomStringGeneratorUtil.getRandomString(6);
B2CRegistrationPO.LastName.sendKeys(lastname);
waitStatementUtil.customWait1()
B2CRegistrationPO.Email.sendKeys(RandomStringGeneratorUtil.makeEmail());
waitStatementUtil.customWait1()
B2CRegistrationPO.Gender.click();
waitStatementUtil.customWait1()
B2CRegistrationPO.AddressLine1.sendKeys(RandomStringGeneratorUtil.getRandomString(8));
waitStatementUtil.customWait1()
B2CRegistrationPO.AddressLine2.sendKeys(RandomStringGeneratorUtil.getRandomString(5));
waitStatementUtil.customWait1()
B2CRegistrationPO.City.sendKeys(RandomStringGeneratorUtil.getRandomString(4));
waitStatementUtil.customWait1()
B2CRegistrationPO.CountryDrpdwn.click()
waitStatementUtil.customWait1()
B2CRegistrationPO.CountrySelctn.click()
waitStatementUtil.customWait1()
B2CRegistrationPO.Next.click();
waitStatementUtil.customWait2()

let Selb2cQualificationDrpdwn:selectUtil = new selectUtil(B2CRegistrationPO.Qualificationlevel);
waitStatementUtil.customWait1()
Selb2cQualificationDrpdwn.selectByIndex(2)
waitStatementUtil.customWait1()
B2CRegistrationPO.Standard.click()
waitStatementUtil.customWait1()

let Selb2cSessionDrpdwn:selectUtil = new selectUtil(B2CRegistrationPO.Session);
waitStatementUtil.customWait1()
Selb2cSessionDrpdwn.selectByIndex(2)
waitStatementUtil.customWait1()
waitStatementUtil.customWait1()

let Selb2cLocationDrpdwn:selectUtil = new selectUtil(B2CRegistrationPO.Location);
waitStatementUtil.customWait1()
Selb2cLocationDrpdwn.selectByIndex(3)
waitStatementUtil.customWait1()
waitStatementUtil.customWait1()
B2CRegistrationPO.Exam.click();
waitStatementUtil.customWait1()
B2CRegistrationPO.Subject.click();
waitStatementUtil.customWait2()
B2CRegistrationPO.Addexam.click();
waitStatementUtil.customWait2()
B2CRegistrationPO.Nextbutton.click();
waitStatementUtil.customWait2()
B2CRegistrationPO.IDdocument.click();
waitStatementUtil.customWait1()
B2CRegistrationPO.IDdocumentType.click();
waitStatementUtil.customWait1()
B2CRegistrationPO.DocumentNumber.sendKeys(RandomStringGeneratorUtil.getRandomString(5));
waitStatementUtil.customWait1()
B2CRegistrationPO.ExpiryDay.sendKeys(RandomStringGeneratorUtil.dateOfBirth(1,28));
waitStatementUtil.customWait1()
let Selb2cExpMonthDrpdwn:selectUtil = new selectUtil(B2CRegistrationPO.ExpiryMonth);
waitStatementUtil.customWait1()
Selb2cExpMonthDrpdwn.selectByIndex(5)
waitStatementUtil.customWait1()
B2CRegistrationPO.ExpiryYear.sendKeys(RandomStringGeneratorUtil.dateOfBirth(2030,2038));
waitStatementUtil.customWait1()
B2CRegistrationPO.Issuingauthority.sendKeys(RandomStringGeneratorUtil.getRandomString(5));
waitStatementUtil.customWait1()
B2CRegistrationPO.Savebutton.click();
waitStatementUtil.customWait1()

    }
}
