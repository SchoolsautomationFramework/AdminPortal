import { element ,by} from "protractor";
//import Collections = require('typescript-collections');
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import{adminDashboardLib} from "../Lib/adminDashboardLib"
export class adminDashboardPO
{
public static changeDateTextbox = element(by.model("layout.currentTimeString"))
public static changeDateButton=element(by.id("set-date-button"))
public static sessionList=element(by.css("#selectedSession>span"))
//public static activeSession=element(by.xpath("//div[@class='k-widget k-treeview']/ul/li[@class='k-item k-first']/ul/li[2]"))
public static activeSession=element(by.xpath("//span[text()='May/June 2020 (Cambridge International) - active']"))
public static countryList= element(by.css("#country-menu-select > a"))
public static selectCountry=element(by.xpath("//li[@id='country-menu-select']//ul[@class='dropdown-menu']/li[2]"))
public static registrationTab=element(by.css("#registrations-menu-button"))
}