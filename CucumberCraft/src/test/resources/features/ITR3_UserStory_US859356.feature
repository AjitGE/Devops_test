Feature: Promotion Detail View UI Component validation
    @TestId_APS_40 @UserStory_US859356
  
  Scenario: Verify expand button against promo code for multiple promo code and ui fields with respect to Json data  
  
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user clicks on the Expand button against at "RVGLD" to see details
    And user launch the Json url "#jsonPath"
    And user verifies the UI with respect to Json
    
     @TestId_APS_41 @UserStory_US859356
  Scenario: Verify expand button against promo code for multiple promo code and ui fields with respect to Json data  
  
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user clicks on the Expand button against at "RVGLD" to see details
    And user launch the Json url "#jsonPath"
    And user verifies the UI with respect to Json
    
    
 
  @TestId_APS_43 @UserStory_US859356
  Scenario: Verify expand button against promo code for sigle result of  promo code and ui fields with respect to Json data
  
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user verifies expand button is disabled against promo code "#Promo Code"
    And user launch the Json url "#jsonPath"
    And user verifies the UI with respect to Json