class LoginPage {
    constructor(){
        this.emailField = () => cy.get('#email');
        this.passwordField = () => cy.get('#password');
        this.logInButton = () => cy.get('.btn-primary');
        this.errorMessage = () => cy.get('.error-message');
        this.loggedInUrl = ()=> cy.url();
        this.loginWithEmail = () => cy.get('.btn-provider-email');
        this.profileEmail = () => cy.get('.user-info > :nth-child(2)');
        this.loginWithGitHub = () => cy.get('.btn-provider-github');
        this.loginWithGoogle = () => cy.get('.btn-provider-google');
        this.loginWithSSO = () => cy.get('.btn-provider-sso');
        


    }

    enterEmail(email){
        this.emailField().type(email)
    }
    enterPassword(password){
        this.passwordField().type(password)
    }
    clickLoginButton(){
        this.logInButton().click()
    }

    verifyErrorMessage(errorMessage){
        this.errorMessage().should('contain', errorMessage)
    }
    verifySuccessfulLogin(){
        this.profileEmail().should("contain",Cypress.env('emailSuccessLogin'))
    }
    verifyLoggedInUrl(){
        this.loggedInUrl().should('contain', "https://cloud.cypress.io/organizations")
    }


    selectLoginType(type){
        switch (type) {
            case 'loginWithEmail':
                this.loginWithEmail().click();
                break;
            case 'loginWithGitHub':
                this.loginWithGitHub().click();
                break;
            case 'loginWithGoogle':
                this.loginWithGoogle().click();
                break;
            case 'loginWithSSO':
                this.loginWithSSO().click();
                break;
        }
    }
}

module.exports = new LoginPage();
  