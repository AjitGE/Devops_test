 Feature: Sort by functionality 
 @TestId_APS_44 @UserStory_US868749
   
  Scenario: Sort by functionality testing
  Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user verify Dropdown named "Sort by:" 
    And user select the Dropdown with value "Start date"
    And user select the Dropdown with value "End date"
    And user select the Dropdown with value "Promo code: A to Z"
    And user select the Dropdown with value "Promo code: Z to A"
   
