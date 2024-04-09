describe('Social links', () => {
  beforeEach(() => {
    // Відкриваємо сторінку
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
  });

  it('Facebook icon should open the Facebook page', () => {
    cy.get('.icon-facebook').parent('a').invoke('attr', 'href').should('contain', 'facebook.com');
  });

  it('Telegram icon should open the Telegram page', () => {
    cy.get('.icon-telegram').parent('a').invoke('attr', 'href').should('contain', 't.me');
  });

  it('LinkedIn icon should open the LinkedIn page', () => {
    cy.get('.icon-linkedin').parent('a').invoke('attr', 'href').should('contain', 'linkedin.com');
  });

  it('YouTube icon should open the YouTube page', () => {
    cy.get('.icon-youtube').parent('a').invoke('attr', 'href').should('contain', 'youtube.com');
  });

  it('Instagram icon should open the Instagram page', () => {
    cy.get('.icon-instagram').parent('a').invoke('attr', 'href').should('contain', 'instagram.com');
  });
});
