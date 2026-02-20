const navbarPage = require('../fixtures/pages/NavbarPage');

describe('Phase 1 — Navigation', () => {

    beforeEach(() => {
        cy.visitHome();
    });

    it('TC-NAV-001: Navbar is visible on homepage', () => {
        cy.xpath(navbarPage.selectors.navbarRoot)
            .should('exist')
            .and('be.visible');
    });

    it('TC-NAV-002: Logo is visible and links to homepage', () => {
        cy.xpath(navbarPage.selectors.logo)
            .should('be.visible')
            .and('have.attr', 'href', '/');
    });

    it('TC-NAV-003: Logo contains the site name', () => {
        cy.xpath(navbarPage.selectors.logo)
            .should('be.visible')
            .invoke('text')
            .should('not.be.empty');
    });

    it('TC-NAV-004: "Offers" link is visible and navigates to /offers', () => {
        cy.xpath(navbarPage.selectors.offersLink)
            .should('be.visible')
            .and('contain.text', 'Offers');

        navbarPage.clickOffers();
        cy.url().should('include', '/offers');
    });

    it('TC-NAV-005: "Orders" link redirects to /signin (auth required)', () => {
        cy.xpath(navbarPage.selectors.ordersLink)
            .should('be.visible')
            .and('contain.text', 'Orders');

        navbarPage.clickOrders();
        cy.url().should('include', '/signin');
    });

    it('TC-NAV-006: "Favourites" link redirects to /signin (auth required)', () => {
        cy.xpath(navbarPage.selectors.favouritesLink)
            .should('be.visible');

        navbarPage.clickFavourites();
        cy.url().should('include', '/signin');
    });

    it('TC-NAV-007: "Sign In" link navigates to /signin', () => {
        cy.xpath(navbarPage.selectors.signInLink)
            .should('be.visible');

        navbarPage.clickSignIn();
        cy.url().should('include', '/signin');
    });

    it('TC-NAV-008: All navbar links are present simultaneously', () => {
        cy.xpath(navbarPage.selectors.offersLink).should('be.visible');
        cy.xpath(navbarPage.selectors.ordersLink).should('be.visible');
        cy.xpath(navbarPage.selectors.favouritesLink).should('be.visible');
        cy.xpath(navbarPage.selectors.signInLink).should('be.visible');
    });

    it('TC-NAV-009: Logo navigates back to homepage from another page', () => {
        navbarPage.clickOffers();
        cy.url().should('include', '/offers');

        navbarPage.clickLogo();
        cy.url().should('not.include', '/offers');
        cy.xpath(navbarPage.selectors.navbarRoot).should('be.visible');
    });

});
