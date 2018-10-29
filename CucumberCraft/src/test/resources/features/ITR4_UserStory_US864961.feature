Feature: Search by PST code from APT

 @TestId_APS_47 @UserStory_US864961
   
  Scenario: Search by PPST code from APT
   Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_PST_TA_keyword_targeted_data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#PST code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user hit the LSCS service to get "#PST code"
  