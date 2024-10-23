///<reference types = "cypress"/>

describe('Test Suit', ()=>{
    it('First test',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Amol')
        cy.get('[name="password"]').type('Amol-12345')
        cy.get('.oxd-button').click()
       
    })
})
