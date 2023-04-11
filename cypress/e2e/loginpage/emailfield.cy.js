describe('Login Feature', () => {
    it('Entering Valid Address', () => {
      cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
      cy.get('#UserName').type('odil.g@somedomain.com');
      cy.contains('Next').click()
      cy.log('it redirects to Password step')

    });
    it('Entering Invalid Address', () => {
        cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
        cy.get('#UserName').type('odil');
        cy.get('.form-group > .d-flex > .btn').click()
        cy.log('it will show the error')
        });
    });