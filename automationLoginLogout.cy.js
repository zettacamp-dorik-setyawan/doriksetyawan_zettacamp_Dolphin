const username = 'doriksetyawan';

describe('template spec', () => {
    it('passes', () => {
        // login proses
        cy.visit('http://localhost:4200/')

        cy.contains('Login').should('be.visible')

        cy.get(cy.get('[data-cy="input-name"]').type(`${username}`))
        cy.wait(1000)

        cy.get(cy.get('[data-cy="input-password"]').type('coba'))
        cy.wait(1000)

        cy.get(cy.get('[data-cy="btn-login"]').click())
        
        cy.get('[data-cy="text-navbar-profile-name"]').should('contain', `Hi, ${username}`)

        // tambah proses
        cy.get('[data-cy="text-navbar-header"]').should('contain','Order Coffe')
        cy.wait(1000)
        cy.scrollTo('bottom')
        cy.get(cy.get(':nth-child(1) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click())
        cy.wait(1000)

        
        cy.get(':nth-child(3) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click()
        cy.wait(1000)

        cy.get(cy.get(':nth-child(1) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click())
        cy.wait(1000)
        
        //
        cy.get(':nth-child(1) > [data-cy="text-cart-item-name"]').should('contain','Latte')
        cy.get(':nth-child(2) > [data-cy="text-cart-item-name"]').should('contain', 'Espresso')
        
        cy.get('[data-cy="btn-checkout"]').click()
        cy.get('[data-cy="alert-message"]').should('contain', 'Item')
        cy.scrollTo('top')
        //logout proses

        cy.wait(1000)

        cy.get('[data-cy="btn-logout"]').click()
        cy.contains('Login').should('be.visible')
    })
})
        






        
