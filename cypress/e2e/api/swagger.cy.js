/// <reference types="cypress" />

describe('Testes de API - Listar Produtos', () => {


  const apiUrl = 'https://serverest.dev';
  const idCarrinho = 'qbMqntef4iTOwWfg'; 

  it('Deve realizar login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/login`,
      body: {
        email: "testegeraisps@gmail.com",
        password: "T@123456!"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Login realizado com sucesso');
      expect(response.body).to.have.property('authorization').and.to.not.be.empty;
    })
  })

 

  it('Deve listar todos os produtos cadastrados com sucesso', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/produtos`, 
    }).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body).to.have.property('produtos').and.to.be.an('array');
      expect(response.body.produtos.length).to.be.gte(0); 
    })
  })


  it('Deve buscar o carrinho com o ID fornecido com sucesso', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/carrinhos/${idCarrinho}`, 
    }).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body).to.have.property('_id', idCarrinho); 
      expect(response.body).to.have.property('produtos').and.to.be.an('array'); 
      expect(response.body.produtos.length).to.be.gte(0); 
    })
  })
})