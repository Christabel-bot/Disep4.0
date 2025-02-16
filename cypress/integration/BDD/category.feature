Feature: Demoblaze Ecommerce Test Validation
 Application regression​
@regression @smoke​

Scenario: Phones category validation while logged in
    Given I open demoblaze Ecommerce website
    When I click the Login Button
    Then I enter a valid username
    When I entered a Valid password
    Then I click on sign in Button
    When I click the PHONE CATEGORY button
    Then i verify product displayed are of only PHONES CATEGORY

    Scenario: Phones category validation while not logged in
    Given I open demoblaze Ecommerce website
    When I click the PHONE CATEGORY button
    Then i verify product displayed are of only PHONES CATEGORY

    Scenario: Laptops category validation while logged in
    Given I open demoblaze Ecommerce website
    When I click the LAPTOPS CATEGORY button
    Then i verify product displayed are of only LAPTOPS CATEGORY

    Scenario: Laptops category validation while not logged in
    Given I open demoblaze Ecommerce website
    When I click the LAPTOPS CATEGORY button
    Then i verify product displayed are of only LAPTOPS CATEGORY

    Scenario: Monitors category validation while logged in
    Given I open demoblaze Ecommerce website
    When I click the MONITORS CATEGORY button
    Then i verify product displayed are of only MONITORS CATEGORY

    Scenario: Monitors category validation while not logged in
     Given I open demoblaze Ecommerce website
    When I click the MONITORS CATEGORY button
    Then i verify product displayed are of only MONITORS CATEGORY