/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Scenario: Ecommerce sign up test with new username and password 
Given('I open the Ecommerce page and login', function () {
     cy.visit(Cypress.env("url"))
     cy.get('#login2').click()
     cy.wait(2000)
     cy.get('#loginusername').type(Cypress.env('Username'))
     cy.get('#loginpassword').type(Cypress.env('Password'))
     cy.get("button[onclick='logIn()']").click()
     cy.wait(2000)
})
When ('I click the PHONE CATEGORY button', function(){
    cy.get('.list-group a:nth-child(2)').click()
})
Then ('i verify product displayed are of only PHONES CATEGORY', function(){
    //div.container:nth-child(6) div.row div.col-lg-9 div.row:nth-child(1) div.col-lg-4.col-md-6.mb-4
    //div.container:nth-child(6) div.row div.col-lg-9 div.row:nth-child(1) div.col-lg-4.col-md-6.mb-4
    //body/div[@id='contcont']/div[1]/div[2]/div[1]/div[1]/div[1]
    //body/div[@id='contcont']/div[1]/div[2]/div[1]/div[1]
})

//Scenario: Phones category validation while not logged in
Given ('I open the Ecommerce page', function(){
    cy.visit(Cypress.env("url"))
})

//Scenario: Laptops category validation while logged in
When ('I click the LAPTOPS CATEGORY button', function(){
    cy.get('.list-group a:nth-child(3)').click()
})
Then ('i verify product displayed are of only LAPTOPS CATEGORY', function(){

})

//Scenario: Laptops category validation while not logged in

//Scenario: Monitors category validation while logged in
When ('I click the MONITORS CATEGORY button', function(){
    cy.get('.list-group a:nth-child(4)')
})
Then ('i verify product displayed are of only MONITORS CATEGORY', function(){

})

//Scenario: Monitors category validation while not logged in