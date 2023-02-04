/// <reference types="cypress" />

describe('Custom Command',() => {

it('Positive Login', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get("input[data-qa='login-email']").type('yc@gmail.com');
    cy.get("input[data-qa='login-password']").type('12345');
    cy.get("button[data-qa='login-button']").click();
    cy.get(':nth-child(10) > a').should('have.text',' Logged in as Nida');



 })

 it('Positive login with custom', () => {
   
    cy.ap_login('yc@gmail.com','12345');
    //ap_login -> coomand.js dosyasında olusturdugumuz fonksiyon
    cy.get(':nth-child(10) > a').should('have.text',' Logged in as Nida');

   
 })
   
it.only('Negative Login', () => {

    cy.ap_login('yc@gmail.com','1234');
    const fail = cy.get('.login-form > form > p');
    fail.should('be.visible');

   
   

   
 })
   
   })
   
   