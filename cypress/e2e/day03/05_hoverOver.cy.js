/// <reference types="cypress" />

describe('HoverOver',() => {

    it('Test Case', () => {
       
        cy.visit('https://www.amazon.com/')
        //mouse u uzerine getir
        //trigger ile mouse hareketleri yapilir
        cy.get('.icp-nav-link-inner').trigger('mouseover');

        cy.wait(3000);

        cy.contains('Change country/region.').click();
        cy.get('#icp-dropdown').select('Turkey (Türkiye)',{force: true})



   
    })
   
    
   
   
   
   })
   
   