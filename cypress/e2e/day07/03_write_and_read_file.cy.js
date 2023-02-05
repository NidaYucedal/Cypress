/// <reference types="cypress" />

describe('Write&Read File',() => {

    it('Wrire&Read with Json File', () => {
       
        cy.writeFile('./cypress/e2e/day07/UserData.json', { name: 'Eliza', email: 'eliza@example.com'})

        cy.readFile('./cypress/e2e/day07/UserData.json').then( (user) => {
            expect(user.name).to.equal('Eliza')
            expect(user.email).to.equal('eliza@example.com')
        })
    })
})
   
   