const { describe}  =require('mocha')
const {expect} = require('chai')
const { Builder, By, Actions, Key,until } = require("selenium-webdriver")



describe('test suite for checking page titles', function(){
    let driver
    
    before(async()=>{

        driver = new Builder().forBrowser('chrome').build()

    })
    
    after(async()=>{
         await driver.quit()
    })
    
    it('checks title for main page and than for Chrome Extensions page with changing bg color', async ()=> {

        await driver.get('https://chromedriver.chromium.org/home');

        const headerMainPage = await driver.findElement(By.css('.Rn3Z1b.C9DxTc'))
        expect( await headerMainPage.getText()).to.equal('ChromeDriver') 

        const headerButtonChromeExtensions =  await driver.findElement(By.xpath("(//*[@class='aJHbb dk90Ob jgXgSe HlqNPb'])[3]"))
        await headerButtonChromeExtensions.click()

        const headerCromeExtensionsPage = await driver.findElement(By.css('span.Rn3Z1b'))
        await driver.executeScript("arguments[0].style.backgroundColor = 'red'", headerCromeExtensionsPage)
        expect( await headerCromeExtensionsPage.getText()).to.equal('Chrome Extensions') 

    })

})


