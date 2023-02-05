/// <reference types="cypress" />

describe('',() => {

    it('', () => {

        cy.visit('https://www.amazon.com')
        cy.get('#twotabsearchtextbox').type('watch');
        cy.get("[class='s-suggestion s-suggestion-ellipsis-direction']").contains('women').click()
        cy.get("[class='a-size-medium a-color-base a-text-normal']").contains('Strap').scrollIntoView().click()

       
   
    })

   })
   
   