describe('The Home Page', function () {
  it('can navigate to Origin', function () {
    cy.visit('/')
    cy.contains('Origin').click()
    cy.url().should('eq', 'http://localhost:3000/origin')

    cy.visit('/open-source')
    cy.contains('Origin').click()
    cy.url().should('eq', 'http://localhost:3000/origin')

    cy.visit('/art')
    cy.contains('Origin').click()
    cy.url().should('eq', 'http://localhost:3000/origin')
  })

  it('can navigate to Open Source', function () {
    cy.visit('/')
    cy.contains('Open Source').click()
    cy.url().should('eq', 'http://localhost:3000/open-source')

    cy.visit('/art')
    cy.contains('Open Source').click()
    cy.url().should('eq', 'http://localhost:3000/open-source')

    cy.visit('/origin')
    cy.contains('Open Source').click()
    cy.url().should('eq', 'http://localhost:3000/open-source')
  })

  it('can navigate to Art', function () {
    cy.visit('/')
    cy.contains('Art').click()
    cy.url().should('eq', 'http://localhost:3000/art')

    cy.visit('/open-source')
    cy.contains('Art').click()
    cy.url().should('eq', 'http://localhost:3000/art')

    cy.visit('/origin')
    cy.contains('Art').click()
    cy.url().should('eq', 'http://localhost:3000/art')
  })

  it('can navigate back to Projects', function () {
    cy.visit('/art')
    cy.contains('Projects').click()
    cy.url().should('eq', 'http://localhost:3000/')

    cy.visit('/open-source')
    cy.contains('Projects').click()
    cy.url().should('eq', 'http://localhost:3000/')

    cy.visit('/origin')
    cy.contains('Projects').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('can click on each Project', function () {
    cy.visit('/')
    cy.get('#projects > .cards > div:nth-child(1) > a:not(.clone) h3').click()
    cy.url().should('eq', 'http://localhost:3000/projects/hosting-platform')
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
