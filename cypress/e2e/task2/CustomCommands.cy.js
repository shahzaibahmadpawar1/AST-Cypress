describe('Custom Command: cy.login()', () => {

  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
  })

  it('lands on the Products page after login', () => {
    cy.url().should('include', '/inventory')
    cy.get('.title').should('have.text', 'Products')
  })

  it('shows product items on the inventory page', () => {
    cy.get('.inventory_item').should('have.length.greaterThan', 0)
  })

  it('shopping cart badge is not visible on fresh login', () => {
    cy.get('.shopping_cart_badge').should('not.exist')
  })

  it('takes a screenshot of the inventory page', () => {
    cy.get('.title').should('have.text', 'Products')
    cy.screenshot('inventory-page-logged-in')
  })

})