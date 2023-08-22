import AmazonHomePage from "../models/pages/AmazonHomaPage";
import AmazonSearchResultPage from "../models/pages/AmazonSearchResultPage";

describe('Amz search', () => {

    it('should be able to search dining table', () => {
        const SEARCH_TEXT = "Dinning table";

        cy.visit("/")
        let amzHomePage = new AmazonHomePage();
        amzHomePage.searchTxtBxElem.type(SEARCH_TEXT);
        amzHomePage.searchBtnElem.click();

        let amzSearchResultPage = new AmazonSearchResultPage();
        amzSearchResultPage.serchItemElemList.should("not.have.length", 0)
        // amzSearchResultPage.serchItemElemList.should("have.length", 60)
    })
    
})