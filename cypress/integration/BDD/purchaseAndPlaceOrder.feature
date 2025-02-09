Feature: Demoblaze Ecommerce Test Validation
 Application regression​
@regression @smoke​


@pp1
Scenario: validating successful purchase if all field of purchase form is filled while logged in
    Given I open the Ecommerce page and login
    When I click the PHONES CATEGORY button
    Then i select a product from the list of products displayed from PHONES category
    When i click the add to cart button
    When i navigate to cart
    When i click Place Order button
    Then if total price is displayed as expected
    Then i fill out form to Place order
    When i click the Purchase button
    Then i validate unsuccessfull purchase
    

@pp2
Scenario: Validating system prompting user to login or signup once purchase button is clicked while user is not logged in
    Given I open the Ecommerce page and login
    When I click the PHONES CATEGORY button
    Then i select a product from the list of products displayed from PHONES category
    When i click the add to cart button
    When i navigate to cart
    When i click Place Order button
    Then System Prompt user to login or sign up

@pp3
Scenario: validating unsuccessful purchase if ~name~ and ~card number~ which are the required field of purchase form is ommited while logged in
    Given I open the Ecommerce page and login
    When I click the PHONES CATEGORY button
    Then i select a product from the list of products displayed from PHONES category
    When i click the add to cart button
    When i navigate and select a product without category
    Then i click the add to cart button
    When i navigate to LAPTOPS category
    Then i select a product from the list of products displayed from LAPTOPS category
    Then i click the add to cart button
    When i navigate and select another product without category
    Then i click the add to cart button
    When i navigate to cart
    When i click Place Order button
    Then if total price is displayed as expected
    Then i fill out form without ~name~ and ~card number~ to Place order
    When i click the Purchase button
    Then i validate unsuccessfull purchase

@pp4
Scenario: validate if name, amount, card number and date are displayed in order confirmation is correct as expected
    Given I open the Ecommerce page and login
    When I click the PHONES CATEGORY button
    Then i select a product from the list of products displayed from PHONES category
    When i click the add to cart button
    When i navigate to cart
    When i click Place Order button
    Then if total price is displayed as expected
    Then i fill out form to Place order
    When i click the Purchase button
    Then i validate successfull purchase
    When validate if name, amount, card number and date displayed in order confirmation is correct as expected

@pp5
Scenario: Validate if order ID displayed in order confirmation
    Given I open the Ecommerce page and login
    When I click the PHONES CATEGORY button
    Then i select a product from the list of products displayed from PHONES category
    When i click the add to cart button
    When i navigate to cart
    When i click Place Order button
    Then if total price is displayed as expected
    Then i fill out form to Place order
    When i click the Purchase button
    Then i validate successfull purchase
    When validate if order ID is displayed in order confirmation

@pp6
Scenario: Validating unsuccessfull purchase with blank form to place order while logged in
    Given I open the Ecommerce page and login
    When I click the PHONES CATEGORY button
    Then i select a product from the list of products displayed from PHONES category
    Then i click the add to cart button
    When i navigate to cart
    When i click Place Order button
    Then if total price is displayed as expected
    When i click the Purchase button
    Then i validate unsuccessfull purchase

@pp7
Scenario: Validating unsuccessfull purchase and Place order button unclickable if there are no item in cart while logged in
    Given I open the Ecommerce page and login
    When i navigate to cart
    When i click Place Order button

@pp8
Scenario: Validating unsuccessfull purchase and Place order button unclickable if there are no item in cart while not logged in
    Given I open the Ecommerce page
    When i navigate to cart
    When i click Place Order button

@pp9
Scenario: verify order confirmation message THANK YOU FOR YOUR PURCHASE!
    Given I open the Ecommerce page and login
    When I click the PHONES CATEGORY button
    Then i select a product from the list of products displayed from PHONES category
    When i click the add to cart button
    When i navigate to cart
    When i click Place Order button
    Then if total price is displayed as expected
    Then i fill out form to Place order
    When i click the Purchase button
    Then i validate confirmation message THANK YOU FOR YOUR PURCHASE! purchase

@pp10
Scenario: Enter shipping information
#System doesnt provide option to add shipping information

@PP11
Scenario: System validates correct payment information
#System doesnt validate correct payment information

@PP12
Scenario: Validate system only accept correct month and year format
#system does not validate if correct date and year format are entered or not

@PP13
Scenario: Check the user's email inbox for an order confirmation email.
#System does not send order confirmation mail to user email

@PP14
Scenario: Verify that the order appears in the user's order history on the e-commerce website.
#System doesnt provide order history