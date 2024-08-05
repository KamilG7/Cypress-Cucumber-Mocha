/// <reference types="cypress" />
import userData from "../../fixtures/userData.json"
import MyAccount from "../../support/pageObjects/myAccount.cy";
const myAccount = new MyAccount()


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

    logIn() {
        cy.visit('')
        this.navigateTo
        this.confirmOnPage
        cy.isDisplayed(this.signInButton)
        cy.typeAssert(this.loginName, userData.login)
        cy.typeAssert(this.loginPassword, userData.password)
        this.signInButton.click()
        myAccount.authenticatedLocator.then(function(ele) {
            const autenticationText = ele.text()
            expect(autenticationText.includes(userData.firstName)).to.be.true
        })
    }

    }
    
    export default LoginPage