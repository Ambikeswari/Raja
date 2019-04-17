#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Successful Login
  I want to use this template for my feature file

  @Login
  Scenario: Valid UserName and Password
    Given Application loaded in the browsers
    When I enter Username
    And Password
    And Click on Login
    Then Application loaded succcessfully
    

  @GoogleMultipleSearch
  Scenario Outline: GoogleSearch
    Given Application loaded in the google browser
    When Enter the search <keywords>
    Then Get the results

    Examples: 
      | keywords |
      | Selenium |   
      | Gmail |     
 