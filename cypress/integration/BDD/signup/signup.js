/// <reference types="cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ('I open demoblaze Ecommerce website', function(){
    cy.visit('http://www.demoblaze.com/')
})
When ('I click on sign up Button', function(){
   cy.get('#signin2').click()
})
Then ('I entered a Username', function(){
   cy.get('#sign-username').type('Christabel')
})   
When ('I entered a password', function(){
   cy.get('#sign-password').type('123456')
})    
When ('I click on sign up', function(){
   cy.wait(2000);
   cy.get('#signInModal > div > div > div.modal-footer > button.btn.btn-primary').click();
   
})
