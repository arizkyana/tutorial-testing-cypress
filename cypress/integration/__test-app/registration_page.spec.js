describe('Test Login Page', () => {
  beforeEach(() => {

  });
  it('successfuly load', () => {
    cy.visit('https://dinnar-craft.web.app/login');
    cy.get('section > form > div > div').should('contain', 'Login');
  });

  it('required fields', () => {
    cy.get('button').click();
    cy.get('div#error__email').should('contain', 'email is a required field');
    cy.get('div#error__password').should('contain', 'password is a required field');
  });

  it('email format', () => {
    cy.get('input[name=email]').type('user');
    cy.get('div#error__email').should('contain', 'email must be a valid email');
  });

  it('password min 8 character length', () => {
    cy.get('input[name=password]').type('test');
    cy.get('div#error__password').should('contain', 'password at least 8 character minimal');
  });

  it('submit login failed', () => {
    cy.get('input[name=email]').type('abc@def.com');
    cy.get('input[name=password]').type('qweasdzxc');
    cy.get('form').submit();
    cy.contains('Email and Password are incorrect');
  });

  it('submit login success', () => {
    cy.reload();
    cy.get('input[name=email]').type('admin@mail.com');
    cy.get('input[name=password]').type('12341234');
    cy.get('form').submit();
    cy.location('pathname').should('eq', '/dashboard');
    cy.contains('Hello');
  });
});