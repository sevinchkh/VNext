describe('Login Feature', () => {
    it('Navigating to chat feature', () => {
      cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
      cy.get('#supportPopover').click()
      cy.get('.popover-body > .flex-column > :nth-child(4) > :nth-child(2) > .btn').should('be.visible').click()
    })
    it('Navigating to FAQ', () => {
        cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
        cy.get('#supportPopover').click()
        cy.get('.popover-body > .flex-column > :nth-child(3) > :nth-child(2) > a').should('be.visible').click()
      })
      it('Send an email', () => {
        cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
        cy.get('#supportPopover').click()
        cy.get('.popover-body > .flex-column > :nth-child(2) > :nth-child(2) > a').should('be.visible').click()
        cy.log('It will fail since cypress can not acccess email application')
      })
      it('Call to agent', () => {
        cy.visit('https://haulerhub-dev-web-new.azurewebsites.net/')
        cy.get('#supportPopover').click()
        cy.get('.popover-body > .flex-column > :nth-child(1) > .padding-right-10 > .fas').should('be.visible').click()
      })
      
})