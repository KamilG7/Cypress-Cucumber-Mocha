/// <reference types="cypress" />

class SearchResults {

    get resultsList() {
        return cy.get('[class="prdocutname"][title]')
    }

    }
    
    export default SearchResults