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


Given('User is on the homepage of the e-commerce site', () => {
    loginPage.logIn()
    mainSite.navigateTo
})

When('User enter "cream" into the search bar', () => {
    cy.typeAssert(searchBar.searchInput, searchData.basicSearch)
    searchBar.searchButton.click()
})

Then('User should see relevant search results for creams', () => {
    searchResults.resultsList.then(titles => {
        for(let title of titles){
            let productName = (title.text).toLowerCase()
            expect(productName.includes(searchData.basicSearch)).to.be.true
        }
    })
})

Given('User submit an empty search query', () => {
    searchBar.searchButton.click()
})

Then('User should see a message indicating that no search results were found', () => {
    searchResults.resultsList.should("not.exist")
})

When('User enters "shaving cream" into the search bar', () => {
    cy.typeAssert(searchBar.searchInput, searchData.multiWordSearch)
    searchBar.searchButton.click()
})

Then('User should see relevant search results for toilette spray', () => {
    searchResults.resultsList.then(titles => {
        for(let title of titles){
            let productName = (title.text).toLowerCase()
            let keyWordsArray = searchData.multiWordSearch
            let firstWord = keyWordsArray[0]
            let secondWord = keyWordsArray[1]
            if(productName.includes(firstWord) || productName.includes(secondWord)) {
                cy.log('ok')
            } else {cy.contains("Sorry, something went wrong")}

            
        }
    })
})
