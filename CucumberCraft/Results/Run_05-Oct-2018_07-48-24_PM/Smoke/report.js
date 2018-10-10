$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserStory_US869555.feature");
formatter.feature({
  "line": 1,
  "name": "pagination of box",
  "description": "",
  "id": "pagination-of-box",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9292173181,
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
  "name": "user checks that maximum 9 promo box are present in search result",
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
  "duration": 1432326095,
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
  "duration": 29320277946,
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
  "duration": 958527482,
  "status": "passed"
});
formatter.match({
  "location": "UserStory_US859342.user_clicks_on_the_search_button()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 707259589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 25
    }
  ],
  "location": "UserStory_US869555.user_checks_that_maximum_promo_box_are_present_in_search_result(int)"
});
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "duration": 2665450711,
  "error_message": "java.lang.AssertionError: expected [9] but found [10]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:388)\r\n\tat org.testng.Assert.assertEquals(Assert.java:398)\r\n\tat com.CucumberCraft.stepDefinitions.UserStory_US869555.user_checks_that_maximum_promo_box_are_present_in_search_result(UserStory_US869555.java:25)\r\n\tat ✽.When user checks that maximum 9 promo box are present in search result(UserStory_US869555.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserStory_US869555.user_can_see_page_number_and_next_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2285124282,
  "status": "passed"
});
formatter.before({
  "duration": 7086838173,
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
  "duration": 53063977,
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
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "duration": 29037238571,
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
formatter.embedding("image/png", "embedded7.png");
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "duration": 963161133,
  "status": "passed"
});
formatter.match({
  "location": "UserStory_US859342.user_clicks_on_the_search_button()"
});
formatter.embedding("image/png", "embedded9.png");
formatter.embedding("image/png", "embedded10.png");
formatter.result({
  "duration": 705212374,
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
formatter.embedding("image/png", "embedded11.png");
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "duration": 11890582264,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ng-star-inserted\u0027]\"}\n  (Session info: chrome\u003d67.0.3396.79)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027PC391477\u0027, ip: \u002710.79.100.40\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\716676\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52419}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.79, webStorageEnabled: true}\nSession ID: 40ebbd4b67f9f6becd3974df696422ab\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027ng-star-inserted\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:109)\r\n\tat com.sun.proxy.$Proxy22.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:193)\r\n\tat com.CucumberCraft.stepDefinitions.UserStory_US869555.promo_box_is_less_than_then_user_can_t_see_page_number_and_pagination_icon(UserStory_US869555.java:45)\r\n\tat ✽.When promo box is less than 9 then user can\u0027t see page number and pagination icon(UserStory_US869555.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 457295253,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027PC391477\u0027, ip: \u002710.79.100.40\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\716676\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52419}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.79, webStorageEnabled: true}\nSession ID: 40ebbd4b67f9f6becd3974df696422ab\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:742)\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.getWebDriver(DriverManager.java:51)\r\n\tat com.CucumberCraft.stepDefinitions.CukeHooks.embedScreenshot(CukeHooks.java:136)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
});