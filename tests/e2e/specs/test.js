// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Hi, I\'m Steven Dao.')
  })
})
