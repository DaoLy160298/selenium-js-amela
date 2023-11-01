const { By } = require('selenium-webdriver');

class LoginPage {
    inputUsername = By.id('user-name');
    inputPassword = By.id('password');
    buttonLogin = By.id('login-button');
    loginError = By.css('.error-message-container');
    menuButton = By.id('react-burger-menu-btn');
    loginButtonMenu = By.id('logout_sidebar_link');
}

module.exports = new LoginPage();
