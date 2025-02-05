Feature: Demoblaze Ecommerce test validation​
 Application regression​
@regression @smoke


Scenario: Validate contact button is working
    Given I open demoblaze E commerce 
    When I click contact button
    Then I click contact Email
    When I click contact name 
    Then I fill the contact message
    When I click the send message button
    Then I validate Contact button is working


    Scenario: Validate message, name and Message field is present
    Given I open demoblaze E commerce 
    When I click contact button
    Then I click contact Email
    When I click contact name 


Scenario: Validate alert Thanks for the message!!
    Given I open demoblaze E commerce 
    When I click contact button
    Then I click contact Email
    When I click contact name 
    Then I fill the contact message
    When I click the send message button
    Then I validate alert Thanks for the message


   

