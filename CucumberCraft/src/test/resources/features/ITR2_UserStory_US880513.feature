Feature: Expanded PromoBox fileds Validation

  @TestId_APS_30 @UserStory_US880513
  Scenario: Verify the field in the expanded promo box in Search result page
  
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user verify that field "Promo code: " field in promo heading
    And user verify that field "Promotion start to end dates:" field is present
    And user verify that field "Is member registration required?" field is present
    And user verify that field "Member must register between:" field is present
    And user verify that field "Member must travel between:" field is present
    And user verify that field "Late registrations may be processed by" field is present
    And user verify that field "Is this a targeted promotion?" field is present
    And user verify that field "TA codes" field is present
    And user verify that field "Direct mailer:" field is present
    And user verify that field "Marketing page URL:" field is present
    And user verify that field "Email URLs:" field is present
    And user verify that field "Partner codes:" field is present
    And user verify that field "How to earn" field is present
    And user verify that field "Fulfillment" field is present
    And user verify that field "PST codes:" field is present
    And user verify that field "Resolve issues" field is present
    And user verify that field "aa.com view" field is present
    And user verify that field "Terms and conditions" field is present
