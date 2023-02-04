/// <reference types="cypress" />

describe('Koala Resort Hotel', ()=>{

it('Log in Test', () => {

    cy.visit('https://qa-environment.koalaresorthotels.com/')
    //cy.get('#navLogon > .nav-link').click();
    cy.contains('Log in').click();
    //DOM da log in text icereni bul tikla
    cy.url().should('include','Logon');
    cy.get('.row > .mb-4').should('be.visible');

    //username: Manager
    cy.get('#UserName').type('Manager');

    //password: Manager1!
    //1.yol
    //cy.get('#Password').type('Manager1!');
    //cy.get('#btnSubmit').click();

    //2.yol
    cy.get('#Password').type('Manager1! {enter}');

    cy.get('.caption-subject').should('be.visible');



})



})
