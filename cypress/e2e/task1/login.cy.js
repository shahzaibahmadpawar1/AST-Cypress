describe('Login Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Login Test 1: logs in successfully with valid credentials', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory')
    cy.get('.title').should('have.text', 'Products')
  })

  it('Login Test 2: shows error message for incorrect password', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrongpassword123')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })

  it('Login Test 3: shows validation message when fields are empty', () => {
    cy.get('#login-button').click()
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username is required')
  })

})