
/// <reference types="cypress" />

describe('My First Test',() => {

    //describe: test tanimlamasi yapilir
    //describe ve it mocha dan gelir

    
    it('URL test', () => {
       
        cy.visit('https://www.google.com') //get

        cy.url().should('include','google')
        //should assert islemi icin kullanilir
        //should('include','google') url google icerir mi
        //bu 1. test blogumuz


   
    })
   
    it('Title Test', () => {

        cy.visit('https://www.google.com/')
        cy.title().should('include', 'Google')
        cy.title().should('include','Googl')
        cy.title().should('eq','Google')
        //should chai den gelir
        //2. test blogumuz
   
        
   
    })
   
   
   
   })
   
   