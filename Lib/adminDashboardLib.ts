import {adminDashboardPO} from "../PO/adminDashboardPO"
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import{browser, element, Key} from "protractor"
import { waitStatementUtil } from "../Util/waitStatementUtil";
export class adminDashboardLib
{
    public setDate()
    {
       
        waitStatementUtil.implicitWait()
        adminDashboardPO.changeDateTextbox.clear()
        adminDashboardPO.changeDateTextbox.sendKeys("22/01/2020")
        adminDashboardPO.changeDateButton.click()   
    }
    public setSession()
    {
       
        waitStatementUtil.customWait2()
        adminDashboardPO.sessionList.click()
       
        waitStatementUtil.customWait1()
        adminDashboardPO.activeSession.click()
    
        waitStatementUtil.customWait1()
    }
    public selectCountry()
    {
        adminDashboardPO.countryList.click()
     
        waitStatementUtil.customWait1()
        adminDashboardPO.selectCountry.click()
   
        waitStatementUtil.customWait1()
        adminDashboardPO.registrationTab.click()
      
        waitStatementUtil.customWait1()
    }
}
