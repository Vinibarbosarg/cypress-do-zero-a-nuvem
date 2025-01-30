Cypress.Commands.add('fillMandatoryFieldsAndSubmit', data => {
    cy.get('#firstName').type(data.fristName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.contains('Enviar').click()  // Clica no botão com o texto "Enviar"

})