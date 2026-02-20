# Wamandla — Cypress E2E Tests

Automated end-to-end tests for [testathon.live](https://testathon.live/) (StackDemo).

## Setup

```bash
npm install
```

## Run Tests

```bash
# All specs
npx cypress run --browser chrome

# Navigation only
npx cypress run --spec "cypress/e2e/navigation.cy.js" --browser chrome

# Product display only
npx cypress run --spec "cypress/e2e/productDisplay.cy.js" --browser chrome

# Interactive mode
npx cypress open
```

## Test Suites

| Suite | Spec | Tests |
|---|---|---|
| Phase 1 — Navigation | `navigation.cy.js` | TC-NAV-001 → 009 |
| Phase 2 — Product Display | `productDisplay.cy.js` | TC-PRD-001 → 010 |

## BrowserStack

Set environment variables and run:

```bash
$env:BROWSERSTACK_USERNAME = "your_username"
$env:BROWSERSTACK_ACCESS_KEY = "your_access_key"
browserstack-cypress run
```

## Found Bugs

### TC-PRD-010 — Vendor filter is non-functional (Class D)

**Steps to reproduce:**
1. Navigate to https://testathon.live/
2. Click any vendor filter checkbox (e.g. "OnePlus")

**Expected:** Product count updates to "6 Product(s) found." and only OnePlus products are displayed.

**Actual:** Product count remains "25 Product(s) found." and all 25 products from all vendors remain visible.

**Impact:** Vendor filtering feature is completely non-functional. Neither the count text nor the product visibility updates when a filter is selected.

**Test status:** TC-PRD-010 — it passes with soft assertions and logs mismatched products to the Cypress command log without blocking the pipeline.
