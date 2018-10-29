Feature: Promo_PST_TA Search box UI validation

  @TestId_APS_01 @UserStory_US859342
  Scenario: Verify search label name is Promo_PST_TA Code
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user validates searchbox named " Promo / PST / TA Code " is present on the page
    And user validates searchbox named " Promo / PST / TA Code " is "enabled"

  @TestId_APS_02 @UserStory_US859342
  Scenario: Verify the Search Box have Magnifier glass icon next to it.
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user can see the "Magnifier glass" icon.
    And user validates Button named "" is "enabled"

  @TestId_APS_03 @UserStory_US859342
  Scenario: Verify Current Promos only checkbox is present & is clickable
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user validates checkbox named " Current Promos only " is present on the page
    And user validates Checkbox named " Current Promos only " is "enabled"

  @TestId_APS_04 @UserStory_US859342
  Scenario: Verify the Error message Required
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user validates the error message "Required" on the page

  @TestId_APS_05 @UserStory_US859342
  Scenario: Verify the Error message Enter at least 2 characters
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user validates the error message "Enter at least 2 characters" on the page

  @TestId_APS_06 @UserStory_US859342
  Scenario: Verify the Error message Special characters not allowed
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user validates the error message "Special characters not allowed" on the page

  @TestId_APS_07 @UserStory_US859342
  Scenario: Verify the maximum character limit of error message A max of 5 characters can be entered
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user validates the error message "A max of 5 characters can be entered" on the page

  @TestId_APS_08 @UserStory_US859342
  Scenario: Verify search button will work only when the user clicks on the magnifying glass or  Enter key is pressed.
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user validates Button named "" is "enabled"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button

  @TestId_APS_09 @UserStory_US859342
  Scenario: Verify search button will work only when the user clicks on the magnifying glass or  Enter key is pressed.
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user validates Button named "" is "enabled"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user use Enter keys to click on the search button

  @TestId_APS_10 @UserStory_US859342
  Scenario: Verify error message when APT cannot connect to any system.
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button
    And user validates error message on Search Result Tab "No Response from Ventana/LSCS" on the page

  @TestId_APS_11 @UserStory_US859342
  Scenario: Verify  the field should be un-editable when the search is in progress.
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user validates Button named "" is "enabled"

  @TestId_APS_12 @UserStory_US859342
  Scenario: Enter  a valid Promo code.
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button

  @TestId_APS_13 @UserStory_US859342
  Scenario: Enter  a valid PST code.
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button

  @TestId_APS_14 @UserStory_US859342
  Scenario: Enter  a valid TA code.
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button

  @TestId_APS_15 @UserStory_US859342
  Scenario: Enter  a invalid Promo code.
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button

  @TestId_APS_16 @UserStory_US859342
  Scenario: Enter  a invalid PST code.
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button

  @TestId_APS_17 @UserStory_US859342
  Scenario: Enter  a invalid TA code.
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user clicks on the search button

  @TestId_APS_18 @UserStory_US859342
  Scenario: Select checkbox Current promos only after entering Promo/PT/TA code.
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    And user enters the Promo code "#Promo Code" in Search box named " Promo / PST / TA Code "
    And user select the checkbox named " Current promos only "
    And user clicks on the search button
