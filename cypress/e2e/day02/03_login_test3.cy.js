/// <reference types="cypress" />

describe('Login Menu Test',() => {

    it.skip('Test Case 01', () => {
        cy.visit('https://automationexercise.com/');
        cy.contains('.shop-menu > .nav > :nth-child(4) > a','Signup').click();
       
        //contain kullanrak assert yap
        cy.url().should('include','automation');
        cy.get(':nth-child(4) > a').should('contain','Signup')
        
       
        //cy.get('.username').should('contain','manager')
        //cy.contains('[class="nav-link"]', 'Log in').click();
        //cy.contains(locator , text)
        

        cy.get('.login-form > h2').should('be.visible');
        cy.get('.login-form > h2').should('have.text','Login to your account')


       
   





    })
   
    it('Test Case 02', () => {

        cy.visit('https://automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

        //1. yol
        //cy.get().should('contain' , text)
        cy.get('.signup-form > h2').should('contain','New User')

        //2.yol jquery assert
        //cy.get('').then(name =>{
        // expect(name.text()).to.equal('text')
        //})

        cy.get('.signup-form > h2').then(name => {
            expect(name.text()).to.equal('New User Signup!')
        })

   
        //3.yol
        //cy.get('text').invoke('text').then( mail=>{
           // expect(mail).to.equal('text')
       // })
       cy.get('.signup-form > h2').should('include.text','New User Signup!');




   
    })
   
   





   
   })
   
   