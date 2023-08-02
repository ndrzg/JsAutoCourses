const { describe}  =require('mocha')
const {expect} = require('chai')
const { Builder, By, Actions, Key,until } = require("selenium-webdriver")



describe.only('test suite for search element on chromedriver site', function(){
    let driver
    
    before(async()=>{

        driver = new Builder().forBrowser('chrome').build()

    })
    
    after(async()=>{
         await driver.quit()
    })
    
    it('checks that first result of search contains searched text (driver)', async ()=> {
        await driver.get('https://chromedriver.chromium.org/home');

        const searchButton = await driver.findElement(By.css('.RBEWZc'))
        await searchButton.click()
        await driver.sleep(1000)
        const searchField = await driver.wait(until.elementLocated(By.css("input[type='search']")), 5000)
        await searchField.sendKeys('driver', Key.ENTER)
        await driver.sleep(1000)
        const firstLinkInResult = await driver.findElement(By.xpath("//div[@class='gtazFe'][1]"))
        expect(await firstLinkInResult.getText()).to.contains('driver')

    })

})