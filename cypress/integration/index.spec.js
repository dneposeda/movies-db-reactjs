const BASE_DELAY = 1000;

context("Actions", () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl).wait(BASE_DELAY);
    });

    it('Search input', () => {
        cy.get('[data-search="searchFilms"]')
            .type('best films best films best films best films', { delay: 50 })
            .should('have.value', 'best films best films best films best films')
            .get('[data-search="searchFilmsSubmit"]')
            .click()
    });
    it('Search by', () => {
        cy.get('[data-find="findMovie"] .btn.filter-sort__btn')
            .click({multiple: true})
            .should('have.class', 'active')
    });
    it('Filter by', () => {
        cy.get('[data-sort="sortMovie"] .btn.filter-sort__btn')
            .click({multiple: true})
            .prev()
            .should('not.have.class', 'active')
    });
});
