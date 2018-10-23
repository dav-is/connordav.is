describe('The Home Page', function () {
  it('can navigate to Origin', function () {
    cy.visit('/')
    cy.contains('Origin').click()
    cy.url().should('include', '/origin')

    cy.visit('/open-source')
    cy.contains('Origin').click()
    cy.url().should('include', '/origin')

    cy.visit('/art')
    cy.contains('Origin').click()
    cy.url().should('include', '/origin')
  })

  it('can navigate to Open Source', function () {
    cy.visit('/')
    cy.contains('Open Source').click()
    cy.url().should('include', '/open-source')

    cy.visit('/art')
    cy.contains('Open Source').click()
    cy.url().should('include', '/open-source')

    cy.visit('/origin')
    cy.contains('Open Source').click()
    cy.url().should('include', '/open-source')
  })

  it('can navigate to Art', function () {
    cy.visit('/')
    cy.contains('Art').click()
    cy.url().should('include', '/art')

    cy.visit('/open-source')
    cy.contains('Art').click()
    cy.url().should('include', '/art')

    cy.visit('/origin')
    cy.contains('Art').click()
    cy.url().should('include', '/art')
  })

  it('can navigate back to Projects', function () {
    cy.visit('/art')
    cy.contains('Projects').click()
    cy.url().should('include', '/projects')

    cy.visit('/open-source')
    cy.contains('Projects').click()
    cy.url().should('include', '/projects')

    cy.visit('/origin')
    cy.contains('Projects').click()
    cy.url().should('include', '/projects')
  })

  it('can click on each Project', function () {
    cy.visit('/')
    cy.get('#projects > .cards > div:nth-child(1) > div:not(.clone) h3').click()
    cy.url().should('include', '/projects/authenticity-platform')
  })

  it('can load each page', function () {
    cy.visit('/')
    cy.visit('/origin')
    cy.visit('/open-source')
    cy.visit('/art')
    cy.visit('/projects')
    cy.visit('/projects/authenticity-platform')
  })
})
