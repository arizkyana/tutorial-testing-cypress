describe('Test Login', () => {
  it('test halaman sudah muncul di browser', () => {
    cy.visit('https://dinnar-craft.web.app/login'); // 1 command
    cy.get('section > form > div > div').should('contain', 'Login'); // 1 command
  });

  it('required fields', () => {
    cy.get('button').click();
    cy.get('div#error__email').should('contain', 'email is a required field');
    cy.get('div#error__password').should('contain', 'password is a required field');
  });

  it('email format', () => {
    cy.get('#email').type('bebas');
    cy.get('div#error__email').should('contain', 'email must be a valid email');
  });

  it('password min 8 character length', () => {
    cy.get('#password').type('bebas');
    cy.get('div#error__password').should('contain', 'password at least 8 character minimal');
  });

  it('submit login failed', () => {
    cy.get('#email').type('abc@def.com');
    cy.get('#password').type('qweasdzxc');
    cy.get('form').submit();
    cy.contains('Email and Password are incorrect');
  });

  it('submit login success', () => {
    cy.reload();
    cy.get('#email').type('admin@mail.com');
    cy.get('#password').type('12341234');
    cy.get('form').submit();

    cy.location('pathname').should('eq', '/dashboard');
    cy.contains('Hello');
  });
});