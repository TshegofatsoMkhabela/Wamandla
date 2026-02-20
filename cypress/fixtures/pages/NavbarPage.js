class NavbarPage {
    get selectors() {
        return {
            navbarRoot: "//div[contains(@class, 'Navbar_root')]",
            logo: "//a[contains(@class, 'Navbar_logo')]",
            offersLink: "//*[@id='offers']",
            ordersLink: "//*[@id='orders']",
            favouritesLink: "//*[@id='favourites']",
            signInLink: "//a[contains(text(), 'Sign In')]",
        };
    }

    getNavbar() { return cy.xpath(this.selectors.navbarRoot); }
    getLogo() { return cy.xpath(this.selectors.logo); }
    clickOffers() { cy.xpath(this.selectors.offersLink).click(); }
    clickOrders() { cy.xpath(this.selectors.ordersLink).click(); }
    clickFavourites() { cy.xpath(this.selectors.favouritesLink).click(); }
    clickSignIn() { cy.xpath(this.selectors.signInLink).click(); }
    clickLogo() { cy.xpath(this.selectors.logo).click(); }
}

module.exports = new NavbarPage();
