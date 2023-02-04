/// <reference types="cypress" />

describe('Check Box',() => {

    it('Single CheckBox', () => {
        cy.visit('https://www.amazon.com.tr/');
        cy.get('#sp-cc-rejectall-link').click();

        cy.get("[class='product-image'][alt='Günün fırsatları']").scrollIntoView().click();
        //cy.get("[type='checkbox']").first().click();
        //birden fazla element varsa 1. e tiklar

        cy.get("[type='checkbox']").eq(0).click();
        //first() = eq(0) 
        cy.get("span[aria-label='Departman filtresi'] li:nth-child(3) label:nth-child(1) input:nth-child(1)")
        .should('not.be.checked');
        //isaretli olmadigini test etti

        cy.get("div[aria-label='Fırsat: Seçili JBL, Marshall ve Urbanears ürünleri; Fırsatın fiyatı: 179,00TL - 21.817,00TL'] div div[class='DealContent-module__truncate_sWbxETx42ZPStTc9jwySW']")
        .should('be.visible')


        //cy.get().check().should('be.checked') tikla
        cy.get("[type='checkbox']").first().should('be.checked');

        //cy.get().uncheck().should('not.be.checked') tiklamayi kaldir
        cy.get("span[aria-label='Prime ücretsiz kargo filtresi'] li:nth-child(3) label:nth-child(1) input:nth-child(1)")
        .uncheck().should('not.be.checked');
        
 
    })
   
    it('All CheckBoxes 1', () => {
   
        cy.visit('https://www.amazon.com.tr/');
    
        cy.get('#sp-cc-rejectall-link').click();

        cy.get("[class='product-image'][alt='Günün fırsatları']").scrollIntoView().click();
        
        //cy.get("[type='checkbox']").eq(0).click();

        //butun checkbox lara tiklar
        //cy.get("input[type='checkbox']").check();
        //cy.wait(3000);
        //tiklamalari kaldirir
        //cy.get("input[type='checkbox']").uncheck();
  
    })
   
    it.only('All CheckBoxes 2', () => {
   
   
        cy.visit('https://www.amazon.com.tr/');
    
        cy.get('#sp-cc-rejectall-link').click();

        cy.get("[class='product-image'][alt='Günün fırsatları']").scrollIntoView().click();

        //butun checkbox lara tiklar
        //cy.get("[type='checkbox']").click({ multiple: true });
        cy.get("[type='checkbox']").first().click();
        cy.get("[type='checkbox']").first().parent().should('have.class' ,'checked')
        //tikli oldugunu dogruladi
        


    })
   

   })
   
   