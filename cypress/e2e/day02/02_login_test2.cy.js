/// <reference types="cypress" />

describe('Koala Resort Hotel' ,()=>{
 
it('Log in Test', () => {

    cy.visit('https://qa-environment.koalaresorthotels.com/')
   //1) contains('text')
   // cy.contains('Log in').click();

   //2) contains('locator' ,'text')
   //cy.contains('[class="nav-link"]', 'Log in').click();
    //cy.contains('li','Log in').click();

    //3) contains('text')
    //cy.contains('log in').click(); buyuk kucuk harf duyarli
    cy.contains('log in' ,{matchCase:false}).click();
    //bu sekilde buyuk kucuk harf ignore edilir



    //Assert

    //1)have.text
    cy.get('#navLogon > .nav-link').should('have.text','Log in');
    //locate edilen yerdeki metinde Log in yaziyor mu ,var mi

    //2)
    cy.url().should('include','Account/Logon');

    //3)
    cy.get('.row > .mb-4').should('be.visible');

    //4)
    cy.title().should('eq','KoalaResortHotels - Log in')

    //5)
    cy.get('#navLogon > .nav-link').should('include.text','Log in');

    //Toplam link
    cy.get('li a').should('have.length', 29);

    //find() : belirli bir html seciminiin alt elemanlarini bulmak icin
    //parent larin child larini bulmak icin

    //parent => div.categories
    //child => a[href="/Rooms/320"]

    cy.get('li').find('a[href="/Rooms/320"]').should('have.text' , 'Twin 2');
    //cy.get().find() seklinde kullanilir
    
    //within()
    //web elemntlerini il olarak get ile bulacagiz
    //eger get ile bulamazsak find ile deneyecegiz
    //onunla da bulamazsak within ile deneriz
    cy.get('div.categories').within( () => {
        cy.get('a[href="/Rooms/320"]').click();

    })






})



})