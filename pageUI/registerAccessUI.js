const { By } = require('selenium-webdriver');
class registerPage {
    hereLink = By.xpath("//a[text()='here']");
    emailInput = By.name("emailid");
    submitButton = By.xpath("//input[@value='Submit']");
    textTitleAccess = By.xpath("//h2[text()='Access details to demo site.']");
    userIDText = By.xpath("//td[text()='User ID :']/following-sibling::td");
    passwordText = By.xpath("//td[text()='Password :']/following-sibling::td");
    frame_1 = By.id("google_ads_iframe_/24132379/INTERSTITIAL_DemoGuru99_0");
    frame_2 = By.id("ad_iframe");
    x_Button = By.xpath("//div[@id='dismiss-button']");
    close_Button = By.xpath("//div[@id='dismiss-button']//span[normalize-space()='Close']");
}


module.exports = new registerPage();
