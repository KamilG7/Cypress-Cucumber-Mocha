/// <reference types="cypress" />


class MyAccount {

    get myAccountConfirmation() {
        return cy.get('span').contains('My Account')
    }
    
    get authenticatedLocator() {
        return cy.get('span[class="subtext"]')
    }

    }
    
    export default MyAccount