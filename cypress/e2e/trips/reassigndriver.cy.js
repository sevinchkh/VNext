describe('Login Feature', () => {
    it('Log in as an admin', () => {
      cy.visit('https://stage.haulerhub.com/')
      cy.get('#UserName').type('odil.g@somedomain.com');
      cy.contains('Next').click()
      cy.get('#Password').type('HaulerHub0#')
      cy.get('.d-flex > .btn').click()
      cy.get('.components > :nth-child(5) > .nav-link').click()
      cy.get(':nth-child(2) > .details-control > .d-flex > .toggleCtrl').click()
      cy.get(':nth-child(1) > .btn').click()
      cy.get('.col-7 > .form-control').select('Any Driver').should('have.value', '98')
      cy.contains('Save').click()
      cy.get('#btnConfirm').click()
    })



it('Cancelling reassign ', () => {
    cy.visit('https://stage.haulerhub.com/')
    cy.get('#UserName').type('odil.g@somedomain.com');
    cy.contains('Next').click()
    cy.get('#Password').type('HaulerHub0#')
    cy.get('.d-flex > .btn').click()
    cy.get('.components > :nth-child(5) > .nav-link').click()
    cy.get(':nth-child(6) > .details-control > .d-flex > .m-1 > .far').click()
    cy.get(':nth-child(1) > .btn').click()
    cy.get('.col-7 > .form-control').select('Any Driver').should('have.value', '98')
    cy.contains('Save').click()
    cy.get('#btnConfirm').click()
})

})