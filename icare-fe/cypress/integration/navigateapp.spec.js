/// <reference types="cypress" />

context('ClaimSubmit Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/claimManagement/claimSubmit')
    })

    it('should see a header title', () => {
        // The new page should contain an h1 with "About page"
        cy.get('h2').contains('Submit a Claim')
    })
})