/// <reference types="cypress" />

class SearchResults {

    get resultsList() {
        return cy.get('[class="prdocutname"][title]')
    }

    get addToCart() {
        return cy.get('a[title="Add to Cart"]')
    }

    }
    
    export default SearchResults