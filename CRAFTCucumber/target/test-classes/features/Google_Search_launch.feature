
Feature: Promo_PST_TA Search

  @TestId_APS_01

  Scenario: Verify search label name is "Promo/PST/TA Code"
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user validate the search box named "Promo / PST / TA Code"
 
 
 @TestId_APS_02
    Scenario: Verify the Search Box have Magnifier glass icon next to it.
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user can see the Magnifier glass icon on next to Search box.
    
   @TestId_APS_03
    Scenario: Verify "Current Promos only" checkbox is present & is clickable
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user validates checkbox named "Current Promos only" is present on the page
    And user is checkbox is "enabled"
    
    @TestId_APS_04
    Scenario: Verify  the field should be un-editable when the search is in progress.
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user validates checkbox named "Current Promos only" is present on the page
    And user is checkbox is "enabled"
    
    
     
    