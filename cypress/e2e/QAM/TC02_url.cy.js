// describe('Create and mark-unmark as favourite',function(){
//     it('Sign in',function(){
    
//         cy.visit('https://react-redux.realworld.io/#/login')
//         cy.title().should('eq','Conduit')
//         cy.location('protocol').should('eq','https:')
//         cy.get('input[type = "email"]').type('test123@gmail.com')
//         cy.get('input[type = "password"]').type('test12345')
//         cy.get('.btn').contains('Sign in').should('be.visible').click()
//         cy.contains('Your Feed',{timeout:10000}).should('be.visible')

//     }) 

//     it('Create a post',function(){
//         //cy.contains('New Post').click()
//         cy.get('ul.navbar-nav').children().contains('New Post').click()
//         cy.hash().should('include','#/editor')
//     })
// })