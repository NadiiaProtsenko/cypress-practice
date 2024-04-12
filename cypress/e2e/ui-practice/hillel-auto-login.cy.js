describe('Login Tests', () => {
    let userData;
  
    beforeEach(() => {
      cy.visit('https://qauto.forstudy.space/', {
        auth: {
          username: 'guest',
          password: 'welcome2qauto',
        },
      });
  
      cy.fixture('user.json').then((user) => {
        userData = user;
      });
    });
  
    it('Test 1: Login with valid credentials', () => {
      cy.contains('Sign In').click();
      cy.get('[name="email"]').type(userData.email);
      cy.get('[name="password"]').type(userData.password);
      cy.contains('Login').click();
      cy.url().should('include', '/garage');
    });
  });
  