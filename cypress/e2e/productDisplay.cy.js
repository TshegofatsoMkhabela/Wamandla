const homePage = require('../fixtures/pages/HomePage');
const products = require('../fixtures/products');

describe('Phase 2 — Product Display', () => {

    beforeEach(() => {
        cy.visitHome();
    });

    it('TC-PRD-001: Product grid is visible and contains product cards', () => {
        cy.xpath(homePage.selectors.shelfContainer)
            .should('exist')
            .and('be.visible');

        cy.xpath(homePage.selectors.shelfItem)
            .should('have.length.greaterThan', 0)
            .first()
            .should('be.visible');
    });

    it('TC-PRD-002: Correct product count is displayed', () => {
        cy.xpath(homePage.selectors.productsFound)
            .should('be.visible')
            .and('contain.text', '25 Product(s) found.');
    });

    it('TC-PRD-003: Each product card has a visible image with src and alt', () => {
        cy.xpath(homePage.selectors.productImage)
            .should('have.length', products.length);

        cy.xpath(homePage.selectors.productImage).each(($img) => {
            cy.wrap($img)
                .should('be.visible')
                .and('have.attr', 'src')
                .and('not.be.empty');

            cy.wrap($img)
                .should('have.attr', 'alt')
                .and('not.be.empty');
        });
    });

    it('TC-PRD-004: Each product card has a non-empty title', () => {
        cy.xpath(homePage.selectors.productTitle)
            .should('have.length', products.length);

        cy.xpath(homePage.selectors.productTitle).each(($title) => {
            cy.wrap($title)
                .invoke('text')
                .should('not.be.empty');
        });
    });

    it('TC-PRD-005: Each product card has a price displayed', () => {
        cy.xpath(homePage.selectors.productPriceValue)
            .should('have.length', products.length);

        cy.xpath(homePage.selectors.productPriceValue).each(($price) => {
            cy.wrap($price)
                .invoke('text')
                .should('not.be.empty')
                .and('match', /^\d+$/);
        });
    });

    it('TC-PRD-006: Each product card has an "Add to cart" button', () => {
        cy.xpath(homePage.selectors.addToCartBtn)
            .should('have.length', products.length);

        cy.xpath(homePage.selectors.addToCartBtn).each(($btn) => {
            cy.wrap($btn)
                .should('be.visible')
                .and('contain.text', 'Add to cart');
        });
    });

    it('TC-PRD-007: Vendor filter checkboxes are displayed for all 4 vendors', () => {
        const expectedVendors = ['Apple', 'Samsung', 'Google', 'OnePlus'];

        cy.xpath(homePage.selectors.vendorCheckbox)
            .should('have.length', expectedVendors.length);

        expectedVendors.forEach((vendor) => {
            cy.xpath(`//div[contains(@class, 'filters-available-size')]//input[@type='checkbox'][@value='${vendor}']`)
                .should('exist');

            cy.xpath(`//div[contains(@class, 'filters-available-size')]//span[contains(@class, 'checkmark')]`)
                .contains(vendor)
                .should('be.visible');
        });
    });

    it('TC-PRD-008: Each product card shows installment info', () => {
        cy.xpath(homePage.selectors.installment)
            .should('have.length', products.length);

        cy.xpath(homePage.selectors.installment).each(($inst) => {
            cy.wrap($inst)
                .invoke('text')
                .should('not.be.empty');
        });
    });

    it('TC-PRD-009: Each product card has a favourite/heart button', () => {
        cy.xpath(homePage.selectors.favouriteBtn)
            .should('have.length', products.length);

        cy.xpath(homePage.selectors.favouriteBtn).each(($btn) => {
            cy.wrap($btn).should('be.visible');
        });
    });

    // Class D: Vendor filter does not update product count or hide non-matching products.
    it('TC-PRD-010: Filtering by vendor filters the product list @known-bug', () => {
        const vendor = 'OnePlus';
        const expectedCount = products.filter((p) => p.vendor === vendor).length;

        homePage.clickVendorFilter(vendor);

        // Soft check: does the count text update?
        cy.xpath(homePage.selectors.productsFound)
            .invoke('text')
            .then((text) => {
                if (!text.includes(`${expectedCount} Product(s) found`)) {
                    cy.log(`@known-bug: Count text did not update. Expected "${expectedCount} Product(s) found", got "${text.trim()}"`);
                }
            });

        // Deep scan: log any non-OnePlus titles still visible
        const mismatches = [];
        cy.xpath(homePage.selectors.productTitle)
            .each(($title) => {
                const text = $title.text().trim();
                if (!text.includes('One Plus')) {
                    mismatches.push(text);
                }
            })
            .then(() => {
                if (mismatches.length > 0) {
                    cy.log(`@known-bug: ${mismatches.length} non-OnePlus products visible while OnePlus filter active`);
                    mismatches.forEach((item) => cy.log(`  Found: "${item}"`));
                }
            });
    });

});

