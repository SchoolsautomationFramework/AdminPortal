import {b2bPaymentAdminPortalPO} from "../PO/b2bPaymentAdminPortalPO"
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import{browser, element, Key} from "protractor"
import { waitStatementUtil } from "../Util/waitStatementUtil";
import { selectUtil} from "../Util/selectUtil";
export class b2bPaymentAdminPortalLib
{

public b2bRegistrationPayment()
{
        waitStatementUtil.customWait2()
        var transactionRef=RandomStringGeneratorUtil.getRandomString(5)
        b2bPaymentAdminPortalPO.ClickValidatedFirstName.click()
        waitStatementUtil.customWait2()
        b2bPaymentAdminPortalPO.ClickValidatedFirstName.click()
        waitStatementUtil.customWait2()
        b2bPaymentAdminPortalPO.paymentBtn.click()
        waitStatementUtil.customWait1()
    let paymentTypedrpDwn:selectUtil = new selectUtil(b2bPaymentAdminPortalPO.paymentTypedrpDwn);
        waitStatementUtil.customWait1()
		paymentTypedrpDwn.selectByIndex(2)
        waitStatementUtil.customWait1()
        b2bPaymentAdminPortalPO.paymentTransactionRef.sendKeys(transactionRef)
        waitStatementUtil.customWait1()
        b2bPaymentAdminPortalPO.PaymentBtn.click()
        waitStatementUtil.customWait2()
        //waitStatementUtil.customWait2()
        //waitStatementUtil.customWait2()
        //just checking the repo
}
}