Feature: User Login

Scenario: [S_1001, TC_1001] Log in with valid Credentials
  Given the User is on Login Page
  And Sing In button is displayed
  When the User enters their Username and Password
  And the User click Sing In button
  Then the User is authenticated
  And the User is on the account page