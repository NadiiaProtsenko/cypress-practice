describe('Social links', () => {
  before(() => {
    cy.visit('https://qauto.forstudy.space/');
    cy.contains('Sign In').click(); 
    cy.get('input[name="login"]').type('guest'); 
    cy.get('input[name="password"]').type('welcome2qauto'); 
    cy.get('form#loginForm').submit(); 
  });

  it('Facebook icon should open the Facebook page', () => {
    cy.get('.fa-facebook').invoke('attr', 'href').should('contain', 'facebook.com');
  });

  it('Telegram icon should open the Telegram page', () => {
    cy.get('.fa-telegram').invoke('attr', 'href').should('contain', 't.me');
  });

  it('LinkedIn icon should open the LinkedIn page', () => {
    cy.get('.fa-linkedin').invoke('attr', 'href').should('contain', 'linkedin.com');
  });

  it('YouTube icon should open the YouTube page', () => {
    cy.get('.fa-youtube').invoke('attr', 'href').should('contain', 'youtube.com');
  });

  it('Instagram icon should open the Instagram page', () => {
    cy.get('.fa-instagram').invoke('attr', 'href').should('contain', 'instagram.com');
  });
});

describe('Sign In and Sign Up forms', () => {
  before(() => {
    cy.visit('https://qauto.forstudy.space/');
    cy.contains('Sign In').click(); 
    cy.get('input[name="login"]').type('guest'); 
    cy.get('input[name="password"]').type('welcome2qauto'); 
    cy.get('form#loginForm').submit(); 
  });

  it('Clicking on Sign In button should open the login form', () => {
    cy.contains('Sign In').click();
    cy.get('form#loginForm').should('be.visible');
  });

  it('Clicking on Sign Up button should open the registration form', () => {
    cy.contains('Sign Up').click();
    cy.get('form#registrationForm').should('be.visible');
  });
});
