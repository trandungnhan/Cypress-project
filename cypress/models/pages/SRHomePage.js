import { HeroComponent } from "../components/sr/HeroComponent";

export class SRHomepage {

    heroComponent(){
        return new HeroComponent(cy.get(HeroComponent.COMP_SEL));
    }

    
    getHeroCompTitle(){
        let title ='';
        cy.get('.showcase__hero .card__title').then($title => {
            title = $title.text().trim();
        })
        return new Cypress.Promise(resolve => cy.wrap('').then(()=> resolve(title)))
    }
}