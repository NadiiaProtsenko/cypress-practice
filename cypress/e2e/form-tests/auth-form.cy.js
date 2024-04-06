
describe('Login Test', () => {
    it('Should display error message for invalid password', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      
      cy.get('#username').type('tomsmith');
      
      cy.get('#password').type('invalidpassword');
      
      cy.get('button[type="submit"]').click();
      
      cy.get('#flash').should('contain', 'Your password is invalid!');
    });
  });
  