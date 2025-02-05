/// <reference types="cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data =data
    })
})

    Given ('I open demoblaze E commerce', function(){
        cy.visit('http://www.demoblaze.com/')
    })   

    When ('I click contact button', function(){
        cy.wait(3000)
        cy.get(':nth-child(2) > .nav-link').click()
    })

    Then ('I click contact Email', function(){
        cy.wait(3000)
        cy.get('#recipient-email').type(this.data.email);
    })

    When ('I click contact name', function(){
        cy.wait(3000)
        cy.get('#recipient-name').type(this.data.name);
    })

    Then ('I fill the contact message', function(){
        cy.wait(4000)
        cy.get('#message-text').type(this.data.message);
    })

    When ('I click the send message button', function(){
        cy.get("button[onclick='send()']").click()
        cy.wait(2000)
    })   
    Then ('I validate Contact button is working', function(){
        cy.wait(2000)
        cy.get('.modal-title').contains('New message')
    })



//Scenario: Validate Name, Email and Message field is present
Then ('I verify Name, Email and Message field is present', function(){
    cy.get("#recipient-email").then($button => {
        $button.is(':visible') ? console.log('Email field is visible') 
        : console.log('Email field is invisible')
    })
    cy.get("#recipient-name").then($button => {
        $button.is(':visible') ? console.log('Name field is visible') 
        : console.log('Name field is invisible')
    })
    cy.get("#message-text").then($button => {
        $button.is(':visible') ? console.log('Message field is visible') 
        : console.log('Message field is invisible')
    })
})

Then ('I click send message button', function(){
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})

When ('I validate alert Thanks for the message',function(){
    cy.on('window:alert', (str) =>
        {
            expect(str).to.equal('Thanks for the message')
        })
   })