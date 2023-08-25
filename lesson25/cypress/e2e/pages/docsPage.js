class DocsPage {
    constructor(){
        this.privacyPopUpCloseButon = () => cy.get('.osano-cm-dialog__close.osano-cm-close');
        
        // this.searchButton= () => cy.get('.DocSearch');
        // this.searchInputField = () => cy.get('#docsearch-input');
        // this.searchingResults = () => cy.get('.DocSearch-Dropdown');
        this.searchingResultsUrl = () => cy.url();
        this.docsPageBody = () => cy.get('.docItemCol_VOVn')
        this.darkTheme = () => cy.get('html[data-theme=dark]')
        
    }

    clickprivacyPopUpCloseButon(){
        this.privacyPopUpCloseButon().click()
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
    verifyMessageForNonExistingSearchingResult(){
        this.searchingResults().contains('No results for')
    }
    verifyThatThemeSwitched(){
        this.darkTheme().should('exist');
    }

}

module.exports = new DocsPage();
  