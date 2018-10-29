$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ITR1_UserStory_US859342.feature");
formatter.feature({
  "line": 1,
  "name": "Promo_PST_TA Search box UI validation",
  "description": "",
  "id": "promo-pst-ta-search-box-ui-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2004367200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify search label name is Promo_PST_TA Code",
  "description": "",
  "id": "promo-pst-ta-search-box-ui-validation;verify-search-label-name-is-promo-pst-ta-code",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TestId_APS_01"
    },
    {
      "line": 3,
      "name": "@UserStory_US859342"
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
  "name": "user validates searchbox named \" Promo / PST / TA Code \" is present on the page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user validates searchbox named \" Promo / PST / TA Code \" is \"enabled\"",
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
  "duration": 1188764900,
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
  "duration": 17914714000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Promo / PST / TA Code ",
      "offset": 32
    }
  ],
  "location": "UserStory_US859342.user_validates_searchbox_named_is_present_on_the_page(String)"
});
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 11141753500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027ptextcode\u0027]\"}\n  (Session info: chrome\u003d70.0.3538.67)\n  (Driver info: chromedriver\u003d2.43.600233 (523efee95e3d68b8719b3a1c83051aa63aa6b10d),platform\u003dLinux 4.9.93-linuxkit-aufs x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027AJIT-PC\u0027, ip: \u002710.79.100.73\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600233 (523efee95e3d68..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:45983}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.67, webStorageEnabled: true, webdriver.remote.sessionid: 21b3f784d1ea069f24a561c0293...}\nSession ID: 21b3f784d1ea069f24a561c0293faac4\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027ptextcode\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:109)\r\n\tat com.sun.proxy.$Proxy22.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:193)\r\n\tat com.CucumberCraft.stepDefinitions.UserStory_US859342.user_validates_searchbox_named_is_present_on_the_page(UserStory_US859342.java:24)\r\n\tat ✽.And user validates searchbox named \" Promo / PST / TA Code \" is present on the page(ITR1_UserStory_US859342.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": " Promo / PST / TA Code ",
      "offset": 32
    },
    {
      "val": "enabled",
      "offset": 61
    }
  ],
  "location": "UserStory_US859342.user_validates_searchbox_named_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
