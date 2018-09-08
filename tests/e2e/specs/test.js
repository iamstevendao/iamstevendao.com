describe('Home', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Hi, I\'m Steven Dao.')
  })
})
