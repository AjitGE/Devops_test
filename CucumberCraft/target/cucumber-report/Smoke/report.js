$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("serviceTestFile.feature");
formatter.feature({
  "line": 1,
  "name": "Restcall and Promo box field validation for multiple or single",
  "description": "",
  "id": "restcall-and-promo-box-field-validation-for-multiple-or-single",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2041203100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify expand button against promo code for multiple promo code and ui fields with respect to Json data",
  "description": "",
  "id": "restcall-and-promo-box-field-validation-for-multiple-or-single;verify-expand-button-against-promo-code-for-multiple-promo-code-and-ui-fields-with-respect-to-json-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TestId_APS_22"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user loads the data from \"excel\" located at \"src\\test\\resources\\Fixture\\Promo_DB_Data.xlsx\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user launches browser with url \"#TestUrl\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user perform a restcalls",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters the Promo code \"#Promo Code\" in Search box named \" Promo / PST / TA Code \"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the Expand button against at \"RVGLD\" to see details",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user verifies the UI with respect to Json",
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
  "location": "Browser_Excel_StepDef.user_loads_the_data_from_located_at(String,String)"
});
formatter.result({
  "duration": 6422719500,
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
formatter.result({
  "duration": 8176760800,
  "error_message": "java.lang.ExceptionInInitializerError\r\n\tat com.CucumberCraft.Screenshot.ScreenshotTaker.\u003cclinit\u003e(ScreenshotTaker.java:19)\r\n\tat com.CucumberCraft.stepDefinitions.Browser_Excel_StepDef.user_launches_browser_with_url(Browser_Excel_StepDef.java:29)\r\n\tat ✽.Then user launches browser with url \"#TestUrl\"(serviceTestFile.feature:7)\r\nCaused by: java.lang.NullPointerException\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.setWebDriver(DriverManager.java:93)\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.getWebDriver(DriverManager.java:51)\r\n\tat com.CucumberCraft.Screenshot.EventHandler.\u003cclinit\u003e(EventHandler.java:16)\r\n\tat com.CucumberCraft.Screenshot.ScreenshotTaker.\u003cclinit\u003e(ScreenshotTaker.java:19)\r\n\tat com.CucumberCraft.stepDefinitions.Browser_Excel_StepDef.user_launches_browser_with_url(Browser_Excel_StepDef.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserStory_US859355.user_perform_a_restcalls()"
});
formatter.result({
  "status": "skipped"
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
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserStory_US859342.user_clicks_on_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "RVGLD",
      "offset": 45
    }
  ],
  "location": "UserStory_US859355.user_clicks_on_the_Expand_button_against_at_to_see_details(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserStory_US859355.user_verifies_the_UI_with_respect_to_Json()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2788701800,
  "status": "passed"
});
});