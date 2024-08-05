Feature: Products Search Functionality

Scenario: [S_1004, TC_1009] Perform a Basic Search
  Given User is on the homepage of the e-commerce site
  When User enter "cream" into the search bar
  Then User should see relevant search results for creams

Scenario: [S_1005, TC_1010] Perform an Empty Search
  Given User is on the homepage of the e-commerce site
  When User submit an empty search query
  Then User should see a message indicating that no search results were found

Scenario: [S_1006, TC_1011] Search with Multiple Keywords
    Given User is on the homepage of the e-commerce site
    When User enters "shaving cream" into the search bar
    Then User should see relevant search results for toilette spray