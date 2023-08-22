describe("Multiple elems matching iteraction", function(){
    it ('should be able to interact with list of elements', function(){
        cy.visit("/login")
        
        // use eq
        cy.get("input").eq(0).type("tomsmith")
        cy.get("input").eq(1).type("SuperSecretPassword!")

        // Use closure
        cy.get("input").then(items => {
            cy.get(items[0]).clear()
            cy.get(items[0]).type("tomsmith")

            cy.get(items[1]).clear()
            cy.get(items[1]).type("SuperSecretPassword!")
        })
        cy.get("button[type='submit']").click()

        // // Use .each
        cy.get("[class='button secondary radius']").click()
        cy.get("input").each((item, index) => {
            cy.get(item).type("something")
        })

        cy.get("button[type='submit']").click()

        // DEBUG purpose only
        cy.wait(3000)


    });
});