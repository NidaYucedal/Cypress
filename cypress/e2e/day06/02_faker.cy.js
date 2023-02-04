/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
//bir defa import etmemiz yeterli

//npm install --save-dev @faker-js/faker
//https://www.npmjs.com/package/@faker-js/faker
describe('Using Faker',() => {

    it('Faker Login Test', () => {
       
        cy.visit('https://automationexercise.com/');
        let firstName=faker.name.firstName();
        let password=faker.password();










   
    })
   
  
   
   
   })
   
   