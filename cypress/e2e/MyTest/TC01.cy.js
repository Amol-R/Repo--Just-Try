///<reference types = "cypress"/>

describe('Test Suit', ()=>{

    it('First test',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Amol')
    })
})