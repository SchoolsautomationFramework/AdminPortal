import { element, by } from "protractor";

export class b2cPaymentPO
{
    public static MakePayment = element(by.className("btn btn-primary"));
  
    public static PaymentType = element(by.css("#paymentType"));
    public static TextArea = element(by.id("refundInfo"));
    public static Transaction_Reference = element(by.model("vm.paymentData.paymentReference"));
    public static Pay = element(by.className("btn btn-primary"));

    public static FirstName = element(by.className("k-input"));
    public static Click_Name = element(by.xpath("candidateDetails({candidateId: dataItem.CandidateId })"));
    
    
} 