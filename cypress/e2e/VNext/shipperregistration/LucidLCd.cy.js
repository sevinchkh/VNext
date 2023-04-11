/// <reference types = "Cypress" />

describe.only('The registrartion of shipper company', () => {
    it('Go through Registration Process', ()=>{
        cy.visit('https://green-dune-0c5c5c210.2.azurestaticapps.net/')
        cy.viewport('macbook-13')
        cy.get('[href="/Home/register"]').click()
        cy.get('.form-control').eq(0).type(':ucid Oil Service Inc')
        cy.get('.form-control').eq(1).type('3100 McKinnon Street')
        cy.get('.form-control').eq(3).type('Dallas')
        cy.get('.form-select').eq(0).select('TX',{force:true}).should('have.value', '41')
        cy.get('.form-control').eq(4).type('75201+{enter}')
        cy.contains('Validate Address').click()
        cy.contains('Accept').click()
        cy.get('.btn-close').dblclick()
        cy.wait(5000)
        cy.get(':nth-child(2) > input').check()
        cy.contains('Next').click()

        //Adding Contact 
             cy.contains('Add Contact').click()
              //cy.get('.form-control valid').type('Main')
              cy.get('input[type="text"]').eq(0).type('Admin')
              cy.get('input[type="text"]').eq(1).type('Test')
              cy.get('input[type="text"]').eq(2).type('4235494585')
              cy.get('input[type="email"]').type('lucidinc@haulerhub.com')
              cy.contains('Save').click()
              cy.wait(1000)
              cy.contains('Next').click()
              //Terms and Conditions 
              cy.get('input[type="checkbox"]').check()
              //Final step 
               cy.get('button[type="submit"]').click()
               //cy.get('button[type="button"]').dblclick().should('be.visible')
               cy.contains('OK').should('be.visible', 'be.clickible').click()
        })
    
    })
