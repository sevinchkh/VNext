describe('Login Feature', () => {
    it('Log in as an admin', () => {
      cy.visit('https://stage.haulerhub.com/')
      cy.get('#UserName').type('odil.g@somedomain.com');
      cy.contains('Next').click()
      cy.get('#Password').type('HaulerHub0#')
      cy.get('.d-flex > .btn').click()
      cy.get('.components > :nth-child(5) > .nav-link').click()
      cy.get(':nth-child(2) > .details-control > .d-flex > .m-1').click()
      cy.scrollTo('bottom')
      cy.contains('Add Notes').click()
      cy.get('#addNoteModal > .modal-dialog > .modal-content > #divConfBody > .d-flex > .col-12 > .form-control').type('Hello, test')
      cy.get('#addNoteModal > .modal-dialog > .modal-content > .modal-footer > .btn-success').click()
    })

})
