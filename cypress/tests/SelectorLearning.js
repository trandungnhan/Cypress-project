describe("Element interaction", () => {

    it('should be able to complete to form', () =>{
        // Open the login form page
        cy.visit("/login")

        // Find username by ID then input the text
        cy.get("#username").type("tomsmith")

        // Find username by ID then input the text
        cy.get("[name='password']").type("SuperSecretPassword!")

        // Find username by ID then input the text
        cy.get("button[type='submit']").click()

        // DEBUG purpose only
        cy.wait(3000)

    });
});