describe('Login Feature', () => {
  it('Log in as an admin', () => {
    cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
    cy.get('#UserName').type('odil.g@somedomain.com');
    cy.contains('Next').click()
    cy.get('#Password').type('HaulerHub0#')
    cy.get('.d-flex > .btn').click()
   
})   
it('Log in as a carrier', () => {
cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
cy.get('#UserName').type('bblahblah@somedomain.com');
cy.contains('Next').click()
cy.get('#Password').type('HaulerHub0#')
cy.get('.d-flex > .btn').click()

})
it('Log in as a shipper', () => {
cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
cy.get('#UserName').type('afroman@somedomain.com');
cy.contains('Next').click()
cy.get('#Password').type('HaulerHub0#')
cy.get('.d-flex > .btn').click()

})

it('Log in as a driver', () => {
cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
cy.get('#UserName').type('anydriver@somedomain.com');
cy.contains('Next').click()
cy.get('#Password').type('HaulerHub0#')
cy.get('.d-flex > .btn').click()

cy.log('It should display links for downloading mobile application')
})


})