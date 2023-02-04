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

        let email=faker.internet.email('joe','black');
        cy.get('[data-qa="signup-email"]').type(email);
        
        cy.get('[data-qa="signup-button"]').click();
        cy.get('#id_gender2').click();
        let password=faker.internet.password();
        cy.get('[data-qa="password"]').type(password);

        let firstName=faker.name.firstName();
        cy.get('[data-qa="first_name"]').type(firstName);

        let lastName=faker.name.lastName();
        cy.get('[data-qa="last_name"]').type(lastName);

        let company=faker.company.companyName();
        cy.get('[data-qa="company"]').type(company);

        let adress=faker.address.streetAddress();
        cy.get('[data-qa="address"]').type(adress);

       // let country=faker.address.country();
        cy.get('[data-qa="country"]').select(2);

        let state=faker.address.state();
        cy.get('[data-qa="state"]').type(state);

        let city=faker.address.city();
        cy.get('[data-qa="city"]').type(city);

        let zipcode=faker.address.zipCode('#####');
        cy.get('[data-qa="zipcode"]').type(zipcode);
 
        let phone=faker.phone.number('###-###-##-##');
        cy.get('[data-qa="mobile_number"]').type(phone);

        cy.get('[data-qa="create-account"]').click();

        cy.get('b').should('be.visible');

        cy.get('[data-qa="continue-button"]').click();
        cy.get(':nth-child(10) > a').should('include.text', name);

    
    })
   
   })
   
   