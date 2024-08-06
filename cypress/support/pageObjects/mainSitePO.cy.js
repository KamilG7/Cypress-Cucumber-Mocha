/// <reference types="cypress" />

class MainSite {

    get navigateTo() {
        return cy.get('img[alt="Automation Test Store"]').click()
    }

    get cartButton() {
        return cy.get("i[class='fa fa-shopping-cart fa-fw']").parents("a[class='dropdown-toggle']")
    }

    }
    
    export default MainSite