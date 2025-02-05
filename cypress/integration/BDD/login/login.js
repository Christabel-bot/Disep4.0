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
Given ('I open demoblaze Ecommerce website', function(){
    cy.visit('http://www.demoblaze.com/')
})
When ('I click the Login Button', function(){
    cy.wait(3000)
    cy.get('#login2').click()
})

Then ('I enter a valid Username', function(){
    cy.get('#loginusername').type(this.data.username);
})

When ('I entered a Valid password', function(){
    cy.get('#loginpassword').type(this.data.password)
})
Then ('I click on sign in Button', function(){
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})

When ('I Validate successful login to my account', function(){
    //cy.contains('Welcome Christabel').should('be.visible');
    cy.get('#nameofuser').should('exist')
})



// Then ('I Click Login', function(){
//         cy.wait(3000)
//         cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click()
// })

Then ('unsuccessful login message -Please fill out Username and Password.-', function(){
        cy.on('window:alert', (str) =>
    {
        expect(str).to.equal('Please fill out Username and Password.')

    })

})

Then ('I enter a valid Password and empty username', function(){
        cy.wait(2000)
        cy.get('#loginpassword').type(this.data.password);
        cy.get('#loginusername').should('be.empty')
})
    
Then ('unsuccessful login message -Please fill out Username and Password', function(){
        cy.on('window:alert', (str) =>
        {
             expect(str).to.equal('Please fill out Username and Password.')
    })
})

Then ('I enter a valid Username and empty password', function(){
    cy.wait(2000)
    cy.get('#loginusername').type(this.data.username);
    cy.get('#loginpassword').should('be.empty')
})


Then ('I enter invalid username and valid password', function(){
    cy.wait(2000)
    cy.get('#loginusername').type(this.data.invalidUsername);
    cy.get('#loginpassword').type(this.data.password);

})

Then ('unsuccessful login message -User does not exist', function(){
    cy.on('window:alert', (str) =>
    {
         expect(str).to.equal('User does not exist.')
})
})

 