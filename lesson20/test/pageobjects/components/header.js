class Header{
    get switchThemeButton() {
        return $('.clean-btn.toggleButton_gllP');
    }
    get searchButton() {
        return $('.DocSearch-Button-Container');
    }
    get versionButton() {
        return $('a[href="/versions"]');
    }
    async clickSwitchThemeButton() {
        await this.switchThemeButton.waitForClickable();
        await this.switchThemeButton.click();
    }
    async clickSearchButton() {
        await this.searchButton.waitForClickable();
        await this.searchButton.click();
    }

    async clickVersionButton() {
        await this.versionButton.waitForClickable();
        await this.versionButton.click();
    }
}

module.exports = new Header();