/// <reference types="cypress" />

describe('Suggested Element',() => {

    it('Test Case 01', () => {
       
        cy.visit('https://www.google.com')
        cy.get('.gLFyf').type('Yahoo')
        //cy.get(':nth-child(8) > .eIPGRd > .pcTkSc > .wM6W7d > span > b')
        //.contains('mail').click();

        //2.yol
        //arama sonuclarini veren locate ile
        cy.get('li span b').contains('mail').click();

   


    })
   
    it.skip('Test Case 02', () => {
   
   



    })
   
   
   
   })
   
   