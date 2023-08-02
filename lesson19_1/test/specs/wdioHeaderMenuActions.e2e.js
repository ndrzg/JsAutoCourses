describe('test suite for webdriverio Header Menu actions', function() {
  beforeEach(async () => {
    await browser.url('https://webdriver.io/');
  });

  it('verifies that theme changes from dark to light by clicking on theme switcher', async () => {
    const switchThemeButton = await $('.clean-btn.toggleButton_gllP');
    await switchThemeButton.click();
    const backgroundBody = await $('.plugin-pages.plugin-id-default');
    await expect(backgroundBody).toHaveAttribute('data-theme', 'light');
  });

  it('verifies that possible to find getText guide in api', async () => {
    const searchButton = await $('.DocSearch-Button-Container');
    await expect(searchButton).toBeExisting();
    await searchButton.click();
    const searchInput = await $('.DocSearch-Input');
    await searchInput.setValue('getText');
    const searchResult = await $('#docsearch-item-0 > a[href="/docs/api/element/getText/"]');
    await searchResult.click();
    const articleTitle = await $('//h1[contains(., \'get\')]');
    const articleTitleText = await articleTitle.getText();
    await expect(articleTitleText).toEqual('getText');
  });

  it('verifies that it is possible to change api version to previous (7)', async () => {
    const versionButton = await $('a[href="/versions"]');
    await versionButton.click();
    const pastVersion7 = await $('a[href="https://v7.webdriver.io"]');
    await pastVersion7.click();
    const v7url = await browser.getUrl();
    await expect(v7url).toEqual('https://v7.webdriver.io/');
  });
});
