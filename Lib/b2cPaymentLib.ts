import { B2CRegistrationPO } from "../PO/B2CRegistrationPO";
import { browser } from "protractor";
import { b2cPaymentPO } from "../PO/b2cPaymentPO";
import { B2CRegistrationLib } from "./B2CRegistrationLib";
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import { Logger } from "../loggingutility/winstonutility";
import {b2bRegistrationAdminPortalPO} from "../PO/b2bRegistrationAdminPortalPO"
import { waitStatementUtil } from "../Util/waitStatementUtil";
import { selectUtil} from "../Util/selectUtil";
let log = Logger.logger
export class b2cPaymentLib 
{
    public  payment()
    {
        waitStatementUtil.customWait2()
        b2cPaymentPO.MakePayment.click();
        //waitStatementUtil.customWait2()
   
   let paymentTypedrpDwn:selectUtil = new selectUtil(b2cPaymentPO.PaymentType);
        waitStatementUtil.customWait1()
		paymentTypedrpDwn.selectByIndex(2)
        waitStatementUtil.customWait1()
    waitStatementUtil.customWait1()
    
    b2cPaymentPO.TextArea.click();
    b2cPaymentPO.Transaction_Reference.sendKeys(RandomStringGeneratorUtil.getRandomString(5));
    waitStatementUtil.customWait1()
    b2cPaymentPO.Pay.click();
    waitStatementUtil.customWait2()
 
    

}
}