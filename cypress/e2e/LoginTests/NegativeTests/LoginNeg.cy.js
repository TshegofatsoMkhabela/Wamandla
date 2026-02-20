const LoginPO = require('../../PageObjects/LoginPO');

describe('Login Page Negative Tests', () => {

  const loginPO = new LoginPO();

  beforeEach(() => {
    cy.visit('https://testathon.live/signin');
  });

  it('Scenario 2 - Negative Test Login Page', () => {
    // TODO: Implement negative login test
  });

});
