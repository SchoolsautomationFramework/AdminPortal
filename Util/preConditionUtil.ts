import { browser } from "protractor";
export class preConditionUtil
{
    public static  setSyncTimeoutConfig()
    {
        browser.ignoreSynchronization = true
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    }
}