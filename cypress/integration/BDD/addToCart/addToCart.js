/// <reference types="cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
beforeEach(function () {
    cy.fixture('example').then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
})

// @phone category
Given('I open demoblaze Ecommerce website', function () {
    cy.visit('http://www.demoblaze.com/')
})
When('I click the login Button', function () {
    cy.get('#login2').click()
})

Then('I enter a valid username', function () {
    cy.wait(5000)
    cy.get('#loginusername').type(this.data.username);
})

When('I entered a valid password', function () {
    cy.wait(5000)
    cy.get('#loginpassword').type(this.data.password)
})
Then('I click on sign in Button', function () {
    cy.wait(5000)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})

When('I click phones category Button', function () {
    cy.get('.list-group a:nth-child(2)').click({ force: true })
    cy.wait(5000)
})
Then('I select a phones', function () {
    cy.wait(5000)
    cy.get('#tbodyid > div:nth-child(3) > div > div > h4 > a').contains('Nexus 6').click({ force: true })
})

When('I click the add to cart button', function () {
    cy.wait(5000)
cy.get('.btn.btn-success.btn-lg').click()
})

Then('I validate alert "Product added"', function () {
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Product added.')
    })
})
// Then("I validate alert - {string}", function (string) {
//     return "pending";
//     });
Then('I validate the product price', function () {
    // var TotalNum = 0
    // cy.get("h3[class='price-container']").each(($el, index, $list) => {
    //     const total = $el.text()
    //     var totalT = total.trim()
    //     TotalNum = Number(TotalNum) + Number(totalT)
    // }).then(function () {
    //     cy.log(TotalNum)
    // })
    // cy.get('#totalp').then(function (element) {
    //     const amount = element.text()
    //     expect(Number(amount)).to.equal(TotalNum)
    // })
    cy.wait(2000)
    cy.get('#cartur').click()
    cy.wait(4000)
cy.wait(10000)
    var TotalNum = 0
    cy.wait(5000)
    cy.get('tr td:nth-child(3)').each(($el, index, $list) => {
        const total = $el.text()
        var productTotal = total.trim()
        TotalNum = Number(TotalNum) + Number(productTotal) 
    }).then(function () {
        cy.log(TotalNum)
    })   
    cy.get('#totalp').then(function (element) { 
        const TotalAmount = element.text()
        expect(Number(TotalAmount)).to.equal(TotalNum)
    })

})

// @monitorscategory
    // Then ('I click monitors category Button', function () {
    //     cy.get('.list-group a:nth-child(3)').click({ force: true })
    //     cy.wait(5000)
    // })

    // When ('I select a monitor', function () {
    //     cy.wait(5000)
    //     cy.get('#tbodyid > div:nth-child(3) > div > div > h4 > a').contains('MacBook air').click({ force: true })
    // })

    // Then ('I click the add to cart button', function () {
    //     cy.get('.btn.btn-success.btn-lg').click()

    // })

    // When ('I validate alert Product added', function () {
    //     cy.on('window:alert', (str) => {
    //         expect(str).to.equal('Product added.')
    //     })
    // })

    // Then ('I validate the product price', function () {
    //     cy.wait(2000)
    //     cy.get('#cartur').click()
    //     cy.wait(4000)
    // cy.wait(10000)
    //     var TotalNum = 0
    //     cy.wait(5000)
    //     cy.get('tr td:nth-child(3)').each(($el, index, $list) => {
    //         const total = $el.text()
    //         var productTotal = total.trim()
    //         TotalNum = Number(TotalNum) + Number(productTotal) 
    //     }).then(function () {
    //         cy.log(TotalNum)
    //     })   
    //     cy.get('#totalp').then(function (element) { 
    //         const TotalAmount = element.text()
    //         expect(Number(TotalAmount)).to.equal(TotalNum)
    //     })
    
    // })