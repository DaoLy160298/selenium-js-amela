const { By } = require('selenium-webdriver');
class loginPage{
    userInput = By.xpath("//input[@name='uid']");
    passwordInput = By.xpath("//input[@name='password']");
    loginButton = By.name("btnLogin");
    textLoginSuccess = By.xpath("//marquee[contains(text(),'Welcome To Manager')]");
   
}
module.exports = new loginPage();