  Feature: Json and Promo box field validation for multiple or single

 
  @TestId_APS_21 @UserStory_US859355
  Scenario: Verify fields name in each promobox present on the page
  Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user verify that the PromoBox is present on the page
    And user verify that all the PromoBox have "Promotion dates:" field in it 
    And user verify that all the PromoBox have "PST codes:" field in it
    And user verify that all the PromoBox have "TA codes:" field in it 
    And user verify that all the PromoBox have "Partner codes:" field in it 
    And user verify that all the PromoBox have "Keywords:" field in it

  

 # @TestId_APS_22 @UserStory_US859355
 # Scenario: Verify expand button against promo code for multiple promo code and ui fields with respect to Json data  
  
    #Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    #Then user launches browser with url "#TestUrl"
    #And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    #And user clicks on the search button
   # And user clicks on the Expand button against at "RVGLD" to see details
    #And user launch the Json url "#jsonPath"
    #And user verifies the UI with respect to Json
    
  @TestId_APS_23 @UserStory_US859355
  Scenario: Verify expand button against promo code for sigle result of  promo code and ui fields with respect to Json data
  
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user verifies expand button is disabled against promo code "#Promo Code"
    And user launch the Json url "#jsonPath"
    And user verifies the UI with respect to Json
    
    
   @TestId_APS_24 @UserStory_US859355
  Scenario: Verify expand button against promo code for multiple promo code and ui fields with respect to Json data  
  
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user verifies expand button is disabled against promo code "#Promo Code"
    And user launch the Json url "#jsonPath"
    And user verifies the UI with respect to Json 
    
       @TestId_APS_25 @UserStory_US859355
  Scenario: Verify expand button against promo code for multiple promo code and ui fields with respect to Json data  
  
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user verifies expand button is disabled against promo code "#Promo Code"
    And user launch the Json url "#jsonPath"
    And user verifies the UI with respect to Json
    
    
      
       @TestId_APS_26 @UserStory_US859355
  Scenario: Verify expand button against promo code for multiple promo code and ui fields with respect to Json data  
  
     Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user verifies expand button is disabled against promo code "#Promo Code"
    And user launch the Json url "#jsonPath"
    And user verifies the UI with respect to Json
    
    
    
    @TestId_APS_27 @UserStory_US859355
  Scenario: Verify expand button against promo code for multiple promo code and ui fields with respect to Json data  
  
     Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user verifies expand button is disabled against promo code "#Promo Code"
    And user launch the Json url "#jsonPath"
    And user verifies the UI with respect to Json
    
     @TestId_APS_28 @UserStory_US859355
  Scenario: Verify expand button against promo code for multiple promo code and ui fields with respect to Json data  
  
     Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user verifies expand button is disabled against promo code "#Promo Code"
    And user launch the Json url "#jsonPath"
    And user verifies the UI with respect to Json
    
    
     @TestId_APS_29 @UserStory_US859355
  Scenario: Verify expand button against promo code for multiple promo code and ui fields with respect to Json data  
  
     Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user verifies expand button is disabled against promo code "#Promo Code"
    And user launch the Json url "#jsonPath"
    And user verifies the UI with respect to Json
    
    
    
   

    
    
  
  
  
    
