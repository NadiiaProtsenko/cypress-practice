describe('Checkboxes', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
    });

    it('Test 1: Verify default state of checkbox 2 and uncheck it', () => {
        cy.get('#checkboxes input[type="checkbox"]:nth-of-type(2)').should('be.checked');
        cy.get('#checkboxes input[type="checkbox"]:nth-of-type(2)').uncheck();
        cy.get('#checkboxes input[type="checkbox"]:nth-of-type(2)').should('not.be.checked');
    });

    it('Test 2: Check checkbox 1 and verify both checkboxes are checked', () => {
        cy.get('#checkboxes input[type="checkbox"]:nth-of-type(1)').check();
        cy.get('#checkboxes input[type="checkbox"]').should('be.checked');
    });
});
