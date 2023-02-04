/// <reference types="cypress" />

describe('Before After',() => {
    before( ()=>{
        cy.log('Her test dosyasindan once bir kere calisir')
    })

    after( ()=>{
        cy.log('Her test dosyasindan sonra bir kere calisir')
    })

    beforeEach( ()=>{
        cy.log('Her testten once bir defa calisir')
    })

    afterEach( ()=>{
        cy.log('Her testten sonra bir defa calisir')
    })




    it('Test Case01', () => {
        cy.log('Test Case01');
       
   

    })
   
    it('Test Case02', () => {
   
        cy.log('Test Case02');



    })
   
   
   
   })
   
   