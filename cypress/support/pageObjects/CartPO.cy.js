/// <reference types="cypress" />

class Cart {

    get removeIcon() {
        return cy.get('[class="btn btn-sm btn-default"]')
    }

    get cartEmpty() {
        return cy.get('[class="contentpanel"]').contains("Your shopping cart is empty!")
    }

    get singleInput() {
        return cy.get("input[id^='cart_quantity']").eq(0)
    }

    get refreshButton() {
        return cy.get("button[title='Update']")
    }

    }
    
    export default Cart