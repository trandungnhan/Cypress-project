const SEARCH_RESULT_ITEM_SEL = '[cel_widget_id^="MAIN-SEARCH_RESULTS"]';

class AmazonSearchResultPage{

    get serchItemElemList(){
        return cy.get(SEARCH_RESULT_ITEM_SEL);
    }
}

module.exports = AmazonSearchResultPage