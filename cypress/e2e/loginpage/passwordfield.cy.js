describe('Login Feature', () => {
    it('Entering Valid Password', () => {
      cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
      cy.get('#UserName').type('odil.g@somedomain.com');
      cy.contains('Next').click()
      cy.get('#Password').type('HaulerHub0#')
        cy.get('.d-flex > .btn').click()
      cy.log('it will login into web application')

    });
    it('Entering Invalid Password', () => {
        cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
        cy.get('#UserName').type('odil.g@somedomain.com');
        cy.get('.form-group > .d-flex > .btn').click()
        cy.get('#Password').type('2342423435')
        cy.get('.d-flex > .btn').click()
        cy.log('it will show the error')
        });
    });