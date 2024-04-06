describe('Login page', () => {
    it('should display error message for invalid password', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('#username').type('existing_username');
      cy.get('#password').type('invalid_password');
      cy.contains('Login').click();
      cy.contains('Your password is invalid!').should('be.visible');
    });
  
    it('should display error message for invalid username', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('#username').type('invalid_username');
      cy.get('#password').type('any_password');
      cy.contains('Login').click();
      cy.contains('Your username is invalid!').should('be.visible');
    });
  });
  