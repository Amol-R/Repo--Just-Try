///<reference types = "cypress"/>

describe('Test Suit', ()=>{

    it('First test',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Amol')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Amol-12345')
        cy.get('.oxd-button').
    })
})