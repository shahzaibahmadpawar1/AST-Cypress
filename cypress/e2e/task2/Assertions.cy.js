describe('Assertion & Alias Practice', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Assertion 1: login button is visible on the page', () => {
    cy.get('#login-button').should('be.visible')
  })

  it('Assertion 2: logo has the correct text', () => {
    cy.get('.login_logo').should('have.text', 'Swag Labs')
  })

  it('Assertion 3: login button has correct type attribute', () => {
    cy.get('#login-button').should('have.attr', 'type', 'submit')
  })

  it('Negative Assertion: error message does not exist on fresh page load', () => {
    cy.get('[data-test="error"]').should('not.exist')
  })

  it('Alias Practice: types into username field using an alias', () => {
    cy.get('#user-name').as('userField')
    cy.get('@userField').type('standard_user')
    cy.get('@userField').should('have.value', 'standard_user')
  })

})