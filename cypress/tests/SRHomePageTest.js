import { SRHomepage } from "../models/pages/SRHomePage";

describe('SR Homepage Test', function() {

    it('should be able to get hero card title', () => {
        cy.visit('https://www.simplyrecipes.com/')
        new SRHomepage().getHeroCompTitle().then(title => {
            cy.wrap('').then(() =>{
                expect (title).to.be.eq("Zucchini, Eggplant, Tomato Gratin")
            })
        })


    })

    xit('Should be able to print for all titles', () => {
        cy.visit('https://www.simplyrecipes.com/')
        cy.get('.card__title').each(($title, index) => {
            cy.log(index);
            cy.log($title.text().trim())
        })
    })

    xit('Should be able to interact with a component', () => {
        cy.visit('https://www.simplyrecipes.com/')
        const srHomepage = new SRHomepage();
        srHomepage.heroComponent().cardTitle.each(($title, index) => {
            cy.log(index);
            cy.log($title.text().trim())
         })
    })
});