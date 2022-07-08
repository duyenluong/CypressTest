# TecAllianceCypressTest

Cypress test for Google Search

## Prerequisites
- Node is installed [Guide](https://nodejs.org/en/download/package-manager/)
- All packages installed using `npm i`
## Commands
- `npx cypress open` to launch the GUI
## Next steps should be:
- Select E2E Testing
- Choose a browser : Chrome
- Start E2E Testing on Chrome
- Click on "Google.feature" to run the test
## Project Structure

```
├── cypress      
│   ├── e2e 
            ├── test             --This is where the test is
            ├── **.feature       -- This is where the scenario is
|   ├── fixtures 
│   ├── pages           -- Page objects
│   ├── plugins
│   └── support
```
## Notes

- For the best coding experience and correct style check please use `Visual Studio Code` to review.
- The project is written in javascript using page object pattern. While cypress discourages the use of pageobject in favor of app actions, the use of pageobject is simply for demonstration purpose.
- `prettier` and `eslint` is used to keep code neat.
