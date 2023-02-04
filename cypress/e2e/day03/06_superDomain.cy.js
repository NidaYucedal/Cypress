/// <reference types="cypress" />

describe('SuperDomain',() => {

    it('', () => {
       cy.visit('https://www.amazon.com')
       cy.wait(3000);
       //cy.visit('https://www.google.com') hata verir
       //ayni test blogunda sadece bir siteyi ziyaret edebiliyoruz
       cy.visit('https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice')
       //ayni domain icinde 2. sayfaya gidebiliriz
   
    })

    it.skip('Test Case', () => {

        cy.visit('https://cypress.io/')
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        //hoca da hata verdi ayni domain olmadigi icin 
        //bu kod blogu calisiyor
    

    })
   
    it.skip('', () => {
   
        cy.visit('https://www.google.com')
        cy.wait(3000);
   
    })
   
   
   
   })
   
   