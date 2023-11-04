
const registerPage = require('../pageUI/registerAccessUI');
const loginPage = require('../pageUI/loginUI');
const assert = require('assert');
const { Builder } = require('selenium-webdriver');
const { verify } = require('crypto');

var driver;
describe('Register', () => {
    // Chạy trước mỗi it (test case)
    beforeEach(() => {
        // Open browser Chrome
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
        // Access link
        driver.get('https://demo.guru99.com/v4/');
        
    })

    afterEach(async () => {
        await driver.quit();
    })

    it('Register success', async () => {
        let emailActual = emailInputText('a@gmail.com');
        
        await register(
            registerPage.hereLink,
            registerPage.frame_1,
            registerPage.frame_2,
            registerPage.x_Button,
            registerPage.close_Button,
            registerPage.emailInput,
            registerPage.submitButton,
            emailActual.email
        );
        let actualTextTitleAccess = await driver.findElement(registerPage.textTitleAccess).getText();
        let expectTextTitleAccess = "Access details to demo site.";
        assert.equal(actualTextTitleAccess,expectTextTitleAccess);
        
        let userIDText = await driver.findElement(registerPage.userIDText).getText();
        console.log(userIDText);
        let passwordText = await driver.findElement(registerPage.passwordText).getText();
        console.log(passwordText);
        await driver.get('https://demo.guru99.com/v4/')
        let inputLogin = loginInput(userIDText,passwordText);
        await login(
            loginPage.userInput,
            loginPage.passwordInput,
            loginPage.loginButton,
            inputLogin.user,
            inputLogin.password,
        );
        driver.sleep(1000);
        let textLoginSuccess = await driver.findElement(loginPage.textLoginSuccess).getText();
        console.log(textLoginSuccess);
        assert.equal(textLoginSuccess,"Welcome To Manager's Page of Guru99 Bank");
    })
})

function emailInputText(emailInput) {
    let email;
    email = emailInput;
    return {
        email
    }
}
function loginInput(userIDText,passwordText) {
    let user,password;
    user = userIDText;
    password = passwordText; 
    return {
        user,
        password
    }
}
async function register(hereLink,frame_1,frame_2,x_Button,close_Button,emailInput,submitButton,email) {
    await driver.sleep(1000);
    await driver.findElement(hereLink).click();
    await driver.sleep(5000);
    await blockAds(frame_1,frame_2,x_Button,close_Button);
    await driver.findElement(emailInput).sendKeys(email);
    await driver.sleep(1000);
    await driver.findElement(submitButton).click();
    // await driver.sleep(1000);
    // await driver.findElement(textTitle).getText();
    // await driver.sleep(1000);
    // await driver.findElement(passwordText).getText();
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

async function login(userIDLogin, passwordLogin,loginButton,valueUserID,valuePassword){
    await driver.sleep(1000);
    await driver.findElement(userIDLogin).sendKeys(valueUserID);
    await driver.sleep(1000);
    await driver.findElement(passwordLogin).sendKeys(valuePassword);
    await driver.sleep(1000);
    await driver.findElement(loginButton).click();

}
    
