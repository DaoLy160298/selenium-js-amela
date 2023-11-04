const { By } = require('selenium-webdriver');
class registerCustomerUI{
    newCustomerMenu = By.xpath("//a[text()='New Customer']");
    titleText = By.xpath("//p[contains(text(),'Add New Customer')]");
    customerNameTextLabel = By.xpath("//td[text()='Customer Name']/following-sibling::td");
    genderTextLabel = By.xpath("//td[text()='Customer Name']");
    dateTextLabel = By.xpath("//td[text()='Gender']");
    addressTextLabel = By.xpath("//td[text()='Address']");
    cityTextLabel = By.xpath("//td[text()='City']");
    stateTextLabel = By.xpath("//td[text()='State']");
    pinTextLabel = By.xpath("//td[text()='PIN']");
    mobileTextLabel = By.xpath("//td[text()='Mobile Number']");
    emailTextLabel = By.xpath("//td[text()='E-mail']");
    passwordTextLabel = By.xpath("//td[text()='Password']");

    customerInput = By.xpath("//td[text()='Customer Name']/following-sibling::td/input");
    genderRadioButton = By.xpath("//td[text()='Gender']/following-sibling::td/input[@value='f']");
    dateInput = By.xpath("//td[text()='Date of Birth']/following-sibling::td/input");
    addressTextarea = By.xpath("//td[text()='Address']/following-sibling::td/textarea");
    cityInput = By.xpath("//td[text()='City']/following-sibling::td/input");
    stateInput = By.xpath("//td[text()='State']/following-sibling::td/input");
    pinInput = By.xpath("//td[text()='PIN']/following-sibling::td/input");
    mobileInput = By.xpath("//td[text()='Mobile Number']/following-sibling::td/input");
    emailInput = By.xpath("//td[text()='E-mail']/following-sibling::td/input");
    passwordInput = By.xpath("//td[text()='Password']/following-sibling::td/input");
    submitButton = By.xpath("//input[@value='Submit']");
    textSuccessMessage = By.css('.heading3');

    verifyCustomerNameText = By.xpath("//td[contains(text(),'Customer Name')]/following-sibling::td");
    verifyGenderText = By.xpath("//td[contains(text(),'Gender')]/following-sibling::td");
    verifyDateText = By.xpath("//td[contains(text(),'Birthdate')]/following-sibling::td");
    verifyAddressText = By.xpath("//td[contains(text(),'Address')]/following-sibling::td");
    verifyCityText = By.xpath("//td[contains(text(),'City')]/following-sibling::td");
    verifyStateText = By.xpath("//td[contains(text(),'State')]/following-sibling::td");
    verifyPinText = By.xpath("//td[contains(text(),'Pin')]/following-sibling::td");
    verifyMobileText = By.xpath("//td[contains(text(),'Mobile No.')]/following-sibling::td");
    verifyEmailText = By.xpath("//td[contains(text(),'Email')]/following-sibling::td");
}
module.exports = new registerCustomerUI();
