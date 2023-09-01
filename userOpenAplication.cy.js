it ('visit application',()=>{
    //masuk ke aplikasi yang di gunakan
    cy.visit('http://localhost:4200/')
    // user see login page
    cy.contains('Login').should('exist')
    cy.contains('Login').click()
})