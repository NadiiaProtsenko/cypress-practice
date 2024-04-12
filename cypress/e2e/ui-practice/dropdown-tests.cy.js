describe('Dropdown List', () => {  
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
    });

    it('Test 1: Default selected option is "Please select an option"', () => {
        cy.get('select#dropdown').should('have.value', null);
        cy.get('select#dropdown option:selected').should('have.text', 'Please select an option'); 
    });

    it('Test 2: Selecting "Option 2" and verifying selection', () => {
        cy.get('select#dropdown').select('Option 2');
        cy.get('select#dropdown').should('have.value', '2');
    });
});