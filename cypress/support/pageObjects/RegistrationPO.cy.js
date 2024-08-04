/// <reference types="cypress" />

class RegistrationPage {

get loginPageLocator () {
    return cy.contains("Login or register")
}

get lognPageConfirmation () {
    return cy.get("h2").contains("I am a new customer")
}

get registrationPageLocator () {
    return cy.get("button[title='Continue']")
}

get registrationPageConfirmation () {
    return cy.get("span").contains('Create Account')
}

get nameInput () {
    return cy.get('[id="AccountFrm_firstname"]')
}

get lastNameInput () {
    return cy.get('[id="AccountFrm_lastname"]')
}

get emailInput () {
    return cy.get('[id="AccountFrm_email"]')
}

get addressInput () {
    return cy.get('[id="AccountFrm_address_1"]')
}

get cityInput () {
    return cy.get('[id="AccountFrm_city"]')
}

get stateSelect() {
    return cy.get('[id="AccountFrm_zone_id"]')
}

get postcodeInput() {
    return cy.get('[id="AccountFrm_postcode"]')
}

get countrySelect() {
    return cy.get('[id="AccountFrm_country_id"]')
}

get loginInput() {
    return cy.get('[id="AccountFrm_loginname"]')
}

get passwordInput () {
    return cy.get('[id="AccountFrm_password"]')
}

get passwordConfirmInput () {
    return cy.get('[id="AccountFrm_confirm"]')
}

get policyCheckbox() {
    return cy.get('[id="AccountFrm_agree"]')
}

get formSubmitButton() {
    return cy.get('button').contains('Continue')
}

navigateTo() {
     this.loginPageLocator.click()
     cy.isDisplayed(this.lognPageConfirmation)
     this.registrationPageLocator.click()
     cy.isDisplayed(this.registrationPageConfirmation)
}


}

export default RegistrationPage