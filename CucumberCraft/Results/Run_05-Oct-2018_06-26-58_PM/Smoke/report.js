$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserStory_US868749.feature");
formatter.feature({
  "line": 1,
  "name": "Sort by functionality",
  "description": "",
  "id": "sort-by-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2057220704,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Sort by functionality testing",
  "description": "",
  "id": "sort-by-functionality;sort-by-functionality-testing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@TestId_APS_44"
    },
    {
      "line": 2,
      "name": "@UserStory_US868749"
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
  "name": "user verify Dropdown named \"Sort by:\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user select the Dropdown with value \"Start date\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user select the Dropdown with value \"End date\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select the Dropdown with value \"Promo code: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select the Dropdown with value \"Promo code: Z to A\"",
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
  "duration": 2005239100,
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
  "duration": 49041270,
  "error_message": "java.lang.ExceptionInInitializerError\r\n\tat com.CucumberCraft.Screenshot.ScreenshotTaker.\u003cclinit\u003e(ScreenshotTaker.java:19)\r\n\tat com.CucumberCraft.stepDefinitions.Browser_Excel_StepDef.user_launches_browser_with_url(Browser_Excel_StepDef.java:28)\r\n\tat ✽.Then user launches browser with url \"#TestUrl\"(UserStory_US868749.feature:6)\r\nCaused by: java.lang.NullPointerException\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.setWebDriver(DriverManager.java:89)\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.getWebDriver(DriverManager.java:47)\r\n\tat com.CucumberCraft.Screenshot.EventHandler.\u003cclinit\u003e(EventHandler.java:16)\r\n\tat com.CucumberCraft.Screenshot.ScreenshotTaker.\u003cclinit\u003e(ScreenshotTaker.java:19)\r\n\tat com.CucumberCraft.stepDefinitions.Browser_Excel_StepDef.user_launches_browser_with_url(Browser_Excel_StepDef.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\r\n\tat org.testng.TestNG.run(TestNG.java:1115)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
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
      "val": "Sort by:",
      "offset": 28
    }
  ],
  "location": "UserStrory_US859468.user_verify_Dropdown_named(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Start date",
      "offset": 37
    }
  ],
  "location": "UserStrory_US859468.user_select_the_Dropdown_with_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "End date",
      "offset": 37
    }
  ],
  "location": "UserStrory_US859468.user_select_the_Dropdown_with_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Promo code: A to Z",
      "offset": 37
    }
  ],
  "location": "UserStrory_US859468.user_select_the_Dropdown_with_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Promo code: Z to A",
      "offset": 37
    }
  ],
  "location": "UserStrory_US859468.user_select_the_Dropdown_with_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 224581075,
  "error_message": "java.lang.NullPointerException\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.setWebDriver(DriverManager.java:89)\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.getWebDriver(DriverManager.java:47)\r\n\tat com.CucumberCraft.stepDefinitions.CukeHooks.embedScreenshot(CukeHooks.java:136)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\r\n\tat org.testng.TestNG.run(TestNG.java:1115)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
});