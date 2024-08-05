/// <reference types="cypress" />

class MainSite {

    get navigateTo() {
        return cy.get('img[alt="Automation Test Store"]').click()
    }

    }
    
    export default MainSite