Feature: Google

    Scenario Outline: User is able to search on Google home page

        Given User is at the Google home page
        When  User searching the keyword as '<keyword>'
        Then  The Result is contain text as '<keyword>'
        Examples:
            | keyword |
            |Behavior Driven |