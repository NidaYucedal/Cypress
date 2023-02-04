/// <reference types="cypress" />

describe('Scroll',() => {

    it('ScrollintoView', () => {
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.wait(3000)

        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        //locate ettigimiz degerin altına kaydirir

        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').
        scrollIntoView({duration: 4000})

        //scrollTo(x,y) should yapilmaz
        cy.scrollTo(0,0) //sayfanin en ustune gider
        cy.wait(3000)
        cy.scrollTo(0,500)
        cy.wait(3000)
        cy.scrollTo('500px');
        cy.wait(3000)
        cy.scrollTo(0,-500)


   











    })
   
    
   
   
   })
   
   