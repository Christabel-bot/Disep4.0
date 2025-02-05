/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.Commands.add('verifyAlert', (expectedAlertText) => {
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal(expectedAlertText);
    });
});

beforeEach(function () {
    cy.visit('https://www.demoblaze.com/');
    cy.fixture('example').then(function (data) {
        this.data = data;
    });
});

Given('i navigate to Demobaze Website', function () {
    cy.url().should('include', 'demoblaze');
});

When('i click on Login', function () {
    cy.get('#login2').should('be.visible').click();
});

Then('i verify Login form is accessible', function () {
    cy.get('#logInModal').should('be.visible');
    cy.get('#logInModalLabel')
        .should('be.visible')
        .and('contain.text', 'Log in');
});

When('i enter username and password', function () {
    cy.wait(3000)
    cy.get('#loginusername').should('be.visible').type(this.data.username);
    cy.wait(3000)
    cy.get('#loginpassword').should('be.visible').type(this.data.password);
});

When('i click on Login button', function () {
    cy.get("button[onclick='logIn()']").should('be.visible').click();
    cy.wait(3000)
});

Then('i verify successful Login', function () {
    cy.get('#nameofuser', { timeout: 10000 }).should('contain.text', 'Welcome ' + this.data.username);
});

When('i click on Logout', function () {
    cy.get('#logout2').should('be.visible').click();
});

Then("i verify successful logout", function () {
    // cy.get('#nameofuser').should('not.exist');
    cy.get('#login2').should('be.visible'); // Ensure the login button is visible again
});