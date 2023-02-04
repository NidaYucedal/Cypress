class LoginPage{

    getUserNameBox(){
        return cy.get("input[name='username']")
        
    }

    getPasswordBox(){
        return cy.get("input[name='password']")
        
    }

    getLoginButton(){
        return cy.get('.MuiButton-label')
    }
    getWelcomeText(){
        return cy.get('.header__nav > :nth-child(1) > .header__lineOne')
        .should('contain.text', 'Welcome')
    }
    getHeader(){
        return cy.get('.header__nav')
    }

}
export default LoginPage