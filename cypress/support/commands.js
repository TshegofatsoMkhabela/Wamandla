Cypress.Commands.add('visitHome', () => {
    cy.visit('/');
    cy.xpath("//div[contains(@class, 'shelf-container')]", { timeout: 15000 })
        .should('be.visible');
});