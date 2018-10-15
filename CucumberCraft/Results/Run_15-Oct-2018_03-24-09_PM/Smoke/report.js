$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserStory_US869555.feature");
formatter.feature({
  "line": 1,
  "name": "pagination of box",
  "description": "",
  "id": "pagination-of-box",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9417494959,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify the pagination is present",
  "description": "",
  "id": "pagination-of-box;verify-the-pagination-is-present",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@TestId_APS_45"
    },
    {
      "line": 2,
      "name": "@UserStory_US869555"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user loads the data from \"excel\" located at \"src\\test\\resources\\Fixture\\Promo_DB_Data.xlsx\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user launches browser with url \"#TestUrl\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters the Promo code \"#Promo Code\" in Search box named \" Promo / PST / TA Code \"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user checks that maximum 10 promo box are present in search result",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user can see page number and pagination icon",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "excel",
      "offset": 26
    },
    {
      "val": "src\\test\\resources\\Fixture\\Promo_DB_Data.xlsx",
      "offset": 45
    }
  ],
  "location": "Browser_Excel_StepDef.user_loads_the_data_from_located_at(String,String)"
});
formatter.result({
  "duration": 1635071429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#TestUrl",
      "offset": 32
    }
  ],
  "location": "Browser_Excel_StepDef.user_launches_browser_with_url(String)"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 33318256991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#Promo Code",
      "offset": 28
    },
    {
      "val": " Promo / PST / TA Code ",
      "offset": 62
    }
  ],
  "location": "UserStory_US859342.user_enters_the_Promo_code_in_Search_box_named(String,String)"
});
formatter.embedding("image/png", "embedded1.png");
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 991317201,
  "status": "passed"
});
formatter.match({
  "location": "UserStory_US859342.user_clicks_on_the_search_button()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 731595220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 25
    }
  ],
  "location": "UserStory_US869555.user_checks_that_maximum_promo_box_are_present_in_search_result(int)"
});
formatter.embedding("image/png", "embedded5.png");
formatter.embedding("image/png", "embedded6.png");
formatter.embedding("image/png", "embedded7.png");
formatter.embedding("image/png", "embedded8.png");
formatter.embedding("image/png", "embedded9.png");
formatter.embedding("image/png", "embedded10.png");
formatter.embedding("image/png", "embedded11.png");
formatter.result({
  "duration": 8036383155,
  "status": "passed"
});
formatter.match({
  "location": "UserStory_US869555.user_can_see_page_number_and_next_icon()"
});
formatter.embedding("image/png", "embedded12.png");
formatter.embedding("image/png", "embedded13.png");
formatter.embedding("image/png", "embedded14.png");
formatter.embedding("image/png", "embedded15.png");
formatter.embedding("image/png", "embedded16.png");
formatter.embedding("image/png", "embedded17.png");
formatter.embedding("image/png", "embedded18.png");
formatter.embedding("image/png", "embedded19.png");
formatter.result({
  "duration": 2340055995,
  "status": "passed"
});
formatter.after({
  "duration": 3972618990,
  "status": "passed"
});
formatter.before({
  "duration": 7430074821,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify the pagination is absent",
  "description": "",
  "id": "pagination-of-box;verify-the-pagination-is-absent",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@TestId_APS_46"
    },
    {
      "line": 12,
      "name": "@UserStory_US869555"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user loads the data from \"excel\" located at \"src\\test\\resources\\Fixture\\Promo_DB_Data.xlsx\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user launches browser with url \"#TestUrl\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user enters the Promo code \"#Promo Code\" in Search box named \" Promo / PST / TA Code \"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "promo box is less than 9 then user can\u0027t see page number and pagination icon",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "excel",
      "offset": 26
    },
    {
      "val": "src\\test\\resources\\Fixture\\Promo_DB_Data.xlsx",
      "offset": 45
    }
  ],
  "location": "Browser_Excel_StepDef.user_loads_the_data_from_located_at(String,String)"
});
formatter.result({
  "duration": 42881314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#TestUrl",
      "offset": 32
    }
  ],
  "location": "Browser_Excel_StepDef.user_launches_browser_with_url(String)"
});
formatter.embedding("image/png", "embedded20.png");
formatter.result({
  "duration": 33075927045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#Promo Code",
      "offset": 28
    },
    {
      "val": " Promo / PST / TA Code ",
      "offset": 62
    }
  ],
  "location": "UserStory_US859342.user_enters_the_Promo_code_in_Search_box_named(String,String)"
});
formatter.embedding("image/png", "embedded21.png");
formatter.embedding("image/png", "embedded22.png");
formatter.result({
  "duration": 863238657,
  "status": "passed"
});
formatter.match({
  "location": "UserStory_US859342.user_clicks_on_the_search_button()"
});
formatter.embedding("image/png", "embedded23.png");
formatter.embedding("image/png", "embedded24.png");
formatter.result({
  "duration": 715647046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 23
    }
  ],
  "location": "UserStory_US869555.promo_box_is_less_than_then_user_can_t_see_page_number_and_pagination_icon(int)"
});
formatter.embedding("image/png", "embedded25.png");
formatter.embedding("image/png", "embedded26.png");
formatter.embedding("image/png", "embedded27.png");
formatter.embedding("image/png", "embedded28.png");
formatter.embedding("image/png", "embedded29.png");
formatter.embedding("image/png", "embedded30.png");
formatter.embedding("image/png", "embedded31.png");
formatter.embedding("image/png", "embedded32.png");
formatter.embedding("image/png", "embedded33.png");
formatter.result({
  "duration": 23271924911,
  "status": "passed"
});
formatter.after({
  "duration": 2166460750,
  "status": "passed"
});
});