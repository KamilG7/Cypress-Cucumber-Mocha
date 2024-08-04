/// <reference types="cypress" />

class PostRegistrationPage {

    get reigstrationSuccessfulConfirm () {
        return cy.contains('Your Account Has Been Created!')
    }

    get dashboardConfirmation() {
        return cy.contains('My Account')
    }
    
    }
    
    export default PostRegistrationPage