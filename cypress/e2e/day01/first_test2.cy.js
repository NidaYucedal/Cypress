
/// <reference types="cypress" />

describe('My First Test', function() {


    it('URL test', function() {
       
        cy.visit('https://www.google.com') 
        cy.url().should('include','google')
   

    })
   
    it('Title Test', function() {

        cy.visit('https://www.google.com/')
        cy.title().should('include', 'Google')
        cy.title().should('include','Googl')
        cy.title().should('eq','Google')
      
        //cy.get('.error').should('be.empty') // Assert that '.error' is empty
        //cy.contains('Login').should('be.visible') // Assert that el is visible
        //cy.wrap({ foo: 'bar' }).its('foo').should('eq', 'bar') // Assert the 'foo' property equals 'bar'
   
    })
   
   
   
   })
   
   