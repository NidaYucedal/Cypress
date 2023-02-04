/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
//bir defa import etmemiz yeterli

//npm install --save-dev @faker-js/faker
//https://www.npmjs.com/package/@faker-js/faker
describe('Using Faker',() => {

    it('Faker Login Test', () => {
       
        cy.visit('https://automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(4)').click();
       
        let name=faker.name.firstName();
        cy.get('[data-qa="signup-name"]').type(name);

        
        let email=faker.internet.email('nida','yuu');
        cy.get('[data-qa="signup-email"]').type(email);
        

       










   
    })
   
  
   
   
   })
   
   