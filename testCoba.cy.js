const username = 'doriksetyawan';

describe('template spec', () => {
    it('passes', () => {
        // login proses
        cy.visit('http://localhost:4200/')
        cy.contains('Login').should('be.visible')
        cy.get(cy.get('[data-cy="input-name"]').type('doriksetyawan'))
        cy.wait(1000)

        cy.get(cy.get('[data-cy="input-password"]').type('coba'))
        cy.wait(1000)

        cy.get(cy.get('[data-cy="btn-login"]').click())
        
        cy.get('[data-cy="text-navbar-profile-name"]').should('contain', `Hi, ${username}`)



        cy.get('[data-cy="btn-checkout"]').each(($hargaItem) => {
        
        const harga = parseFloat($hargaItem.text().replace('Rp', '').replace(',', ''));
            
            if (harga < 100000) {
                cy.wrap($hargaItem).should('have.class', 'harga-terendah');
            }
        })

        // const price = '';
        









        // tambah proses
        // cy.wait(1000)
        // cy.scrollTo('bottom')
        // cy.get(cy.get(':nth-child(1) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click())
        // cy.wait(1000)

        
        // cy.get(':nth-child(3) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click()
        // cy.wait(1000)

        // cy.get(cy.get(':nth-child(1) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click())
        // cy.wait(1000)
        // cy.get(':nth-child(1) > [data-cy="text-cart-item-name"]').should('contain','Latte')
        // cy.get(':nth-child(2) > [data-cy="text-cart-item-name"]').should('contain', 'Espresso')
        // // cy.get('.card-body > .h-full').should('Latte','capucino')
        // cy.get('[data-cy="btn-checkout"]').click()
        // cy.scrollTo('top')
        //         //logout proses

        // cy.wait(1000)

        // cy.get('[data-cy="btn-logout"]').click()
        // cy.contains('Login').should('be.visible')
    })
})
        







        
