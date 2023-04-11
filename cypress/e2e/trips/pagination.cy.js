describe('Login Feature', () => {
    it('Log in as an admin', () => {
      cy.visit('https://stage.haulerhub.com/')
      cy.get('#UserName').type('odil.g@somedomain.com');
      cy.contains('Next').click()
      cy.get('#Password').type('HaulerHub0#')
      cy.get('.d-flex > .btn').click()
      cy.get('.components > :nth-child(5) > .nav-link').click()
      cy.scrollTo('bottom')
      cy.get('#tblTripListGrid_next').click()
      cy.get('#tblTripListGrid_next').click()
      cy.get('#tblTripListGrid_first').click()

    })
})