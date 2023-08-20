const HomePage = require('../pageobjects/HomePage');


describe('test suite for webdriverio Main page', function() {
    beforeEach(async () => {
      await browser.url('https://webdriver.io/');
    });

    it('verifies that Get Started block is displayed on main screen', async ()=>{
        await HomePage.checksHowToInitWdioCommandIsDisplayed()
    });
  });