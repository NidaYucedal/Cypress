/// <reference types="cypress" />

import HomePage from '../day07/POM/HomePage.cy'
import LoginPage from '../day07/POM/LoginPage.cy'

describe('PayLinn Bank', () => {

    before(function(){
        cy.fixture('paylinn').then(function(data){
            this.data=data
        })
    })

   
    it('PayLinn Bank Login Test', function() {


        const homePage = new HomePage()

        const loginPage = new LoginPage()

        cy.visit(this.data.url)

        //cy.get('[href="/login"] > .header__option > .header__lineTwo').click()
        homePage.getSigninLink().click()

        //cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        //.type(this.data.userName)
        loginPage.getUserNameBox().type(this.data.username);


        //cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        //.type(this.data.passWord)
        loginPage.getPasswordBox().type(this.data.passWord)

        //cy.get('.MuiButton-label').click()
        loginPage.getLoginButton().click()

        //cy.get('.header__nav > :nth-child(1) > .header__lineOne')
        //.should('contain.text', 'Welcome')
        loginPage.getWelcomeText()

        loginPage.getHeader().should('contain.text', 'Welcome')



        //Alt + Shift : click and drag the mouse pointer to select the text you want.
        //Ctrl + Shift + P: Open the Command Palette
        //Ctrl + P: Quick file open
        //Ctrl + Shift + Tab: Cycle between open tabs
        //Ctrl + K + S: Format document
        //Ctrl + /: Toggle line comment
        //Ctrl + F: Find in file
        //Ctrl + H: Replace in file
        //Alt + Left Arrow: Go back
        //Alt + Right Arrow: Go forward
        //F12: Go to definition

    })
})