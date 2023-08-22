import DemoBlazePage from "../models/pages/DemoBlazePage";
import products from "./products.json"

describe('SR Homepage Test', function() {

    it('should be able to get product data', () => {
        cy.visit('https://demoblaze.com/')
        new DemoBlazePage().getAllCardData().then(allCardData => {
            cy.wrap('').then(() =>{
                expect(allCardData).to.be.deep.eq(products);
            })
        })

    })
});