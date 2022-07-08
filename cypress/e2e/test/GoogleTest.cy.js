import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import {googlePage} from "../../pages/GooglePage"

Given('User is at the Google home page', () => {
  googlePage.openGooglePage()
})

When('User searching the keyword as {string}', (keyword) => {
  googlePage.searchWithKeywordFromGooglePage(keyword)
})

Then('The Result is contain text as {string}',(keyword) =>{
  googlePage.VerifyResultContainText(keyword)
})