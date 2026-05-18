describe('Form Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory')
  })

  it('Form Test 1: fills checkout form and shows order summary', () => {
    cy.get('.btn_primary').first().click()
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart')
    cy.get('#checkout').click()
    cy.url().should('include', '/checkout-step-one')
    cy.get('#first-name').type('Ali')
    cy.get('#last-name').type('Hassan')
    cy.get('#postal-code').type('54000')
    cy.get('#continue').click()
    cy.url().should('include', '/checkout-step-two')
    cy.get('.summary_info').should('be.visible')
    cy.get('.summary_total_label').should('be.visible')
  })

})