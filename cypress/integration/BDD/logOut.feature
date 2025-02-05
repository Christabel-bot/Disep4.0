Feature: Demoblaze Ecommerce test validation​
 Application regression​
@regression @smoke

Scenario: Validate successful Logout
        Given i navigate to Demobaze Website
        When i click on Login
        Then i verify Login form is accessible
        When i enter username and password
        Then i click on Login button
        Then i verify successful Login
        When i click on Logout
        Then i verify successful logout