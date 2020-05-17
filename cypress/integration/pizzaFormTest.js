describe("tests special instructions are inputtable", () => {
    beforeEach(() => {
        cy.visit('localhost:3001/pizza');
    })

    it('should have the value of the typed text', () => {
        cy.get('textArea[name="specialInstructions"]').type("This is test input").should("have.value", "This is test input");
    })

    it('should allow checking multiple toppings boxes', () => {
        cy.get('input[name="pepperoni"]').check();
        cy.get('input[name="sausage"]').check();

        cy.get('input[name="pepperoni"]').should("be.checked");
        cy.get('input[name="sausage"]').should("be.checked");
    })

    it('should allow form submission if all inputs are valid', () => {
        cy.get('input[name="name"]').type("GS");
        cy.get('button').click();
        cy.get('pre').should('not.contain', "GS");
    })
})
