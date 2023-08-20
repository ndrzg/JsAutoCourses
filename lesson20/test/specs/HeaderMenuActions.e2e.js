const HomePage = require('../pageobjects/HomePage');
const Header = require('../pageobjects/components/header');
const Search = require('../pageobjects/components/searchComponent');
const DocumentationPage = require('../pageobjects/DocumentationPage');

describe.skip('test suite for webdriverio Header Menu actions', function() {
    beforeEach(async () => {
      await browser.url('https://webdriver.io/');
    });
  
    it('verifies that theme changes from dark to light by clicking on theme switcher', async () => {
      await Header.clickSwitchThemeButton();
      await HomePage.checksBackGroundColor();
    });
  
    it('verifies that possible to find getText guide in api', async () => {
      await Header.clickSearchButton();
      await Search.inputTextIntoSearchField('getText');
      await Search.clickSearchResult();
      await DocumentationPage.verifiesArticleTitleTextMatchSearch();
    });
  });