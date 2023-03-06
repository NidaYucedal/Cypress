/// <reference types="cypress" />

describe ('', () => {
    
    it ('', () => {

        cy.visit('https://www.google.com');
        const searchbox=cy.get("input[name='q']");
        searchbox.type('amazon{enter}');
        cy.wait(3000)
        cy.get('.v5yQqb').click();
        
    
    })

})