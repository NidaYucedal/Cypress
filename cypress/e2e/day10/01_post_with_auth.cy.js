/// <reference types="cypress" />

describe('POST with Auth', () => {

    it('Test', () => {
        cy.request({
            url: 'https://restful-booker.herokuapp.com/booking',
            method: 'POST',
            auth : {
                "username" : "admin",
                "password" : "password123"
            },
            body : {
                "firstname" : "Murat",
                "lastname" : "Brown",
                "totalprice" : 250,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2022-10-10",
                    "checkout" : "2022-11-10"
                },
                "additionalneeds" : "Breakfast"
            }  
        }).then((response) => {
            console.log(response)

            expect(response.status).to.eq(200)
            expect(response.body.booking.firstname).to.eq("Murat")
            expect(response.body.booking.lastname).to.eq("Brown")
            expect(response.body.booking.totalprice).to.eq(250)
            expect(response.body.booking.depositpaid).to.eq(true)
            expect(response.body.booking.bookingdates.checkin).to.eq("2022-10-10")
            expect(response.body.booking.bookingdates.checkout).to.eq("2022-11-10") 
        })
    })
})