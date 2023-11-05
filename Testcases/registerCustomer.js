const loginPage = require('../pageUI/loginUI');
const registerCustomerPage = require('../pageUI/registerCustomerUI');
const registerPage = require('../pageUI/registerAccessUI');
const assert = require('assert');
const { Builder } = require('selenium-webdriver');
const { verify } = require('crypto');
const registerCustomerUI = require('../pageUI/registerCustomerUI');
var driver;
describe('Register', () => {
    // Chạy trước mỗi it (test case)
    beforeEach(() => {
        // Open browser Chrome
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
        // Access link
        driver.get('https://demo.guru99.com/v4/');
        driver.sleep(1000);
        driver.findElement(loginPage.userInput).sendKeys('mngr474276');
        driver.sleep(1000);
        driver.findElement(loginPage.passwordInput).sendKeys('abc123@');
        driver.sleep(1000);
        driver.findElement(loginPage.loginButton).click();
        
    })

    afterEach(async () => {
        await driver.quit();
    })

    it('NewCustomer_01_Register_Customer_Success', async () => {
        let user = "anc";
        let date = "12/01/2000";
        let address = "aaaa";
        let city = "Ha Noi";
        let state = "nnnn";
        let pin = 111111;
        let mobile = "09876543";
        let email = await randomEmail();
        let password = "1234";
        
        await registerNewCustomer(
            registerCustomerPage.newCustomerMenu,
            registerPage.frame_1,
            registerPage.frame_2,
            registerPage.x_Button,
            registerPage.close_Button,
            registerCustomerPage.customerInput,
            registerCustomerPage.genderRadioButton ,
            registerCustomerPage.dateInput,
            registerCustomerPage.addressTextarea,
            registerCustomerPage.cityInput,
            registerCustomerPage.stateInput,
            registerCustomerPage.pinInput,
            registerCustomerPage.mobileInput,
            registerCustomerPage.emailInput,
            registerCustomerPage.passwordInput,
            registerCustomerPage.submitButton,
            user,
            date,
            address,
            city,
            state,
            pin,
            mobile,
            email,
            password
        )
        let textRegisterCustomerSucc = await driver.findElement(registerCustomerPage.textSuccessMessage).getText();
        assert.equal(textRegisterCustomerSucc, "Customer Registered Successfully!!!");
        let expectValueFormatDate = await driver.findElement(registerCustomerPage.verifyDateText).getText(); 
        console.log("Verify các giá trị đã nhập");
        assert.equal(await driver.findElement(registerCustomerPage.verifyCustomerNameText).getText(),user);
        assert.equal(await driver.findElement(registerCustomerPage.verifyGenderText).getText(),"female");
        assert.equal(await formatDate(date),expectValueFormatDate);
        console.log(await formatDate(date)===expectValueFormatDate);
        assert.equal(await driver.findElement(registerCustomerPage.verifyAddressText).getText(),address);
        assert.equal(await driver.findElement(registerCustomerPage.verifyCityText).getText(),city);
        assert.equal(await driver.findElement(registerCustomerPage.verifyStateText).getText(),state);
        assert.equal(await driver.findElement(registerCustomerPage.verifyPinText).getText(),pin);
        assert.equal(await driver.findElement(registerCustomerPage.verifyMobileText).getText(),mobile);
        assert.equal(await driver.findElement(registerCustomerPage.verifyEmailText).getText(),email);
    })
    it('NewCustomer_02_Customer_Name_Blank', async () => {
        let user = "";
        let date = "12/01/2000";
        let address = "aaaa";
        let city = "Ha Noi";
        let state = "nnnn";
        let pin = 111111;
        let mobile = "09876543";
        let email = await randomEmail();
        let password = "1234";
        
        await registerFail(
            registerCustomerPage.newCustomerMenu,
            registerPage.frame_1,
            registerPage.frame_2,
            registerPage.x_Button,
            registerPage.close_Button,
            registerCustomerPage.customerInput,
            registerCustomerPage.genderRadioButton ,
            registerCustomerPage.dateInput,
            registerCustomerPage.addressTextarea,
            registerCustomerPage.cityInput,
            registerCustomerPage.stateInput,
            registerCustomerPage.pinInput,
            registerCustomerPage.mobileInput,
            registerCustomerPage.emailInput,
            registerCustomerPage.passwordInput,
            user,
            date,
            address,
            city,
            state,
            pin,
            mobile,
            email,
            password
        )
        //verify text error
        let actualCustomerBlankText = await driver.findElement(registerCustomerPage.customerNameBlankMessage).getText();
        assert.equal(actualCustomerBlankText,'Customer name must not be blank');
       
    })
    it('NewCustomer_03_Date_Of_Birth_Blank', async () => {
        let user = "Dao Ly";
        let date = "";
        let address = "aaaa";
        let city = "Ha Noi";
        let state = "nnnn";
        let pin = 111111;
        let mobile = "09876543";
        let email = await randomEmail();
        let password = "1234";
        
        await registerFail(
            registerCustomerPage.newCustomerMenu,
            registerPage.frame_1,
            registerPage.frame_2,
            registerPage.x_Button,
            registerPage.close_Button,
            registerCustomerPage.customerInput,
            registerCustomerPage.genderRadioButton ,
            registerCustomerPage.dateInput,
            registerCustomerPage.addressTextarea,
            registerCustomerPage.cityInput,
            registerCustomerPage.stateInput,
            registerCustomerPage.pinInput,
            registerCustomerPage.mobileInput,
            registerCustomerPage.emailInput,
            registerCustomerPage.passwordInput,
            user,
            date,
            address,
            city,
            state,
            pin,
            mobile,
            email,
            password
        )
        //verify text error
        let actualDateBlankText = await driver.findElement(registerCustomerPage.dateBlankMessage).getText();
        assert.equal(actualDateBlankText,'Date Field must not be blank');
    })
    it('NewCustomer_04_Address_Of_Birth_Blank', async () => {
        let user = "Dao Ly";
        let date = "16/02/1998";
        let address = "";
        let city = "Ha Noi";
        let state = "nnnn";
        let pin = 111111;
        let mobile = "09876543";
        let email = await randomEmail();
        let password = "1234";
        
        await registerFail(
            registerCustomerPage.newCustomerMenu,
            registerPage.frame_1,
            registerPage.frame_2,
            registerPage.x_Button,
            registerPage.close_Button,
            registerCustomerPage.customerInput,
            registerCustomerPage.genderRadioButton ,
            registerCustomerPage.dateInput,
            registerCustomerPage.addressTextarea,
            registerCustomerPage.cityInput,
            registerCustomerPage.stateInput,
            registerCustomerPage.pinInput,
            registerCustomerPage.mobileInput,
            registerCustomerPage.emailInput,
            registerCustomerPage.passwordInput,
            user,
            date,
            address,
            city,
            state,
            pin,
            mobile,
            email,
            password
        )
        //verify text error
        let actualAddressBlankText = await driver.findElement(registerCustomerPage.addressBlankMessage).getText();
        assert.equal(actualAddressBlankText,'Address Field must not be blank');
    })
    it('NewCustomer_05_All_Fields_Blank', async () => {
        let user = "";
        let date = "";
        let address = "";
        let city = "";
        let state = "";
        let pin = "";
        let mobile = "";
        let email = "";
        let password = "123454";
        
        await registerFail(
            registerCustomerPage.newCustomerMenu,
            registerPage.frame_1,
            registerPage.frame_2,
            registerPage.x_Button,
            registerPage.close_Button,
            registerCustomerPage.customerInput,
            registerCustomerPage.genderRadioButton ,
            registerCustomerPage.dateInput,
            registerCustomerPage.addressTextarea,
            registerCustomerPage.cityInput,
            registerCustomerPage.stateInput,
            registerCustomerPage.pinInput,
            registerCustomerPage.mobileInput,
            registerCustomerPage.emailInput,
            registerCustomerPage.passwordInput,
            user,
            date,
            address,
            city,
            state,
            pin,
            mobile,
            email,
            password
        )
        await driver.findElement(registerCustomerPage.passwordInput).clear();
        let actualCustomerBlankText = await driver.findElement(registerCustomerPage.customerNameBlankMessage).getText();
        let actualDateBlankText = await driver.findElement(registerCustomerPage.dateBlankMessage).getText();
        let actualAddressBlankText = await driver.findElement(registerCustomerPage.addressBlankMessage).getText();
        let actualCityBlankText = await driver.findElement(registerCustomerPage.cityBlankMessage).getText();
        let actualStateBlankText = await driver.findElement(registerCustomerPage.stateBlankMessage).getText();
        let actualPinBlankText = await driver.findElement(registerCustomerPage.pinBlankMessage).getText();
        let actualMobileBlankText = await driver.findElement(registerCustomerPage.moblileBlankMessage).getText();
        let actualEmailBlankText = await driver.findElement(registerCustomerPage.emailBlankMessage).getText();
        let actualPasswordBlankText = await driver.findElement(registerCustomerPage.passwordBlankMessage).getText();
       
        assert.equal(actualCustomerBlankText,'Customer name must not be blank');
        assert.equal(actualDateBlankText,'Date Field must not be blank');
        assert.equal(actualAddressBlankText,'Address Field must not be blank');
        assert.equal(actualCityBlankText,'City Field must not be blank');
        assert.equal(actualStateBlankText,'State must not be blank');
        assert.equal(actualPinBlankText,'PIN Code must not be blank');
        assert.equal(actualMobileBlankText,'Mobile no must not be blank');
        assert.equal(actualEmailBlankText,'Email-ID must not be blank');
        assert.equal(actualPasswordBlankText,'Password must not be blank');

    })
    it('NewCustomer_06_Email_Wrong', async () => {
        let user = "Dao Ly";
        let date = "16/02/1998";
        let address = "So 3";
        let city = "Ha Noi";
        let state = "Single";
        let pin = 111111;
        let mobile = "09876543";
        let email = "dao@";
        let password = "1234";
        
        await registerFail(
            registerCustomerPage.newCustomerMenu,
            registerPage.frame_1,
            registerPage.frame_2,
            registerPage.x_Button,
            registerPage.close_Button,
            registerCustomerPage.customerInput,
            registerCustomerPage.genderRadioButton ,
            registerCustomerPage.dateInput,
            registerCustomerPage.addressTextarea,
            registerCustomerPage.cityInput,
            registerCustomerPage.stateInput,
            registerCustomerPage.pinInput,
            registerCustomerPage.mobileInput,
            registerCustomerPage.emailInput,
            registerCustomerPage.passwordInput,
            user,
            date,
            address,
            city,
            state,
            pin,
            mobile,
            email,
            password
        )
        let actualEmailBlankText = await driver.findElement(registerCustomerPage.emailBlankMessage).getText();
        assert.equal(actualEmailBlankText,'Email-ID is not valid');

    })
    it('NewCustomer_07_Reset_Button', async () => {
        let user = "Dao Ly";
        let date = "16/02/1998";
        let address = "So 3";
        let city = "Ha Noi";
        let state = "Single";
        let pin = 111111;
        let mobile = "09876543";
        let email = "dao@gmail.com";
        let password = "1234";
        
        await registerFail(
            registerCustomerPage.newCustomerMenu,
            registerPage.frame_1,
            registerPage.frame_2,
            registerPage.x_Button,
            registerPage.close_Button,
            registerCustomerPage.customerInput,
            registerCustomerPage.genderRadioButton ,
            registerCustomerPage.dateInput,
            registerCustomerPage.addressTextarea,
            registerCustomerPage.cityInput,
            registerCustomerPage.stateInput,
            registerCustomerPage.pinInput,
            registerCustomerPage.mobileInput,
            registerCustomerPage.emailInput,
            registerCustomerPage.passwordInput,
            user,
            date,
            address,
            city,
            state,
            pin,
            mobile,
            email,
            password
        )
        
        driver.findElement(registerCustomerPage.resetButton).click();
        driver.sleep(5000);
        //verify value in the input field
        let actualCustomerValue = await driver.findElement(registerCustomerPage.customerInput).getText();
        let actualDateValue = await driver.findElement(registerCustomerPage.dateInput).getText();
        let actualAddressValue = await driver.findElement(registerCustomerPage.addressTextarea).getText();
        let actualCityValue = await driver.findElement(registerCustomerPage.cityInput).getText();
        let actualStateValue = await driver.findElement(registerCustomerPage.stateInput).getText();
        let actualPinValue = await driver.findElement(registerCustomerPage.pinInput).getText();
        let actualMobileValue = await driver.findElement(registerCustomerPage.mobileInput).getText();
        let actualEmailValue = await driver.findElement(registerCustomerPage.emailInput).getText();
        let actualPasswordValue = await driver.findElement(registerCustomerPage.passwordInput).getText();
        assert.equal(actualCustomerValue,'');
        assert.equal(actualDateValue,'');
        assert.equal(actualAddressValue,'');
        assert.equal(actualCityValue,'');
        assert.equal(actualStateValue,'');
        assert.equal(actualPinValue,'');
        assert.equal(actualMobileValue,'');
        assert.equal(actualEmailValue,'');
        assert.equal(actualPasswordValue,'');

    })

});
async function randomEmail(){
    let randomString = Math.random().toString(36).substring(7); // Chuỗi ngẫu nhiên
    // let timestamp = new Date().getTime(); // Thời gian hiện tại
    let email = `user_${randomString}@gmail.com`; // Tạo email ngẫu nhiên
    return email;
}
async function formatDate(date){
    const parts = date.split('/');
    if (parts.length === 3) {
        const [dd, mm, yyyy] = parts;
        return `${yyyy}-${dd}-${mm}`;
    }
    return null; // Trả về null nếu chuỗi không phù hợp
}
async function blockAds(frame_1,frame_2,x_Button,close_Button){
    const frame1 = await driver.findElement(frame_1);
    await driver.switchTo().frame(frame1);
    const checkButtonX = await driver.findElements(x_Button);
    console.log("checkButtonX: " + checkButtonX.length);
    
    if (checkButtonX.length > 0) {
        await driver.findElement(x_Button).click();
    } else {
        const frame2 = await driver.findElement(frame_2);
        await driver.switchTo().frame(frame2);
        const checkButtonClose = await driver.findElements(close_Button);
        console.log("checkButtonClose: " + checkButtonClose.length);
        
        if (checkButtonClose.length > 0) {
            await driver.findElement(close_Button).click();
        } else {
            await driver.findElement(x_Button).click();
        }
    }
    await driver.switchTo().defaultContent();
}
async function registerNewCustomer(newCustomerMenu,frame_1,frame_2,x_Button,close_Button,customerNameInput,genderRadioButton,dateInput,addressTextarea,
    cityInput,stateInput,pinInput,mobileInput,emailInput,passwordInput,submitButton,
    customerName,date,address,city,state,pin,mobile,email,password){
    await driver.sleep(10000);
    await driver.findElement(newCustomerMenu).click();
    await driver.sleep(1000);
    await driver.sleep(5000);
    await blockAds(frame_1,frame_2,x_Button,close_Button);
    await driver.sleep(1000);
    await driver.findElement(customerNameInput).sendKeys(customerName);
    await driver.sleep(1000);
    await driver.findElement(genderRadioButton).click();
    await driver.sleep(1000);
    await driver.findElement(dateInput).sendKeys(date);
    await driver.sleep(1000);
    await driver.findElement(addressTextarea).sendKeys(address);
    await driver.sleep(1000);
    await driver.findElement(cityInput).sendKeys(city);
    await driver.sleep(1000);
    await driver.findElement(stateInput).sendKeys(state);
    await driver.sleep(1000);
    await driver.findElement(pinInput).sendKeys(pin);
    await driver.sleep(1000);
    await driver.findElement(mobileInput).sendKeys(mobile);
    await driver.sleep(1000);
    await driver.findElement(emailInput).sendKeys(email);
    await driver.sleep(1000);
    await driver.findElement(passwordInput).sendKeys(password);
    await driver.sleep(2000);
    await driver.findElement(submitButton).click();
}
async function registerFail(newCustomerMenu,frame_1,frame_2,x_Button,close_Button,customerNameInput,genderRadioButton,dateInput,addressTextarea,
    cityInput,stateInput,pinInput,mobileInput,emailInput,passwordInput,
    customerName,date,address,city,state,pin,mobile,email,password){
    await driver.sleep(10000);
    await driver.findElement(newCustomerMenu).click();
    await driver.sleep(1000);
    await driver.sleep(5000);
    await blockAds(frame_1,frame_2,x_Button,close_Button);
    await driver.sleep(1000);
    await driver.findElement(customerNameInput).sendKeys(customerName);
    await driver.sleep(1000);
    await driver.findElement(genderRadioButton).click();
    await driver.sleep(1000);
    await driver.findElement(dateInput).sendKeys(date);
    await driver.sleep(1000);
    await driver.findElement(addressTextarea).sendKeys(address);
    await driver.sleep(1000);
    await driver.findElement(cityInput).sendKeys(city);
    await driver.sleep(1000);
    await driver.findElement(stateInput).sendKeys(state);
    await driver.sleep(1000);
    await driver.findElement(pinInput).sendKeys(pin);
    await driver.sleep(1000);
    await driver.findElement(mobileInput).sendKeys(mobile);
    await driver.sleep(1000);
    await driver.findElement(emailInput).sendKeys(email);
    await driver.sleep(1000);
    await driver.findElement(passwordInput).sendKeys(password);
  
}