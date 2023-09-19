describe("Login", function(){

    it('Sign in',function(){
    
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type = "email"]').type('test123@gmail.com')
        cy.get('input[type = "password"]').type('test12345')
        cy.get('.btn').contains('Sign in').should('be.visible').click()

    })

})