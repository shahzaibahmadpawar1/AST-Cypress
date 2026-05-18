// Custom Command: cy.login(username, password)
Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.saucedemo.com')
  cy.get('#user-name').type(username)
  cy.get('#password').type(password)
  cy.get('#login-button').click()
  cy.url().should('include', '/inventory')
})

// Custom Command: cy.logout()
Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').click()
  cy.get('#logout_sidebar_link').should('be.visible').click()
  cy.url().should('include', 'saucedemo.com')
})

// Custom Command: cy.addToCart(index)
Cypress.Commands.add('addToCart', (index = 0) => {
  cy.get('.btn_primary').eq(index).click()
})