//Cypress js automated test

describe('My First OK Test', function () {
    it('Does not do much!', function () {
        expect(true).to.equal(true)
    })
});

describe('My First KO Test', function () {
    it('Does not do much!', function () {
        expect(true).to.equal(false)
    })
});

describe('My First Test Visit a Page', function () {
    it('Visits the Kitchen Sink', function () {
        cy.visit('https://example.cypress.io');
        
        cy.contains('type').click();

        cy.url().should('include', '/commands/actions');

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})