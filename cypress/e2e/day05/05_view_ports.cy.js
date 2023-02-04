/// <reference types="cypress" />

describe('View Ports',() => {

    it('Test Case 01', () => {

        //cy.viewport(550, 750) // Set viewport to 550px x 750px
        //cy.viewport('iphone-6') // Set viewport to 375px x 667px
       
        cy.visit('https://www.google.com')
        cy.viewport('iphone-8')
   
    })
   
    it('MacBook-16', () => {
   
   
        cy.visit('https://www.google.com')
        cy.viewport('macbook-16')

    })

    it.only('Custom Screen', () => {
        cy.visit('https://www.google.com')
        cy.viewport(1500, 1000)
        cy.screenshot()
    })
   
   
   })
   
   