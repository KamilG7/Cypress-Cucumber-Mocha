/// <reference types="cypress" />

class SearchBar {

    get searchInput() {
        return cy.get("[id='filter_keyword']")
    }

    get searchButton() {
        return cy.get('[class="button-in-search"]')
    }

    }
    
    export default SearchBar