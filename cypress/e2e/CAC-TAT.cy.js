describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('./src/index.html') // Visita a página antes de cada teste
  })

  it('Verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preenche campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Vinicius')
    cy.get('#lastName').type('Guimaraes')
    cy.get('#email').type('vinicius@gmail.com')
    cy.get('#open-text-area').type('texto teste formulário')
    cy.contains('Enviar').click()

    cy.get('.success').should('be.visible')
  })

  it('Valida mensagem de alerta ao não preencher campo de feedback', () => {
    cy.get('#firstName').type('Vinicius')
    cy.get('#lastName').type('Guimaraes')
    cy.get('#email').type('vinicius@gmail.com')
    cy.contains('Enviar').click()

    cy.get('.error').should('be.visible')
  })

  // it.only('Preenche os campos obrigatórios através de um command', () => {
  //   cy.fillMandatoryFieldsAndSubmit()

  //   cy.get('.success').should('be.visible')
  // })

  it('Preenche os campos obrigatórios através de um command com um objeto', () => {
    
    const data = {
      fristName: 'Vinicius',
      lastName: 'Guimaraes',
      email: 'vinicius@gmail.com', 
      text: 'Texto exemplo'
    }

    cy.fillMandatoryFieldsAndSubmit(data)

    cy.get('.success').should('be.visible')
  })
})
