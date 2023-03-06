/// <reference types="cypress" />

describe ('', () => {
    
    it ('', () => {

        cy.visit('https://www.google.com');
        const searchbox=cy.get("//input[@name='q']");
        searchbox.type('amazon');


    })

})