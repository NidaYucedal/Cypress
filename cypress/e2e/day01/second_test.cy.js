/// <reference types="cypress" />

context('My second test',() => {
    //describe yerine context de kullanilir

    beforeEach('her testen once calisir', ()=>{
        //cy.visit('https://www.google.com/')
        cy.visit('/') //baseurl e gider
        //her testten once bu adrese gidecek

    })

    it('URL Test', () => {

       cy.url().should('include','google');
       cy.url().should("eq","https://www.google.com/");
   
    })
   
    it('Title Test', () => {
   
        cy.title().should('include','Google')
        cy.title().should('eq','Google');
   
    })
   
    it('Search Test', () => {

        cy.get('.gLFyf').type('Cypress.io{enter}')
        //get() locate aliyor
        //type() metin gonderiyor sendkeys gibi
        //{enter} enter tusuna basar
        cy.get('img[class=lnXdpd]').should('be.visible'); //title gorunuyor mu
        cy.get("img[class='lnXdpd']").should('exist'); //google title var mi
       


   
   
    })
   

    it.skip('Search Test', () => {
        //it.skip bu testi es gec
     cy.get('.gLFyf',{timeout:3000}).type('Cypress.io{enter}');
   
    })
   
    it('Click', () => {

        //it.only
        //sadece bu testi calistirir
        cy.get('.gb_e').click();


    })

   
   
   })
   
   