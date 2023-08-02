describe('test suite for webdriverio Main page', function() {
  beforeEach(async () => {
    await browser.url('https://webdriver.io/');
  });
  it('verifies that homepage contains Get Started button which redirects to the Get Started guide', async ()=>{
    const getStartedButton = await $('a.button--lg:nth-child(1)');
    await expect(getStartedButton).toBeExisting();
    const text = await getStartedButton.getText();
    const buttonUrl = await getStartedButton.getAttribute('href');
    await expect(text).toEqual('Get Started');
    await getStartedButton.click();
    const currentURL = await browser.getUrl();
    await expect(currentURL).toEqual('https://webdriver.io'+buttonUrl);
  });
  it('verifies that Get Started block is displayed on main screen', async ()=>{
    const getStartedBlock = await $('.highlightSection');
    await getStartedBlock.scrollIntoView();
    const howToInitWdioCommand = await $('//code[contains(., \'npm\')]').getText();
    await expect(howToInitWdioCommand).toEqual('$ npm init wdio@latest ./');
  });
});
