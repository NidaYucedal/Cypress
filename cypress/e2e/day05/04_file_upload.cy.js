/// <reference types="cypress" />

describe('File Upload',() => {

    //https://www.npmjs.com/package/cypress-file-upload
    //import 'cypress-file-upload';

    it('Single File Upload', () => {
       //https://davidwalsh.name/demo/multiple-file-upload.php
       //npm install --save-dev cypress-file-upload
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        const path1 = "1a.jpg";
        cy.wait(3000);
        cy.get('#filesToUpload').attachFile(path1);
        cy.get('#fileList > li').should('include.text','1a.jpg');

    })
   
    it('Multiple File Upload 01', () => {
   
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        const path1="1a.jpg";
        const path2="2.jpg";
        const path3="3.jpg";
   
        cy.get('#filesToUpload')
        .attachFile(path1).wait(2000)
        .attachFile(path2).wait(2000)
        .attachFile(path3);

    })
   
    it('Multiple File Upload 02', () => {
   
   
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

        const path1="1a.jpg";
        const path2="2.jpg";
        const path3="3.jpg";
   
        cy.get('#filesToUpload')
        .attachFile([path1,path2,path3]);

        cy.get('#fileList > :nth-child(1)').should('have.text','1a.jpg');
        cy.get('#fileList > :nth-child(2)').should('contain.text','.jpg')
        cy.get('#fileList > :nth-child(3)').should('include.text','3.jpg')

    })

    it.only('OverWrite File Name', () => {


        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        const path1="1a.jpg";
        cy.get('#filesToUpload').attachFile({filePath: path1, fileName:'image01.jpg'});
        cy.get('#fileList > li').should('include.text','image01.jpg');

    })
  
 })
   
   