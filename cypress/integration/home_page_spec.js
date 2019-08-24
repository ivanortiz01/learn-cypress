describe('Home Page', function () {
  it('Multi Searcher Exists', function () {
    cy.visit('/') // change URL to match your dev URL

    cy.get('.multi-searcher')
      .find('ul')
      .should('have.class', 'nav-tabs')
  })

  it('Select Zone to Search', function () {
    cy.viewport(1920, 726)

    cy.visit('/')

    cy
      .get('.row:nth-child(7) > .col-xs-12 > .row > .col-xs-12 > .searcher__on-product-fixed-hidden > .zone-selector > .js-open-layout')
      .click()

    cy
      .get('.fixed-layer > .fixed-layer__scrollable--fluid > .scrollable-container > .twitter-typeahead > #hotel-searcher-_ctl1__ctl1__ctl1_pageBody_pageBody_searcher_ctlMultiSearcher__ctl1_ctlZoneSelector-input')
      .click()
      .type('miami')
    
    cy
      .get('.scrollable-container > .twitter-typeahead > .tt-menu > .tt-dataset > .tt-suggestion:nth-child(1)')
      .click()

    cy
      .get('.fixed-layer > .fixed-layer__scrollable--fluid > .scrollable-container > .twitter-typeahead > #hotel-searcher-_ctl1__ctl1__ctl1_pageBody_pageBody_searcher_ctlMultiSearcher__ctl1_ctlZoneSelector-input')
      .should(($element) => {
        expect($element).to.have.length(1)

        let newText = $element[0].value.replace(/ /g,'') 
        expect('Miami,Florida,EstadosUnidos').to.equal(newText)
      })

    cy.get('#hotel-searcher > .row > .col-xs-12 > .searcher-row > .col-sm-2 > .searcher-button').click()

  })
})