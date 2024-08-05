/// <reference types="cypress" />

const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
import userData from "../../fixtures/userData.json";
import LoginPage from "../../support/pageObjects/LoginPO.cy";
const loginPage = new LoginPage()
import MyAccount from "../../support/pageObjects/myAccount.cy";
const myAccount = new MyAccount()

Given('the User is on Login Page', () => {
    cy.visit('')
    loginPage.navigateTo
    loginPage.confirmOnPage
})

Given('Sing In button is displayed', () => {
    cy.isDisplayed(loginPage.signInButton)
})

When('the User enters their Username and Password', () => {
    cy.typeAssert(loginPage.loginName, userData.login)
    cy.typeAssert(loginPage.loginPassword, userData.password)
})

When('the User click Sing In button', () => {
    loginPage.signInButton.click()
})

Then('the User is authenticated', () => {
    myAccount.authenticatedLocator.then(function(ele) {
        const autenticationText = ele.text()
        expect(autenticationText.includes(userData.firstName)).to.be.true
    })
})

Then('the User is on the account page', () => {
    cy.isDisplayed(myAccount.myAccountConfirmation)
})

When('User enter incorrect email: {string} or password: {string}', (email, password) => {
    if (email != "BLANK") {
    cy.typeAssert(loginPage.loginName, email) }
    if (password != "BLANK") {
    cy.typeAssert(loginPage.loginPassword, password) }
})

Then('User should see correct error {string}', (error) => {
    loginPage.loginError.should("include.text", error)
})