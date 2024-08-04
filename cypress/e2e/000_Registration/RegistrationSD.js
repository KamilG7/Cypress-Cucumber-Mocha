/// <reference types="cypress" />

const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
import RegistrationPage from "../../support/pageObjects/RegistrationPO.cy"
const registrationPage = new RegistrationPage()
import userData from "../../fixtures/userData.json"
import PostRegistrationPage from "../../support/pageObjects/postRegistrtionPO.cy";
const postRegistrationPage = new PostRegistrationPage()


Given('I am on the registration page', () => {
    cy.visit("")
    registrationPage.navigateTo()
})

When('I fill in the registration form with valid details', () => {
    cy.typeAssert(registrationPage.nameInput, userData.firstName)
    cy.typeAssert(registrationPage.lastNameInput, userData.lastName)
    cy.typeAssert(registrationPage.emailInput, userData.email)
    cy.typeAssert(registrationPage.addressInput, userData.address)
    cy.typeAssert(registrationPage.cityInput, userData.city)
    cy.typeAssert(registrationPage.postcodeInput, userData.postcode)
    cy.typeAssert(registrationPage.loginInput, userData.login)
    cy.typeAssert(registrationPage.passwordInput, userData.password)
    cy.typeAssert(registrationPage.passwordConfirmInput, userData.password)
    registrationPage.countrySelect.select(userData.country)
    registrationPage.stateSelect.select(userData.state)
    registrationPage.policyCheckbox.click().should("be.checked")
})

When('I click the register button', () => {
    registrationPage.formSubmitButton.click()
})

Then('I should be redirected to the dashboard', () => {
    cy.isDisplayed(postRegistrationPage.dashboardConfirmation)
})

Then('I should see a welcome message', () => {
    cy.isDisplayed(postRegistrationPage.reigstrationSuccessfulConfirm)
})