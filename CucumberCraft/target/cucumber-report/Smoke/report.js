$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserStory_US880513.feature");
formatter.feature({
  "line": 1,
  "name": "Expanded PromoBox fileds Validation",
  "description": "",
  "id": "expanded-promobox-fileds-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 30242845872,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify the field in the expanded promo box in Search result page",
  "description": "",
  "id": "expanded-promobox-fileds-validation;verify-the-field-in-the-expanded-promo-box-in-search-result-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TestId_APS_30"
    },
    {
      "line": 3,
      "name": "@UserStory_US880513"
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
  "name": "user enters the Promo code \"#Promo Code\" in Search box named \" Promo / PST / TA Code \"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user verify that field \"Promo code: \" field in promo heading",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user verify that field \"Promotion start to end dates:\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user verify that field \"Is member registration required?\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user verify that field \"Member must register between:\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user verify that field \"Member must travel between:\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user verify that field \"Late registrations may be processed by\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user verify that field \"Is this a targeted promotion?\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user verify that field \"TA codes\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user verify that field \"Direct mailer:\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user verify that field \"Marketing page URL:\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user verify that field \"Email URLs:\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user verify that field \"Partner codes:\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user verify that field \"How to earn\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user verify that field \"Fulfillment\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user verify that field \"PST codes:\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user verify that field \"Resolve issues\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user verify that field \"aa.com view\" field is present",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user verify that field \"Terms and conditions\" field is present",
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
  "duration": 3667032169,
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
  "duration": 32482171875,
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
  "duration": 1182820146,
  "status": "passed"
});
formatter.match({
  "location": "UserStory_US859342.user_clicks_on_the_search_button()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 754951952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Promo code: ",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_in_promo_heading(String)"
});
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "duration": 10711325671,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div//span/b[contains(text(),\u0027Promo code: \u0027)]\"}\n  (Session info: chrome\u003d67.0.3396.79)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027PC391477\u0027, ip: \u002710.79.100.53\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\716676\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60813}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.79, webStorageEnabled: true}\nSession ID: a7fc9fd62b8480dc8738a2eb6d6d59e2\n*** Element info: {Using\u003dxpath, value\u003d//div//span/b[contains(text(),\u0027Promo code: \u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:109)\r\n\tat com.sun.proxy.$Proxy20.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:193)\r\n\tat com.CucumberCraft.stepDefinitions.UserStroy_US880513.user_verify_that_field_field_in_promo_heading(UserStroy_US880513.java:23)\r\n\tat ✽.And user verify that field \"Promo code: \" field in promo heading(UserStory_US880513.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Promotion start to end dates:",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Is member registration required?",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Member must register between:",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Member must travel between:",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Late registrations may be processed by",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Is this a targeted promotion?",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TA codes",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Direct mailer:",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Marketing page URL:",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email URLs:",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Partner codes:",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "How to earn",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fulfillment",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PST codes:",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Resolve issues",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "aa.com view",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Terms and conditions",
      "offset": 24
    }
  ],
  "location": "UserStroy_US880513.user_verify_that_field_field_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1527333893,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027PC391477\u0027, ip: \u002710.79.100.53\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\716676\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60813}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.79, webStorageEnabled: true}\nSession ID: a7fc9fd62b8480dc8738a2eb6d6d59e2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:742)\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.getWebDriver(DriverManager.java:51)\r\n\tat com.CucumberCraft.stepDefinitions.CukeHooks.embedScreenshot(CukeHooks.java:137)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
});