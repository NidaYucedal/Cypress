/// <reference types="cypress" />

describe('JsonPlaceHolder', () => {

    const requestURL = 'https://jsonplaceholder.cypress.io/comments'

    it('Test 01', () => {
        cy.request(requestURL).should((response) => {
            assert.equal(response.status, 200)

            /*
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            }
            */
           assert.equal(response.body[0].postId, 1)
           assert.equal(response.body[0].id, 1)
           assert.equal(response.body[0].name, "id labore ex et quam laborum")
           assert.equal(response.body[0].email, "Eliseo@gardner.biz")
           assert.equal(response.body[0].body, "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium")
        })
    })

    it('Test 02', () => {
        cy.request(requestURL).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body[0].postId).to.eq(1)
            expect(response.body[0].id).to.eq(1)
            expect(response.body[0].name).to.eq("id labore ex et quam laborum")
            expect(response.body[0].email).to.eq("Eliseo@gardner.biz") 
        })
    })

    it('Test 03', () => {

        cy.request({
            url: requestURL,
            method: 'GET'
        }).should((response)=> {
            expect(response.status).to.eq(200)
            expect(response.body[0].postId).to.eq(1)
            expect(response.body[0].id).to.eq(1)
            expect(response.body[0].name).to.eq("id labore ex et quam laborum")
            expect(response.body[0].email).to.eq("Eliseo@gardner.biz") 
        })
    })
})