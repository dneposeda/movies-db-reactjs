const BASE_DELAY = 1000;

context("Actions", () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl).wait(BASE_DELAY);
    });

    it('Search input', () => {
        cy.get('#formSearchFilms input')
            .type('best films best films best films best films', { delay: 100 })
            .should('have.value', 'best films best films best films best films')
            .get('#formSearchFilms button.btn.btn-lg.search__btn')
            .click()
    });
    it('Search by', () => {
        cy.get('.find-movie .btn.filter-sort__btn')
            .click({multiple: true})
            .should('have.class', 'active')
    });
    it('Filter by', () => {
        cy.get('.sort .btn.filter-sort__btn')
            .click({multiple: true})
            .prev()
            .should('not.have.class', 'active')
    });
});
