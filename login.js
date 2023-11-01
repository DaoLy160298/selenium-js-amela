const InventoryPage = require('./pages/InventoryPage');
const LoginPage = require('./pages/LoginPage');
const assert = require('assert');
const { Builder } = require('selenium-webdriver');

var driver;
describe('Login', () => {
    // Chạy trước mỗi it (test case)
    beforeEach(() => {
        // Open browser Chrome
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
        // Access link
        driver.get('https://www.saucedemo.com');
    })

    afterEach(async () => {
        await driver.quit();
    })

    it('Login success', async () => {
        let credential = initCredentialValue('standard_user', 'secret_sauce');
        let expectedInventoryHeader = 'Swag Labs';

        await login(
            LoginPage.inputUsername,
            LoginPage.inputPassword,
            LoginPage.buttonLogin,
            credential.username,
            credential.password
        );

        let actualInventoryHeader = await driver.findElement(InventoryPage.header).getText();
        
        assert.equal(actualInventoryHeader, expectedInventoryHeader);
        // assert.equal(actualInventoryHeader, expectedInventoryHeader,"loi sai");
        
        // assert.ok(actualInventoryHeader===expectedInventoryHeader, "loi text khong giong SRS");

        // await driver.findElement(InventoryPage.butttonAddToCart).click();
        // await driver.sleep(500);
        // let countText = await driver.findElement(InventoryPage.textCountProduct).getText();
        // assert.equal(countText,"2","Mua that bai");
        // driver.getCurrentUrl() === ""
        await driver.findElement(LoginPage.menuButton).click();
        await driver.sleep(1000);
        await driver.findElement(LoginPage.loginButtonMenu).click();
        await driver.sleep(500);
        console.log(await driver.getCurrentUrl());
        assert.equal(await driver.getCurrentUrl(),"https://www.saucedemo.com/");
    })

//     it('Login failure without username', async () => {
//         let credential = initCredentialValue('', 'secret_sauce');
//         let expectedLoginError = 'Epic sadface: Username is required';
        
//         await login(
//             LoginPage.inputUsername,
//             LoginPage.inputPassword,
//             LoginPage.buttonLogin,
//             credential.username,
//             credential.password
//         );
//         let actualLoginError = await driver.findElement(LoginPage.loginError).getText();
//         assert.equal(actualLoginError, expectedLoginError);
//     })

//     it('Login failure without password', async () => {
//         let credential = initCredentialValue('standard_user', '');
//         let expectedLoginError = 'Epic sadface: Password is required';
        
//         await login(
//             LoginPage.inputUsername,
//             LoginPage.inputPassword,
//             LoginPage.buttonLogin,
//             credential.username,
//             credential.password
//         );
//         let actualLoginError = await driver.findElement(LoginPage.loginError).getText();
//         assert.equal(actualLoginError, expectedLoginError);
//     })

//     it('Login failure without both username and password', async () => {
//         let credential = initCredentialValue('', '');
//         let expectedLoginError = 'Epic sadface: Username is required';
        
//         await login(
//             LoginPage.inputUsername,
//             LoginPage.inputPassword,
//             LoginPage.buttonLogin,
//             credential.username,
//             credential.password
//         );
//         let actualLoginError = await driver.findElement(LoginPage.loginError).getText();
//         assert.equal(actualLoginError, expectedLoginError);
//     })

//     it('Login failure with invalid username or invalid password', async () => {
//         let credential = initCredentialValue('test', 'test');
//         let expectedLoginError = 'Epic sadface: Username and password do not match any user in this service';
        
//         await login(
//             LoginPage.inputUsername,
//             LoginPage.inputPassword,
//             LoginPage.buttonLogin,
//             credential.username,
//             credential.password
//         );
//         let actualLoginError = await driver.findElement(LoginPage.loginError).getText();
//         assert.equal(actualLoginError, expectedLoginError);
//     })
})

function initCredentialValue(inputUsername, inputPassword) {
    let username;
    let password;
    if (inputUsername == undefined) {
        username = 'standard_user';
    } else if (inputPassword == undefined) {
        password = 'secret_sauce';
    } else {
        username = inputUsername;
        password = inputPassword;
    }

    return {
        username,
        password
    }
}

async function login(inputUsername, inputPassword, buttonLogin, username, password) {
    await driver.sleep(1000);
    await driver.findElement(inputUsername).sendKeys(username);
    await driver.sleep(1000);
    await driver.findElement(inputPassword).sendKeys(password);
    await driver.sleep(1000);
    await driver.findElement(buttonLogin).click();
}
