Feature: User Login

Scenario: [S_1001, TC_1001] Log in with valid Credentials
  Given the User is on Login Page
  And Sing In button is displayed
  When the User enters their Username and Password
  And the User click Sing In button
  Then the User is authenticated
  And the User is on the account page


Scenario: [S_1002, TC_1002, TC_1003, TC_1004, TC_1005, TC_1006, TC_1007] Log In with invalid credentials
  Given the User is on Login Page
  When User enter incorrect email: "<email>" or password: "<password>"
  And the User click Sing In button
  Then User should see correct error "<message>"
Examples:
|email            |password    |message                              |
|invalidemail     |password123 |Error: Incorrect login or password   |
|user@example.com |wrongpass   |Error: Incorrect login or password   |
|BLANK            |password123 |Error: Incorrect login or password   |
|user@example.com |BLANK       |Error: Incorrect login or password   |
|BLANK            |BLANK       |Error: Incorrect login or password   |