Feature: Tab name and Sort by : validation

   @TestId_APS_19 @UserStory_US859468
  Scenario: Verify tab names on the page 
  Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user verifies that tab name "Search results" is present on the page
    And user verifies that tab name " Trending promos" is present on the page
    And user verifies that tab name "Latest promos" is present on the page
 
 @TestId_APS_20 @UserStory_US859468
  Scenario: Verify the sort dropdown and their value
  Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user verify Dropdown named "Sort by:" 
    And user select the Dropdown with value "Start date"
    And user select the Dropdown with value "End date"
    And user select the Dropdown with value "Promo code: A to Z"
    And user select the Dropdown with value "Promo code: Z to A"