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

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('select').select('YouTube')

    cy.get('#product').should('have.value','youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('select').select('mentoria')

    cy.get('#product').should('have.value','mentoria')
  })

  it('seleciona um produto (Blog) por seu valor (value)', () => {
    cy.get('select').select(1)

    cy.get('#product').should('have.value','blog')
  })

  it.only('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"]').check('feedback')
      .should('have.value','feedback')
  })

  it.only('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
      .each(typeOfService => { //Each() seleciona cada um dos elementos do array 
        cy.wrap(typeOfService) // wrap() empacota os elementos e interage com cada um deles
          .check()
          .should('be.checked')
      })
  })

})
