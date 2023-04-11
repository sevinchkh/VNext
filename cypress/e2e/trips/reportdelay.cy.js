describe('Login Feature', () => {
    it('Log in as an admin', () => {
      cy.visit('https://stage.haulerhub.com/')
      cy.get('#UserName').type('odil.g@somedomain.com');
      cy.contains('Next').click()
      cy.get('#Password').type('HaulerHub0#')
      cy.get('.d-flex > .btn').click()
      cy.get('.components > :nth-child(5) > .nav-link').click({force: true})
      cy.get(':nth-child(3) > .details-control > .d-flex > .toggleCtrl').click()
      cy.get(':nth-child(4) > .btn').click()
      cy.get(':nth-child(3) > .col-12 > .form-control').select('Capacity').should('have.value', '1')
      cy.get(':nth-child(4) > .col-12 > .form-control').type('Test')
      cy.get('.modal-footer > .btn-danger').click()
    })
})