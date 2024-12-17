/// <reference types="cypress" />

describe('Login E2E', () => {

  it('Deve realizar o cadastro com sucesso', () => {
    cy.visit('/'); 
    cy.get('[data-testid="cadastrar"]').should('be.visible').click()
    cy.get('[data-testid="nome"]').type('Teste');
    cy.get('[data-testid="email"]').type('testegeraisps@gmail.com');
    cy.get('[data-testid="password"]').type('T@123456!');
    cy.get('[data-testid="checkbox"]').click()
    cy.get('[data-testid="cadastrar"]').should('be.visible').click()
    cy.get('.lead').should('have.text', 'Este é seu sistema para administrar seu ecommerce.')
  })


  it('Deve realizar login com sucesso', () => {

    cy.visit('/'); 
    cy.get('[data-testid="email"]').type('testegeraisps@gmail.com');
    cy.get('[data-testid="senha"]').type('T@123456!');
    cy.get('[data-testid="entrar"]').click();
    cy.url().should('include', '/home'); 
  
    cy.get('h1', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .should((text) => {
        expect(text).to.match(/^Bem[-\s]Vindo\s.+/); 
      })
  })

  it('Deve realizar login informando e-mail ou senha invalidos', () => {
    cy.visit('/');
    cy.get('[data-testid="email"]').type('testegeraisps@gmail.com');
    cy.get('[data-testid="senha"]').type('123456');
    cy.get('[data-testid="entrar"]').click();
    cy.get('div.alert.alert-secondary', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Email e/ou senha inválidos');
    })


  })
  