/// <reference types="cypress" />

describe('Drag And Drop',() => {

it('Test Case 01', () => {

     /*
     plugin install
    https://www.npmjs.com/package/@4tw/cypress-drag-drop
    npm install --save-dev @4tw/cypress-drag-drop
    require('@4tw/cypress-drag-drop')
    */
       
    cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
    cy.wait(3000)

    cy.get('#column-a')//sürüklenecek web elementi
    .drag('#column-b')//web elementinin sürükleneceği yer
    
   
 })
   
 it.only('DragAndDrop 2', () => {

    cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
    const dataTransfer = new DataTransfer();
  cy.get('#column-a').trigger('dragstart', {
    dataTransfer
  })
  cy.get('#column-b').trigger('drop', {
    dataTransfer
  })
})
   
   })
   
   