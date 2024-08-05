/// <reference types="cypress" />

class LoginPage {

    get navigateTo() {
        return cy.contains("Login or register").click()
    }
    
    get confirmOnPage() {
        return cy.isDisplayed(cy.get("h2").contains("I am a new customer"))
    }
    
    get signInButton() {
        return cy.get('button').contains('Login')
    }

    get loginName() {
        return cy.get('[id="loginFrm_loginname"]')
    }

    get loginPassword() {
        return cy.get('[id="loginFrm_password"]')
    }
    
    get loginError() {
        return cy.get('div[class="alert alert-error alert-danger"]')
    }
    }
    
    export default LoginPage