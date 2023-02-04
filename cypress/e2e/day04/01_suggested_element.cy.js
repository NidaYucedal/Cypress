/// <reference types="cypress" />

describe('Suggested Elements',() => {


    it('Test Case',() => {
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type('dress');
       // cy.get("[class='s-suggestion s-suggestion-ellipsis-direction'][aria-label='dress']").click();
        cy.get("[class='s-suggestion-container']").contains('dress').click();

        cy.get('h1').should('be.visible');








    })



})