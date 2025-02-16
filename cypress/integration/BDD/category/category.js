/// <reference types="cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data = data 
    })
})

//Scenario: Ecommerce sign up test with new username and password 
Given ('I open demoblaze Ecommerce website', function(){
    cy.visit('http://www.demoblaze.com/')
})
When ('I click the Login Button', function(){
    cy.wait(3000)
    cy.get('#login2').click()
})

Then ('I enter a valid username', function(){
    cy.get('#loginusername').type(this.data.username);
});

When ('I entered a Valid password', function(){
    cy.get('#loginpassword').type(this.data.password)
})
Then ('I click on sign in Button', function(){
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})
When ('I click the PHONE CATEGORY button', function(){
    cy.get('.list-group a:nth-child(2)').click({force: true})
})
Then ('i verify product displayed are of only PHONES CATEGORY', function(){
    //div.container:nth-child(6) div.row div.col-lg-9 div.row:nth-child(1) div.col-lg-4.col-md-6.mb-4
    //div.container:nth-child(6) div.row div.col-lg-9 div.row:nth-child(1) div.col-lg-4.col-md-6.mb-4
    //body/div[@id='contcont']/div[1]/div[2]/div[1]/div[1]/div[1]
    //body/div[@id='contcont']/div[1]/div[2]/div[1]/div[1]
})

//Scenario: Phones category validation while not logged in
// Given ('I open demoblaze Ecommerce website', function(){
//     cy.visit('http://www.demoblaze.com/')
// })

//Scenario: Laptops category validation while logged in
When ('I click the LAPTOPS CATEGORY button', function(){
    cy.get('#itemc').click()
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