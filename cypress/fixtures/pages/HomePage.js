class HomePage {
    get selectors() {
        return {
            shelfContainer: "//div[contains(@class, 'shelf-container')]",
            shelfItem: "//div[contains(@class, 'shelf-item')]",
            productTitle: "//p[contains(@class, 'shelf-item__title')]",
            productPriceValue: "//div[contains(@class, 'shelf-item__price')]//div[@class='val']//b",
            productImage: "//div[contains(@class, 'shelf-item__thumb')]//img",
            addToCartBtn: "//div[contains(@class, 'shelf-item__buy-btn')]",
            favouriteBtn: "//div[contains(@class, 'shelf-stopper')]//button",
            installment: "//div[contains(@class, 'shelf-item__price')]//div[@class='installment']",
            productsFound: "//small[contains(@class, 'products-found')]//span",
            filtersContainer: "//div[contains(@class, 'filters')]",
            vendorCheckbox: "//div[contains(@class, 'filters-available-size')]",
            cart: "//div[contains(@class, 'float-cart')]",
            cartBadge: "//span[contains(@class, 'bag__quantity')]",
        };
    }

    getProducts() { return cy.xpath(this.selectors.shelfItem); }
    getProductCountText() { return cy.xpath(this.selectors.productsFound); }
    getProductTitles() { return cy.xpath(this.selectors.productTitle); }
    getProductImages() { return cy.xpath(this.selectors.productImage); }
    getAddToCartButtons() { return cy.xpath(this.selectors.addToCartBtn); }
    getFavouriteButtons() { return cy.xpath(this.selectors.favouriteBtn); }
    getInstallmentInfo() { return cy.xpath(this.selectors.installment); }
    getVendorFilters() { return cy.xpath(this.selectors.vendorCheckbox); }

    clickVendorFilter(vendor) {
        cy.xpath(`//div[contains(@class, 'filters-available-size')]//input[@type='checkbox'][@value='${vendor}']`)
            .check({ force: true });
    }

    uncheckVendorFilter(vendor) {
        cy.xpath(`//div[contains(@class, 'filters-available-size')]//input[@type='checkbox'][@value='${vendor}']`)
            .uncheck({ force: true });
    }
}

module.exports = new HomePage();
