describe('Test Login Donation', () => {
  it('successfuly load', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Ayo Berdonasi!');
    cy.get('[data-rb-event-key="#"]').click();
  });

  it('do login failed', () => {
    cy.get('#email').type('agung@donation.com');
    cy.get('#password').type('123412341234');
    cy
      .get('form')
      .submit()
      .get('.Toastify__toast-body')
      .should('contain', 'Email and Password is incorrect');
    cy
      .get('form > div:nth-child(3) > button:nth-child(1)')
      .click();
  });

  it('do login success', () => {
    cy.wait(500);

  });
});