Feature: User Registration

  As a new user
  I want to register on the website
  So that I can access my account

  Scenario: [S_1003, TC_1008] Successful Registration
    Given I am on the registration page
    When I fill in the registration form with valid details
    And I click the register button
    Then I should be redirected to the dashboard
    And I should see a welcome message
