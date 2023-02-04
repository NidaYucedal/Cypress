/// <reference types="cypress" />

describe('IFrame',() => {

    it('', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')
        /*
        1) Plugin İndir

            https://www.npmjs.com/package/cypress-iframe

            npm install -D cypress-iframe
        
        2) Import Plugin
            require('cypress-iframe')
            import 'cypress-iframe'

            support dosyasındaki e2e.js dosyasına yazacağız
        
        3) Bu işlemlerden sonra cy.frameLoaded() ve cy.iframe()
        komutlarına kullanabileceğiz
        */
       
        cy.frameLoaded('#mce_0_ifr')
        //cy.frameLoaded() -> iframe'in yerini tanimliyoruz.
        //driver.switchto.frame('#mce_0_ifr') -> Selenium

        cy.iframe().find('p').clear()
        //cy.iframe() -> iframe git
        // find('p') -> p tag'ini bul
        // clear() -> metni temizle

        cy.iframe().find('p').type('Cypress was here');

        cy.get('.large-4 > div > a').should('contain.text', 'Elemental Selenium').click();
   
   
    })
   
   
       
   })
   
   