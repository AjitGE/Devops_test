 Feature: pagination of box
 @TestId_APS_45 @UserStory_US869555
   
  Scenario: Verify the pagination is present 
  Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    When user checks that maximum 10 promo box are present in search result
    Then user can see page number and pagination icon
    
     @TestId_APS_46 @UserStory_US869555
   
  Scenario: Verify the pagination is absent
  Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    When promo box is less than 9 then user can't see page number and pagination icon
    
    