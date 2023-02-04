/// <reference types="cypress" />

describe('Navigation',() => {

    it('Back, Forward, Resfresh', () => {

        cy.visit('https://qa-environment.koalaresorthotels.com/')

        cy.wait(3000);
        cy.get('#navLogon > .nav-link').click();
        cy.wait(3000);
        //cy.go('back');
        cy.go(-1); //onceki sayfaya gider
        cy.wait(3000);
        cy.go('forward')
        //cy.go(1); forward ile ayni
        cy.wait(3000);
        cy.reload() //sayfayi yeniler
        


   
    })
   
    it.only('Chaning Navigation', () => {

        cy.visit('https://qa-environment.koalaresorthotels.com/')

        cy.wait(3000);
        cy.get('#navLogon > .nav-link').click();
        cy.wait(3000);
        cy.go('back').go('forward').go(-1).go(1);
        cy.reload(true) 
        //sayfayi hafizadan degil yeniden yukler
        //ctrl + F5 chash den degil yeniden yukleme
   
   







    })
   
   
   
   })
   
   