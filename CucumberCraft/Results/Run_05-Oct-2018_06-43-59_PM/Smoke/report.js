$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserStory_US868749.feature");
formatter.feature({
  "line": 1,
  "name": "Sort by functionality",
  "description": "",
  "id": "sort-by-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9630618486,
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
  "duration": 1516565266,
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
  "duration": 3326053389,
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
formatter.result({
  "duration": 12622489571,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027ptextcode\u0027]\"}\n  (Session info: chrome\u003d67.0.3396.79)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027PC391477\u0027, ip: \u002710.224.202.32\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\716676\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:57704}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.79, webStorageEnabled: true}\nSession ID: 34cf55ffa3e5f23f335a90438c025bca\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027ptextcode\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:109)\r\n\tat com.sun.proxy.$Proxy21.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:193)\r\n\tat com.CucumberCraft.stepDefinitions.UserStory_US859342.user_enters_the_Promo_code_in_Search_box_named(UserStory_US859342.java:96)\r\n\tat ✽.And user enters the Promo code \"#Promo Code\" in Search box named \" Promo / PST / TA Code \"(UserStory_US868749.feature:7)\r\n",
  "status": "failed"
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
  "duration": 1207786901,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027PC391477\u0027, ip: \u002710.224.202.32\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\716676\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:57704}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.79, webStorageEnabled: true}\nSession ID: 34cf55ffa3e5f23f335a90438c025bca\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:742)\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.getWebDriver(DriverManager.java:51)\r\n\tat com.CucumberCraft.stepDefinitions.CukeHooks.embedScreenshot(CukeHooks.java:136)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
});