describe('Registration process of shipper', () => {
    it('Verify Registrate button', () => {
      cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
      cy.get('#registerLink').click()
      cy.log('Successfully verified button and navigated user to registarion page')
})
it('Entering valid data', () => {
    cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
    cy.get('#registerLink').click()
    cy.log('Successfully verified button and navigated user to registarion page')
    cy.get('.mb-3 > :nth-child(2) > .form-control').type('ABCD Company')
    cy.get('#divAddressTemplate > :nth-child(1) > .form-control').eq(0).type('3747 Missouri')
    //cy.get('#divAddressTemplate > :nth-child(2) > .form-control').eq(1).type('Ste MS 34')
    cy.get('.form-row > .col-md-6 > .form-control').eq(0).type('Missouri')
    cy.get('.form-row > :nth-child(2) > .form-control').eq(0).select('MI').should('have.value', '22')
    cy.get('#divAddressTemplate > .form-row > :nth-child(3) > .form-control').eq(0).type('56767')
    cy.get('.btn.btn-primary').contains('Validate Address').should('be.visible').click()
})
/*it('Entering invalid data', () => {
    cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
    cy.get('#registerLink').click()
    cy.log('Successfully verified button and navigated user to registarion page')
    cy.get('.mb-3 > :nth-child(2) > .form-control').type('477474')
})
*/

})