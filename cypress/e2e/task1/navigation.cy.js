describe('Navigation Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory')
  })

  it('Navigation Test 1: opens the correct page from the burger menu', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#inventory_sidebar_link').should('be.visible')
    cy.get('#inventory_sidebar_link').click()
    cy.url().should('include', '/inventory')
    cy.get('.title').should('have.text', 'Products')
  })

  it('Navigation Test 2: navigates through two pages and checks headings', () => {
    cy.get('.title').should('have.text', 'Products')
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart')
    cy.get('.title').should('have.text', 'Your Cart')
  })

})