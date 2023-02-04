/// <reference types="cypress" />

describe('Custom Command',() => {

 it('Amazon Search', () => {

    cy.amazonSearch('iphone');
    cy.get('.a-color-state').should('be.visible');
    cy.get('.a-color-state').should('include.text','iphone');
    cy.get('#twotabsearchtextbox').should('include.value','iphone');

    cy.screenshot();
    //npx cypress run 
    //tum testleri calistirir
    //browser acmadan calistirir
       

   
 })
   

   })
   
   