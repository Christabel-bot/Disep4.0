Feature: Demoblaze Ecommerce test validation​
 Application regression​
@regression @smoke


@phonescategory
Scenario: validate adding phones to cart
    Given I open demoblaze Ecommerce website
    When I click the login Button
    Then I enter a valid username
    When I entered a valid password
    Then I click on sign in Button
    When I click phones category Button
    Then I select a phones
    When I click the add to cart button
    Then I validate alert "Product added"
    Then I validate the product price

