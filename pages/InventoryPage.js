const { By } = require('selenium-webdriver');

class InventoryPage {
    header = By.className('app_logo');
    butttonAddToCart = By.className("btn_inventory");
    textCountProduct = By.xpath("//div[@id='shopping_cart_container']/a/span")
}

module.exports = new InventoryPage();
