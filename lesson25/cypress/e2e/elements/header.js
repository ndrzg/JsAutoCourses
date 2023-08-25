class Header {
    constructor(){
        this.apiHeaderButton = () => cy.get('.navbar__link--active');
        this.sideBarMenu= () => cy.get('.theme-doc-sidebar-menu');
        this.switchThemeButtn = () =>  cy.get('.colorModeToggle_DEke')
        this.body = () => cy.get('body')
        this.searchingResults = () => cy.get('.DocSearch-Dropdown');
        this.searchButton= () => cy.get('.DocSearch');
        this.searchInputField = () => cy.get('#docsearch-input');
        this.searchingResults = () => cy.get('.DocSearch-Dropdown');
        this.searchingResultsUrl = () => cy.url();
    }


    enterSearchRequest(searchReqeust){
        this.searchButton().click()
        this.searchInputField().type(searchReqeust)
    }
    selectSearchingResult(searchingItem){
        this.searchingResults().contains(searchingItem).click()
    }
    verifyUrlAndResult(searchingItem){
        this.searchingResultsUrl().should('eq', Cypress.env('searchingResultUrl'))
        this.docsPageBody().should("contain",searchingItem)
    }
    switchTheme(){
        this.switchThemeButtn().click()
    }
    openSearchByHotKeys(){
        this.apiHeaderButton().type('{cmd}k')
        this.searchingResults().contains("No recent searches")
        this.body().trigger('keydown', { keyCode: 27 })
    }
    verifyOpenedSearchModal(){
        this.searchingResults().contains("No recent searches")
    }
 
    verifyMessageForNonExistingSearchingResult(searchingItem){
        this.searchingResults().contains('No results for')
    }

}

module.exports = new Header();