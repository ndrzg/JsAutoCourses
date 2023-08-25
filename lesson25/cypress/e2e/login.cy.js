//const { enterEmail } = require('../e2e/pages/loginPage');
const loginPage = require('../e2e/pages/loginPage');

describe('Suite for login functionalities', ()=> {

    beforeEach(() => {
          cy.visit(Cypress.env('loginUrl'))
        })

    it('Verifies sucessful login with valid credentails', ()=>{
        loginPage.selectLoginType("loginWithEmail")
        loginPage.enterEmail(Cypress.env('emailSuccessLogin'))
        loginPage.enterPassword(Cypress.env('passwordSuccessLogin'))
        loginPage.clickLoginButton()
        loginPage.verifySuccessfulLogin()
        loginPage.verifyLoggedInUrl()
    })
    it('Verifies that error message displayes when incorrect credentials are entered', () => {
        loginPage.selectLoginType('loginWithEmail')
        loginPage.enterEmail(Cypress.env('emailFailedLogin'))
        loginPage.enterPassword(Cypress.env('passwordFailedLogin'))
        loginPage.clickLoginButton()
        loginPage.verifyErrorMessage(Cypress.env('error_message_failedLogin'))
    })
    


})