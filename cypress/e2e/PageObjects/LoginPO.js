class LoginPO {

    // Selectors
    username = "//div[@id='username']"
    password = "//div[@id='password']"
    loginButton = "//button[text()='Log In']"
    

    // Test Actions
    // visit() {
    //     cy.visit('https://testathon.live/signin')
    // }

    // UsernameCheck(username) {
    //     cy.get(username).should('be.visible')
    // }

    UsernameClick(username) {
        cy.get(username).click(20, 20);
    }

    UsernameSelect(username) {
        cy.get(username).clear().click(20, 100);
    }    

    // PasswordCheck(password) {
    //     cy.get(password).should('be.visible')
    // }

    PasswordClick(password) {
        cy.get(password).clear().click(20, 20);
    }

    PasswordSelect(password) {
        cy.get(password).clear().click(20, 100);
    }

    clickLogin() {
        cy.get(loginButton).click()
    }

    login(username, password) {
        this.Username(username)
        this.Password(password)
        this.clickLogin()
    }

    // // Assertions
    // verifyLoginSuccess() {
    //     cy.get().should('be.visible')
    // }

}

export default LoginPO;