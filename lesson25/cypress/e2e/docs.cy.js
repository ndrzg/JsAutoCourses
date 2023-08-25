const docsPage = require('../e2e/pages/docsPage');
const header = require('../e2e/elements/header');

describe('Suite for login functionalities', ()=> {
    const searchingItem = "Using Page Objects"
    beforeEach(() => {
          cy.visit(Cypress.env('docsUrl'))
        })

    it('Verifies sucessful searching for existing page', ()=>{
        header.enterSearchRequest(searchingItem)
        header.selectSearchingResult(searchingItem)
        docsPage.verifyUrlAndResult(searchingItem)
    })
    it('Verifies  searching for unexisting page', () => {
        header.enterSearchRequest('NonExistingPageExample')
        header.verifyMessageForNonExistingSearchingResult()
    })
    it('Verfies that search can be opened by hot keys', ()=>{
        header.openSearchByHotKeys()

    })
    it("Verifies that its possible to switch theme", () => {
        header.switchTheme()
        docsPage.verifyThatThemeSwitched()
    })


})