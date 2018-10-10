$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Google_Search_launch.feature");
formatter.feature({
  "line": 2,
  "name": "Launch google page",
  "description": "",
  "id": "launch-google-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10136647775,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "",
  "description": "",
  "id": "launch-google-page;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TestId_APS_18"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user loads the data from \"excel\" located at \"src\\test\\resources\\Fixture\\Promo_DB_Data.xlsx\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user launches browser with url \"#TestUrl\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on the first hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user check the title is \"Make Digital Work for Your Business | Cognizant\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user check that multiple keywords are present \"#All_Keywords\"",
  "keyword": "And "
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
  "location": "Test_Steps.user_loads_the_data_from_located_at(String,String)"
});
formatter.result({
  "duration": 1305841069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#TestUrl",
      "offset": 32
    }
  ],
  "location": "Test_Steps.user_launches_browser_with_url(String)"
});
