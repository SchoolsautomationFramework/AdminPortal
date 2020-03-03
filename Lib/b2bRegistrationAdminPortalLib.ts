import {b2bRegistrationAdminPortalPO} from "../PO/b2bRegistrationAdminPortalPO"
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import{browser, element, Key} from "protractor"
import { waitStatementUtil } from "../Util/waitStatementUtil";
import { selectUtil} from "../Util/selectUtil";
export class b2bRegistrationAdminPortalLib
{
 
    public selectB2BRegistrationTabAdminPortal()
    {
        b2bRegistrationAdminPortalPO.b2bRegistrationTab.click()
       
        waitStatementUtil.customWait1()
    }

    public selectAddCandidateB2BregistrationAdminPortal()
    {
        b2bRegistrationAdminPortalPO.b2bRegisAddCandBttn.click()
        
        waitStatementUtil.customWait1()
    }

    public b2bRegistrationAdminPortalusingAddCandidate()
    {
        var firstname=RandomStringGeneratorUtil.getRandomString(5)
        var lastname=RandomStringGeneratorUtil.getRandomString(5)
        var passportNum=RandomStringGeneratorUtil.getRandomString(5)
        b2bRegistrationAdminPortalPO.b2bFirstName.click()
        b2bRegistrationAdminPortalPO.b2bFirstName.sendKeys(firstname)
        waitStatementUtil.customWait1()
        b2bRegistrationAdminPortalPO.b2bLastName.sendKeys(lastname)
        waitStatementUtil.customWait1()
        b2bRegistrationAdminPortalPO.b2bDOBday.sendKeys(RandomStringGeneratorUtil.dateOfBirth(1,28))
        waitStatementUtil.customWait1()
        let Selb2bDOBMonthDrpdwn:selectUtil = new selectUtil(b2bRegistrationAdminPortalPO.b2bDOBMonthDrpdwn);
        waitStatementUtil.customWait1()
		Selb2bDOBMonthDrpdwn.selectByIndex(4)
        waitStatementUtil.customWait1()
        b2bRegistrationAdminPortalPO.b2bDOBYear.sendKeys(RandomStringGeneratorUtil.dateOfBirth(1991,1995))
        waitStatementUtil.customWait1()
        b2bRegistrationAdminPortalPO.b2bGenderMale.click()
        waitStatementUtil.customWait1()
        let Selb2bIDdrpdwn:selectUtil = new selectUtil(b2bRegistrationAdminPortalPO.b2bIDdrpdwn);
        waitStatementUtil.customWait1()
        Selb2bIDdrpdwn.selectByIndex(2)
        waitStatementUtil.customWait1()
        b2bRegistrationAdminPortalPO.b2bidDocNum.sendKeys(passportNum)
        waitStatementUtil.customWait1()
        b2bRegistrationAdminPortalPO.b2bidexpday.sendKeys(RandomStringGeneratorUtil.dateOfBirth(1,28))
        waitStatementUtil.customWait1()
        let Selb2bidexpMonthDrpdwn:selectUtil = new selectUtil(b2bRegistrationAdminPortalPO.b2bidexpMonthDrpdwn);
        waitStatementUtil.customWait1()
        Selb2bidexpMonthDrpdwn.selectByIndex(5)
        waitStatementUtil.customWait1()
        b2bRegistrationAdminPortalPO.b2bidexpyear.sendKeys(RandomStringGeneratorUtil.dateOfBirth(2030,2040))
        waitStatementUtil.customWait1()
        b2bRegistrationAdminPortalPO.b2bNextBtn.click()
        waitStatementUtil.customWait1()
        let Selb2bqualificationLeveldrpdwn:selectUtil = new selectUtil(b2bRegistrationAdminPortalPO.b2bqualificationLeveldrpdwn);
        waitStatementUtil.customWait1()
        Selb2bqualificationLeveldrpdwn.selectByIndex(2)
        waitStatementUtil.customWait1()
        b2bRegistrationAdminPortalPO.b2bStabdardRadioBtn.click()
        waitStatementUtil.customWait1()
        let Selb2bSessionStagedrpDwn:selectUtil = new selectUtil(b2bRegistrationAdminPortalPO.b2bSessionStagedrpDwn);
        waitStatementUtil.customWait1()
        Selb2bSessionStagedrpDwn.selectByIndex(2)
        waitStatementUtil.customWait1()
        let Selb2bPrepratncntrdrpdwn:selectUtil = new selectUtil(b2bRegistrationAdminPortalPO.b2bPrepratncntrdrpdwn);
        waitStatementUtil.customWait1()
        Selb2bPrepratncntrdrpdwn.selectByIndex(2)
        waitStatementUtil.customWait1()
        b2bRegistrationAdminPortalPO.b2bexamdrpdwn.click()
        waitStatementUtil.customWait1()
        b2bRegistrationAdminPortalPO.b2bexamselctn.click()
        waitStatementUtil.customWait1()
        b2bRegistrationAdminPortalPO.b2bPickSelectedExam.click()
        waitStatementUtil.customWait2()
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
        waitStatementUtil.customWait2()
        b2bRegistrationAdminPortalPO.b2bAddBtn.click()
        waitStatementUtil.customWait2()
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
        waitStatementUtil.customWait1()
        b2bRegistrationAdminPortalPO.b2bFirstnameValidation.click()
        waitStatementUtil.customWait1()
        b2bRegistrationAdminPortalPO.b2bFirstnameValidation.sendKeys(firstname)
        waitStatementUtil.customWait2()
        waitStatementUtil.customWait2()
        b2bRegistrationAdminPortalPO.b2blastnameValidation.click()
        waitStatementUtil.customWait2()
        waitStatementUtil.customWait2()
        b2bRegistrationAdminPortalPO.b2blastnameValidation.sendKeys(lastname)
        waitStatementUtil.customWait2()
        waitStatementUtil.customWait2()
    }

    
}