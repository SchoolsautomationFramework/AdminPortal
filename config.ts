import { Config, browser } from "protractor";
import myReporter = require('./jasmine_reporter.js');
export let config: Config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
    },
  framework: 'jasmine',
  specs: ['./Spec/*.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  },
  onPrepare:async () => {
    await browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(myReporter);
    browser.manage().window().maximize();
   browser.manage().timeouts().implicitlyWait(5000);
 }
}