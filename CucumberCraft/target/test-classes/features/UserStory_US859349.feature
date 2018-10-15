Feature: Keywords,Misc. Serarch, Date Search, Partner code
  
   @TestId_APS_31 @UserStory_US859349

Scenario: Validating All screen elements
    Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
    Then user launches browser with url "#TestUrl"
    Then user validates the TextBox named " Promo / PST / TA Code " present on the page
    Then user validates texbox named " Promo / PST / TA Code " have button next to it
    Then user validates the checkbox named " Current promos only " present on the page
    Then user validates the TextBox named " Keywords " present on the page
    Then user validates texbox named " Keywords " have button next to it
    Then user validates the field named " (max of 5; separated by commas) " is present on the page
    Then user validates the TextBox named " Effective date range " present on the page
    Then user validates the calendar icon is present against textbox named " Effective date range "
    Then user validates the TextBox named " to " present on the page
    Then user validates the calendar icon is present against textbox named " to "
    Then user validates the field named " Misc search options: " is present on the page
    Then user validates the radio button named "Targeted Only" present on the page
    Then user validates the radio button named "Non-Targeted Only" present on the page
    Then user validates the checkbox named " Current promos Only " present on the page
    Then user validates the TextBox named " Partner codes " present on the page
    Then user validates the button named " Search " present on the page
    Then user validates the button named "Clear all" present on the page
    
 @TestId_APS_32 @UserStory_US859349
 
 Scenario: Validating message of the Keywords Text box
      Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
      Then user launches browser with url "#TestUrl"
      Then user enters text "#Promo Code" in textbox named " Keywords "
      Then user click on the plus button in the textbox named " Keywords "
      Then user validates the message "Special characters not allowed" on the screen
      And user enters text "#Keywords" in textbox named " Keywords "
      Then user validates the message "Max of 300 characters can be entered" on the screen
      And user enters text "#Keywords1" in textbox named " Keywords "
      Then user click on the plus button in the textbox named " Keywords "
      Then user validates the message "A max of 5 keywords can be entered" on the screen
      
@TestId_APS_33 @UserStory_US859349
 
 Scenario: Adding and removing keywords 
      Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
      Then user launches browser with url "#TestUrl"
      And user enters text "#Keywords1" in textbox named " Keywords "
      Then user click on the plus button in the textbox named " Keywords "
      And user can see the max five keywords from entered "#Keywords1" in the bubble
      And user can remove bubble by clicking on "1" crros icon
      And user can remove bubble by clicking on "3" crros icon
      
      

      
    @TestId_APS_34 @UserStory_US859349
 
 Scenario: Effective date range and to date box date format and two year validation message
      Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
      Then user launches browser with url "#TestUrl"
      And user enters text "#date" in date textbox named " Effective date range "
      And user click on the calendar button in textbox named " Effective date range "
      Then user validates the message "Date format should be MM/DD/YYYY" on the screen
      And user enters text "#date1" in date textbox named " to "
      And user click on the calendar button in textbox named " Effective date range "
      Then user validates the message "Date format should be MM/DD/YYYY" on the screen
      And user enters text "#date2" in date textbox named " Effective date range "
      And user click on the calendar button in textbox named " Effective date range "
      Then user validates the message "Searches must be within 2 years" on the screen
      And user enters text "#date2" in date textbox named " to "
      And user click on the calendar button in textbox named " to "
      Then user validates the message "Searches must be within 2 years" on the screen
      And user enters text "09/26/2018" in date textbox named " Effective date range "
      And user enters text "09/26/2017" in date textbox named " to "
      Then user validates the message "Start date cannot be greater than end date" on the screen
      
      
       @TestId_APS_35 @UserStory_US859349
 
 Scenario: Effective date range and to date box date format and two year validation message
      Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
      Then user launches browser with url "#TestUrl"
      And user click on the calendar button in textbox named " Effective date range "
      And select date from the calendar with month "09" date "26" year "2017"
      And user click on the calendar button in textbox named " to "
      And select date from the calendar with month "09" date "26" year "2018"
      And user click on the calendar button in textbox named " Effective date range "
      And user click on "previous" in calendar
       And user click on "next" in calendar
      
     @TestId_APS_36 @UserStory_US859349
 
 Scenario: Miscelaneous fileld
      Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
      Then user launches browser with url "#TestUrl"
      And user selects radio button named "Targeted Only"
      And user select the checkbox named " Current promos Only "
       And user selects radio button named "Non-Targeted Only"
      
        
        
        @TestId_APS_37 @UserStory_US859349
 
 Scenario: Partner codes
      Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
       Then user launches browser with url "#TestUrl"
        Then user enters text "AA" in textbox named " Partner codes "
        And user clicks on the button " Search "
   
     @TestId_APS_38 @UserStory_US859349
 
 Scenario: Search button
      Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
       Then user launches browser with url "#TestUrl"
        Then user enters text "AA" in textbox named " Partner codes "
        And user clicks on the button " Search "
               
     @TestId_APS_39 @UserStory_US859349
 

 Scenario: clear all button
      Given user loads the data from "excel" located at "src\test\resources\Fixture\Promo_DB_Data.xlsx"
       Then user launches browser with url "#TestUrl"
       And user enters text "#Keywords" in textbox named " Keywords "       
        Then user click on the plus button in the textbox named " Keywords "
      And user enters text "#date" in date textbox named " Effective date range "
       And user enters text "#date1" in date textbox named " to "            
      And user selects radio button named "Targeted Only"
      And user select the checkbox named " Current promos Only "
       Then user enters text "AA" in textbox named " Partner codes "
        And user clicks on the button "Clear all"