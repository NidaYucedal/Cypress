/// <reference types="cypress" />

describe('Multiple Windows', () => {

    it('Removing Attribute', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example > a').invoke('removeAttr', 'target').click()
        //html kodlarına mudahal ederek pencereyi runnerda actik

        cy.get('h3').should('have.text', 'New Window')
    })

    it.only('New Url', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((element) => {
            const newURL = element.prop('href')
            //prop() -> 'href' değerini ('/windows/new') aldik
            // prop(), jQuery'de attribute değerini alan bir fonksiyon
            //2.yol

        cy.visit(newURL)
        })
    })
})