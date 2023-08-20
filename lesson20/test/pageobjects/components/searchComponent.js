class Search{


    get searchInput() {
        return $('.DocSearch-Input');
    }

    get searchResult() {
        return $('#docsearch-item-0 > a[href="/docs/api/element/getText/"]');
    }

    async inputTextIntoSearchField(text) {
        await this.searchInput.waitForClickable();
        await this.searchInput.setValue(text);
    }

    async clickSearchResult() {
        await this.searchResult.waitForClickable();
        await this.searchResult.click();
    }

}

module.exports = new Search();