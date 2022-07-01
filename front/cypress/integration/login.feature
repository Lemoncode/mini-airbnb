Feature: Login Page

  Scenario: Visit login page and type invalid credentials
    Given I visit the login page
    When I type valid user 'admin@email.com'
    But I type invalid password 'xxxx'
    And I press login button
    Then I should see an alert with a message

  Scenario: Visit login page and type valid credentials
    Given I visit the login page
    When I type valid user 'admin@email.com'
    But I type valid password 'test'
    And I press login button
    Then I should navigate to house list


