  Feature: Restcall and Promo box field validation for multiple or single
  
 @TestId_APS_22
  Scenario: Verify expand button against promo code for multiple promo code and ui fields with respect to Json data  
  
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user perform a restcalls
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user clicks on the Expand button against at "RVGLD" to see details
    And user verifies the UI with respect to Json
    
