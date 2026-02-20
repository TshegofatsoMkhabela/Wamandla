import LoginPO from '../../PageObjects/LoginPO';



describe('Login Page Positive Tests', () => {

  const loginPO = new LoginPO();

  beforeEach(() => {
    cy.visit('https://testathon.live/signin')
  })

  it('Scenario 1 - Test Login Page', () => {
    //Username Validation
    // loginPO.UsernameCheck()
    // loginPO.UsernameClick()
    // loginPO.UsernameSelect()
    // cy.wait(2)


    // // loginPO.PasswordCheck()
    // loginPO.PasswordClick()
    // loginPO.PasswordSelect()
    // cy.wait(2)

    cy.xpath("(//div[@class=' css-1hwfws3'])[1]").should('be.visible')
    // cy.xpath("(//div[@class=' css-1hwfws3'])[1]").click(20, 20);
    cy.xpath("//div[@id='username']").click(20, 20);
    cy.wait(3)
    cy.xpath("//div[@id='username']").click(20, 100);
    // cy.xpath("(//div[@class=' css-1uccc91-singleValue'])").click()
    cy.wait(2)
    cy.xpath("//div[@id='password']").click(20, 20);
    cy.wait(3)
    cy.xpath("//div[@id='password']").click(20, 100);

    cy.wait(1)
    cy.xpath("//button[text()='Log In']").click();

  })

})