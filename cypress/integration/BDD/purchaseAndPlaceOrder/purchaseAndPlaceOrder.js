/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ('I open the Ecommerce page and login', function(){
    cy.visit(Cypress.env("url"))
    cy.get('#login2').click()
    cy.wait(2000)
    cy.get('#loginusername').type(Cypress.env('Username'))
    cy.get('#loginpassword').type(Cypress.env('Password'))
    cy.get("button[onclick='logIn()']").click()
    cy.wait(3000)
})
When ('I click the PHONES CATEGORY button', function(){
    cy.get('.list-group a:nth-child(2)').click()
    cy.wait(2000)
})
Then ('i select a product from the list of products displayed from PHONES category', function(){
    cy.get('.hrefch').contains('Samsung galaxy s6').click()
})
When ('i click the add to cart button', function(){
    cy.get('.btn').contains('Add to cart').click()
})
When ('i navigate to cart', function(){
    cy.get('#cartur').click()
    cy.wait(5000)
})
When ('i click Place Order button', function(){
    cy.get('.btn').contains('Place Order').click()
})
Then ('if total price is displayed as expected', function(){
    cy.get('#totalm').then(function(total){
        var result = total.text()
        var Result2 = result.split(':')
        var newResult = Result2[1].trim()
        cy.get('#totalp').then(function (element) { 
            expect(element.text()).to.equal(newResult)
        })
    })
})
Then ('i fill out form to Place order', function(){
     cy.wait(2000)
     cy.get('#name').type(this.data.Name)
     cy.get('#country').type(this.data.Country)
     cy.get('#city').type(this.data.City)
     cy.get('#card').type(this.data.CreditCard)
     cy.get('#month').type(this.data.Month)
     cy.get('#year').type(this.data.Year)
})
When ('i click the Purchase button', function(){
    cy.get('.btn').contains('Purchase').click()
})
Then ('i validate unsuccessfull purchase', function(){
    cy.on('window:alert', (str) =>
     {
         expect(str).to.equal('Please fill out Name and Creditcard.')
     })
})

When('validate if name, amount, card number and date displayed in order confirmation is correct as expected',
 function(){
    cy.on('.sweet-alert p br', (str) => //fat pipe resolves Promise
     {
         expect(str).to.contain('Id', 'Amount', 'Card Number', 'Name', 'Date')
     })

    cy.get('.sweet-alert p br').each(($ele) => {
        //.lead
        cy.log($ele.text());
    });
    
    cy.get('.sweet-alert p br:nth-child(2)').then(function(amount){
        var result = amount.text()
        var Result2 = result.split(':')
        cy.log(Result2)
        //var newResult = Result2[1].split('U')
        //var finalResult = newResult[0].trim()
       // cy.get('#totalp').then(function (element) { 
           // cy.expect(element.text()).to.equal(finalResult)
        //})
    })
    /**cy.get('p br:nth-child(2)').then(function(cardN){
        var result = cardN.text()
        var Result2 = result.split(':')
        var cardNumber = Result2[1].trim()
        cy.expect(cardNumber).to.equal(this.data.CreditCard)
    })
    cy.get('p br:nth-child(3)').then(function(fname){
        var result = fname.text()
        var Result2 = result.split(':')
        var name2 = Result2[1].trim()
        cy.expect(name2).to.equal(this.data.Name)
    })**/
})

Then ('i validate if the cart is empty', function(){
    cy.visit(Cypress.env("url"))
    cy.get('#login2').click()
    cy.wait(2000)
    cy.get('#loginusername').type(Cypress.env('Username'))
    cy.get('#loginpassword').type(Cypress.env('Password'))
    cy.get("button[onclick='logIn()']").click()
    cy.wait(3000)
    cy.get('#cartur').click()
    cy.wait(3000)
    cy.get('tr').should('have.length', 1)
    cy.get('#logout2').click()
    cy.wait(3000)
})

When ('i navigate and select a product without category', function(){
    cy.get('.active > .nav-link').click()
    cy.wait(2000)
    cy.get('.hrefch').contains('HTC One M9').click()
    cy.wait(2000)
})
When ('i navigate to LAPTOPS category', function(){
    cy.wait(4000)
    cy.get('.active > .nav-link').click()
    cy.wait(2000)
    cy.get('.list-group a:nth-child(3)').click()
    cy.wait(2000)
})
Then ('i select a product from the list of products displayed from LAPTOPS category', function(){
    cy.get('.hrefch').contains('Sony vaio i5').click()
})
When ('i navigate and select another product without category', function(){
    cy.get('.active > .nav-link').click()
    cy.wait(2000)
    cy.get('.hrefch').contains('Nokia lumia 1520').click()
    cy.wait(2000)
})
Then('i validate successfull purchase', function(){
    cy.get('.sweet-alert > h2').should('contain', 'Thank you for your purchase!')
    
})

Given ('I open the Ecommerce page', function(){
    cy.visit(Cypress.env("url"))
    cy.wait(2000)
})

Then ('i fill out form without ~name~ and ~card number~ to Place order', function(){
    cy.wait(400)
     cy.get('#country').type(this.data.Country)
     cy.get('#city').type(this.data.City)
     cy.get('#month').type(this.data.Month)
     cy.get('#year').type(this.data.Year)
})

Then ('i validate confirmation message THANK YOU FOR YOUR PURCHASE! purchase', function(){
    cy.on('.sweet-alert', (str) =>
     {
         expect(str).to.contain('Thank')
     })
})

Then ('System Prompt user to login or sign up', function(){
//system doesnt prompt user to loginin or signup
})

When ('validate if order ID is displayed in order confirmation', function(){
    //cy.get('.lead br:nth-child(2)').to.contain('Id:')
})