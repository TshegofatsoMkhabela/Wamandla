describe('Login Page Tests', () => {

  beforeEach(() => {
    cy.visit('https://testathon.live/signin')
  })

  it('Scenario 1 - Test Login Page', () => {
    cy.xpath("//div[@class=' css-1hwfws3']").should('be.visible')
    cy.xpath("(//div[@class=' css-1hwfws3'])[1]").type('Hello World')
    cy.wait(3)
    // cy.get('[data-cy=password]').should('be.visible')
    // cy.get('[data-cy=login-btn]').should('be.visible')
  })

  // it('should display login page correctly', () => {
  //   cy.get('[data-cy=email]').should('be.visible')
  //   cy.get('[data-cy=password]').should('be.visible')
  //   cy.get('[data-cy=login-btn]').should('be.visible')
  // })  

})
