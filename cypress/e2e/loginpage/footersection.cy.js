describe('Terms and Conditions', () => {
    it('Veryfying hyperbutton Terms and Conditions', () => {
      cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
      cy.visit('https://haulerhub.com/terms-conditions/')
      cy.log('It will navigate to Terms and Conditions')
    });
    it('Veryfying hyperbutton Privacy Policy', () => {
        cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/') 
        cy.get('div.d-flex > .padding-left-15').click()
      });

});
    