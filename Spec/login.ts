import{browser} from "protractor"
import 'jasmine'
import {loginPO}from "../PO/loginPO";
import {loginLib}from "../Lib/loginLib";
import {adminDashboardPO}from"../PO/adminDashboardPO"
import{adminDashboardLib} from "../Lib/adminDashboardLib"
import {b2bRegistrationAdminPortalPO}from"../PO/b2bRegistrationAdminPortalPO"
import{b2bRegistrationAdminPortalLib} from "../Lib/b2bRegistrationAdminPortalLib"
import {b2bPaymentAdminPortalPO}from"../PO/b2bPaymentAdminPortalPO"
import{b2bPaymentAdminPortalLib} from "../Lib/b2bPaymentAdminPortalLib"
import { waitStatementUtil } from "../Util/waitStatementUtil";
import { preConditionUtil } from "../Util/preConditionUtil";
import { element ,by} from "protractor";
import { B2CRegistrationLib } from "../Lib/B2CRegistrationLib";
import { b2cPaymentLib } from "../Lib/b2cPaymentlib";
describe("User will login to admin portal", function()
{
    let Loginlib = new loginLib()
    
    preConditionUtil.setSyncTimeoutConfig()
   
    waitStatementUtil.implicitWait()
    it("User login", function()
    {
  browser.get("http://qa-schoolexamsadmin-uat.britishcouncil.org/signin")
  //browser.get("http://lima-schoolexamsadmin-dev.dev.britishcouncil.org/")

  Loginlib.userLogin()

  waitStatementUtil.implicitWait()
  
    }
    )
    
  }
  )

  

  describe("User will select session, date and country", function()
  {
      let AdminDashboardLib = new adminDashboardLib()
      preConditionUtil.setSyncTimeoutConfig()
      waitStatementUtil.implicitWait()
      it("session, date and country selection", function()
      {
          AdminDashboardLib.setDate()
          AdminDashboardLib.setSession()
          AdminDashboardLib.selectCountry()
          waitStatementUtil.implicitWait()
      }
      )
      
    }
    )
describe("B2B Registration usingAdmin Portal", function()
{
    let B2bRegistrationAdminPortalLib = new b2bRegistrationAdminPortalLib()
    
    
    preConditionUtil.setSyncTimeoutConfig()

    waitStatementUtil.implicitWait()
    it("B2B Registration", function()
    {
   
      waitStatementUtil.implicitWait()
        B2bRegistrationAdminPortalLib.selectB2BRegistrationTabAdminPortal()
        B2bRegistrationAdminPortalLib.selectAddCandidateB2BregistrationAdminPortal()
        B2bRegistrationAdminPortalLib.b2bRegistrationAdminPortalusingAddCandidate()
        waitStatementUtil.implicitWait()
    }
    )
    
  }
  )
  describe("User will pay registered b2b candidate", function()
{
    let B2bPaymentAdminPortalLib = new b2bPaymentAdminPortalLib()
    
    
    preConditionUtil.setSyncTimeoutConfig()
    waitStatementUtil.implicitWait()
    it("b2b payment", function()
    {
        B2bPaymentAdminPortalLib.b2bRegistrationPayment()
       
        waitStatementUtil.implicitWait()
    }
    )
    
  }
  )


  describe("User will register b2c candidate", function()
{
  let register = new B2CRegistrationLib ()
    
    
    preConditionUtil.setSyncTimeoutConfig()
    waitStatementUtil.implicitWait()
    it("b2c registration from admin portal", function()
    {
      register.registrations()
       
        waitStatementUtil.implicitWait()
    }
    )
    
  }
  )
  describe("User will pay for registered b2c candidate", function()
{
  let Payment = new b2cPaymentLib()
    
    
    preConditionUtil.setSyncTimeoutConfig()
    waitStatementUtil.implicitWait()
    it("b2c payment from admin portal", function()
    {
      Payment.payment();
       
        waitStatementUtil.implicitWait()
    }
    )
    
  }
  )