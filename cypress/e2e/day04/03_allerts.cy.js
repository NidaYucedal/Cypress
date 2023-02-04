/// <reference types="cypress" />

describe('Allerts',() => {

it('Allert Test', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.wait(3000)
    cy.get(':nth-child(1) > button').click();

    //cypress otomatik olarak allert tamam butonuna tiklar

    cy.get('#result').should('have.text', 'You successfully clicked an alert')
})

it('Accept Alert Test', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.wait(3000)

    cy.get(':nth-child(2) > button').click()
    //2 seçenek var. iptal ve tamam
    //Cypress otamatik olarak tamam butonuna tıklayacak

    cy.get('#result').should('have.text', 'You clicked: Ok')

})

it('Dismiss Alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.wait(3000)

    cy.get(':nth-child(2) > button').click()
    //Cypress otomatik olarak Tamam butonuna tıkladı

    //on() -> jQuery bir fonksiyondur
    // browserda açılan pencerelin kontrolü için kullanılır

    cy.on('window:confirm', () => {
        return false
        //return true -> default olarak tıkla demek
    })

    cy.get('#result').should('have.txt', 'You clicked: Cancel')
})


it.only('Alert Text', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.wait(3000)

    cy.window()//pop up pencereleri kontrol ediyoruz
    .then(($windowsElement) => {
        //$windowsElement -> promt'a bilgi girer
        cy.stub($windowsElement, 'prompt').returns('Cypress')
        cy.get(':nth-child(3) > button').click()
    })

    cy.get('#result').should('have.text', 'You entered: Cypress')
})
})