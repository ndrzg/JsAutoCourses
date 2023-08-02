const { describe}  =require('mocha')
const {expect} = require('chai')
const { Builder, By, Actions, Key,until } = require("selenium-webdriver")



describe('test suite for checking page urls', function(){
    let driver
    
    before(async()=>{

        driver = new Builder().forBrowser('chrome').build()

    })
    
    after(async()=>{
         await driver.quit()
    })
    
    it(' wirifies that Mobile Emulation page has correct url /mobile-emulation', async ()=> {

        await driver.get('https://chromedriver.chromium.org/home');


        const moreMenuButton= await driver.findElement(By.css('.VsJjtf.oXBWEc'))
        await moreMenuButton.click()

       
        const mobileEmulationSubMenuButton = await driver.findElement(By.linkText('Mobile Emulation'))
        await mobileEmulationSubMenuButton.click()

        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.include('/mobile-emulation')

    })

})


