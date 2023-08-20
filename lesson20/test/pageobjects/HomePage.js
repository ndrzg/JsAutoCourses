const DocumentationPage = require('../pageobjects/DocumentationPage');
class HomePage {
    get getStartedButton() {
        return $('a.button--lg:nth-child(1)');
    }
    get getStartedBlock() {
        return $('.highlightSection');
    }
    get backgroundBody() {
        return $('.plugin-pages.plugin-id-default');
    }
    get howToInitWdioCommandBlock() {
        return  $('div.prism-code.language-bash.codeBlock_tuNs');
    }

    
    async checksBackGroundColor() {
        await expect(this.backgroundBody).toHaveAttribute('data-theme', 'light');
    }
    async checksHowToInitWdioCommandIsDisplayed(){
        await expect(this.howToInitWdioCommandBlock.getText()).toEqual('$ npm init wdio@latest ./');
    }

    async checksGetStartedButtonExists() {
        await expect(this.getStartedButton).toBeExisting();
    }
    async clickGetStartedButton() {
        await this.getStartedButton.waitForClickable();
        await this.getStartedButton.click();
    }

    async getStartedButtonOpensDocs() {
        const buttonUrl = await getStartedButton.getAttribute('href')
        await expect(DocumentationPage.documentationPageUrl).toEqual('https://webdriver.io'+buttonUrl);
    }

  }
  
  module.exports = new HomePage();
  