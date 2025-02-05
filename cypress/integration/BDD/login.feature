Feature: Demoblaze Ecommerce test validation​
 Application regression​
@regression @smoke

Scenario: Validate login with valid credentials
    Given I open demoblaze Ecommerce website
    When I click the Login Button
    Then I enter a valid Username
    When I entered a Valid password
    Then I click on sign in Button
    When I Validate successful login to my account

Scenario: Verify unsuccessful login with empty username and empty password
    Given I open demoblaze Ecommerce website
    When I click the Login Button
    Then I click on sign in Button
    Then unsuccessful login message -Please fill out Username and Password.-

Scenario: Verify unsuccessful login with valid Password and empty username
    Given I open demoblaze Ecommerce website     
    When I click the Login Button
    Then I enter a valid Password and empty username
    Then I click on sign in Button
    Then unsuccessful login message -Please fill out Username and Password

Scenario: Verify unsuccessful login with valid Username and empty password
    Given I open demoblaze Ecommerce website    
    When I click the Login Button
    Then I enter a valid Username and empty password
    Then I click on sign in Button
    Then unsuccessful login message -Please fill out Username and Password

Scenario: verify unsuccessful login with invalid username and valid password
    Given I open demoblaze Ecommerce website   
    When I click the Login Button
    Then I enter invalid username and valid password
    Then I click on sign in Button
    Then unsuccessful login message -User does not exist