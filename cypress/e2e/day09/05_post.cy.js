/// <reference types="cypress" />

describe('POST', () => {
    const requestURL = 'https://jsonplaceholder.cypress.io/comments'

    it('Test', () => {
        cy.request('POST', requestURL, {
            userId:501,
            title: "Cypress cok kolay",
            body: "JavaScript daha da kolay"
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.userId).to.eq(501)
            expect(response.body.title).to.eq("Cypress cok kolay")
            expect(response.body.body).to.eq("JavaScript daha da kolay")
        })


    })

})

