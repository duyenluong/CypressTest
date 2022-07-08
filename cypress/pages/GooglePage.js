class GooglePage{
    //Element
    get SearchTxt(){
       return cy.get('[name="q"]')
    }
    get ResultList(){
       return cy.get('a h3')
    }
    
    //Action
    openGooglePage(){
        cy.visit('/')
        cy.get('img[alt="Google"]').should('be.visible')
        return this
    }
    searchWithKeywordFromGooglePage(text){
        this.SearchTxt.should('be.visible').clear().type(text).type('{enter}')
    }
    
    //Assert
    VerifyResultContainText(text){
        this.ResultList.should('be.visible').and('contain',text)
    }
}
export const googlePage = new GooglePage