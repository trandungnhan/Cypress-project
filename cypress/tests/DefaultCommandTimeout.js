describe('Exploring default command time out',() => {
    it('should be able to apply custom default timeout', ()=> {
        cy.visit("https://the-internet.herokuapp.com")
        cy.get("a[href='/login']").click()
        // cy.location('pathname', {timeout: 100}).should("eq", "/login")
        cy.location('pathname', {timeout: 5000}).should("eq", "/abc")
    });
})