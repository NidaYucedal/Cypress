/// <reference types="cypress" />

describe('Write&Read File',() => {

    it('Write File', () => {

        cy.writeFile('./cypress/e2e/day07/Notepad.txt','Cypress Notes\n')
        cy.writeFile('./cypress/e2e/day07/Notepad.txt', '1) Cypress Install\n', {flag: 'a+'})
        cy.writeFile('./cypress/e2e/day07/Notepad.txt', '2) Plugins\n',{flag: 'a+'})
        // \n => bir alt satıra gider
        // {flag: 'a+'} => satırı dosyaya kaydeder.

    })


    it('Read File', () => {

        cy.readFile('./cypress/e2e/day07/Notepad.txt').should('contain', 'Plugins')


    })
})