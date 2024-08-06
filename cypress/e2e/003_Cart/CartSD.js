/// <reference types="cypress" />

const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
import searchData from "../../fixtures/searchData.json"
import LoginPage from "../../support/pageObjects/LoginPO.cy";
const loginPage = new LoginPage()
import SearchBar from "../../support/pageObjects/SearchBarPO.cy";
const searchBar = new SearchBar()
import MainSite from "../../support/pageObjects/mainSitePO.cy";
const mainSite = new MainSite()
import SearchResults from "../../support/pageObjects/searchResultsPO.cy";
const searchResults = new SearchResults()
import Cart from "../../support/pageObjects/CartPO.cy";
const cart = new Cart()
let startingValue


Given('User is viewing a product', () => {
    loginPage.logIn()
    mainSite.navigateTo
    cy.typeAssert(searchBar.searchInput, searchData.basicSearch)
    searchBar.searchButton.click()
})

When('User click on the "Add to Cart" button', () => {
    searchResults.addToCart.eq(0).click()
})

Then('the product should be added to Users cart', () => {
    mainSite.navigateTo
    mainSite.cartButton.click()
    cy.isDisplayed(cart.removeIcon)
    cart.removeIcon.click()
    cy.isDisplayed(cart.cartEmpty)
})

Given('User added products to cart', () => {
    loginPage.logIn()
    mainSite.navigateTo
    cy.typeAssert(searchBar.searchInput, searchData.basicSearch)
    searchBar.searchButton.click()
    searchResults.addToCart.eq(0).click()
})

When('User increase the quantity of a product to 2', () => {
    mainSite.navigateTo
    mainSite.cartButton.click()
    cart.singleInput.invoke("attr", "value").then(value => {
        startingValue = value
        cy.typeAssert(cart.singleInput, 2)
    })
    cart.refreshButton.click()
    cart.singleInput.should("have.value", 2)
})

Then('the quantity of the product in Users cart should be updated to 2', () => {
    cart.singleInput.invoke("attr", "value").then(value => {
        if(value != startingValue) {
            cy.log("starting: " + startingValue + ", final Value: " + value)
    cart.removeIcon.click()
        }
    })
})

Given('User have products in cart', () => {
    loginPage.logIn()
    mainSite.navigateTo
    cy.typeAssert(searchBar.searchInput, searchData.basicSearch)
    searchBar.searchButton.click()
    searchResults.addToCart.eq(0).click()
})

When('User click on the remove button next to a product', () => {
    mainSite.navigateTo
    mainSite.cartButton.click()
    cy.isDisplayed(cart.removeIcon)
    cart.removeIcon.click()
})

Then('the product should be removed from cart', () => {
    cy.isDisplayed(cart.cartEmpty)
})