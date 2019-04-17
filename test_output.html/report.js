$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Successful Login",
  "description": "I want to use this template for my feature file",
  "id": "successful-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 267770,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Valid UserName and Password",
  "description": "",
  "id": "successful-login;valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Application loaded in the browsers",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I enter Username",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Password",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Application loaded succcessfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "steps.i_enter_Username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.click_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "steps.application_loaded_succcessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "GoogleSearch",
  "description": "",
  "id": "successful-login;googlesearch",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@GoogleMultipleSearch"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Application loaded in the google browser",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Enter the search \u003ckeywords\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Get the results",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "successful-login;googlesearch;",
  "rows": [
    {
      "cells": [
        "keywords"
      ],
      "line": 39,
      "id": "successful-login;googlesearch;;1"
    },
    {
      "cells": [
        "Selenium"
      ],
      "line": 40,
      "id": "successful-login;googlesearch;;2"
    },
    {
      "cells": [
        "Gmail"
      ],
      "line": 41,
      "id": "successful-login;googlesearch;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1509121,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "GoogleSearch",
  "description": "",
  "id": "successful-login;googlesearch;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@GoogleMultipleSearch"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Application loaded in the google browser",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Enter the search Selenium",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Get the results",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.application_loaded_in_the_google_browser()"
});
formatter.result({
  "duration": 8247334430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 17
    }
  ],
  "location": "steps.enter_the_search_Selenium(String)"
});
formatter.result({
  "duration": 1184116024,
  "status": "passed"
});
formatter.match({
  "location": "steps.get_the_results()"
});
formatter.result({
  "duration": 126888,
  "status": "passed"
});
formatter.before({
  "duration": 84903,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "GoogleSearch",
  "description": "",
  "id": "successful-login;googlesearch;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@GoogleMultipleSearch"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Application loaded in the google browser",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Enter the search Gmail",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Get the results",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.application_loaded_in_the_google_browser()"
});
formatter.result({
  "duration": 4586118793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 17
    }
  ],
  "location": "steps.enter_the_search_Selenium(String)"
});
formatter.result({
  "duration": 818445984,
  "status": "passed"
});
formatter.match({
  "location": "steps.get_the_results()"
});
formatter.result({
  "duration": 86303,
  "status": "passed"
});
});