
it ('visit application',()=>{
    //masuk ke aplikasi yang di gunakan
    cy.visit('http://localhost:4200/')
    cy.contains('Login').should('be.visible')
    // user see login page
    cy.contains('Login').should('exist')
    cy.contains('Login').click()

    // user mengisi nama
    cy.get('[data-cy="input-name"]').type('Doriksetyawan')

    // user mengisi password
    cy.get('[data-cy="input-password"]') .type('password') 

    // user login 
    cy.wait(1000)
    cy.get('[data-cy="btn-login"]').click()
})