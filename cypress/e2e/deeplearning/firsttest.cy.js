/// <reference types = "Cypress" />

describe.only('Deep prcatise', () => {
    it('Practise environment', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)
        //Parent child 
        cy.get('.products').find('.product')
})

})