describe('Login Feature', () => {
    it('Log in as an admin', () => {
      cy.visit('https://stage.haulerhub.com/')
      cy.get('#UserName').type('odil.g@somedomain.com');
      cy.contains('Next').click()
      cy.get('#Password').type('HaulerHub0#')
      cy.get('.d-flex > .btn').click()
    })

    it('Adding charges Carrier', () => {
        cy.visit('https://stage.haulerhub.com/')
        cy.get('#UserName').type('odil.g@somedomain.com');
        cy.contains('Next').click()
        cy.get('#Password').type('HaulerHub0#')
        cy.get('.d-flex > .btn').click()
        cy.get('.components > :nth-child(5) > .nav-link').click()
        cy.get(':nth-child(2) > .details-control > .d-flex > .m-1').click()
        cy.scrollTo('bottom')
        cy.get(':nth-child(10) > .px-2 > .hh-form-title > .d-flex > .btn').click()
        cy.wait(10000)
        cy.get(':nth-child(2) > .col-4 > .form-control').type('400')
        cy.get('.col-5 > .form-control').select('Bond Charges').should('have.value', '2')
        cy.get('.padding-bottom-5 > .col-12 > .form-control').type('Additional Charge')
        cy.get('#chargeFile').eq(0).attachFile('test.jpg')
        cy.get(':nth-child(6) > .col-12 > .text-success > .fas').click()
        cy.get('#adminChargeModal > .modal-dialog > .modal-content > .modal-footer > .btn-success').click()
        cy.reload()
      })
    })