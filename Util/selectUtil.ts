
import {browser, by, ElementFinder } from "protractor";
import { waitStatementUtil } from "../Util/waitStatementUtil";
export class selectUtil {
      dropdown:ElementFinder;
      constructor(dropdownElement:ElementFinder) {
		this.dropdown = dropdownElement;
      dropdownElement.click()
     waitStatementUtil.customWait1()
    }
    public selectByIndex(index:number){

        this.dropdown.element(by.css("option:nth-child("+index+")")).click()
    }
   
 }