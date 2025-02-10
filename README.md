# **Projeto de Testes Automatizados com Cypress**

Este repositório contém testes automatizados utilizando o framework **Cypress**. Os testes incluem validação de **endpoints de API** e testes de **frontend (web)**.

## **Estrutura do Projeto**

A estrutura do projeto é a seguinte:

```
├── cypress/
│   ├── tests/
│   │   └── e2e/
│   │       └── login_web.cy.js    # Testes de login no frontend
│   ├── api/
│   │   └── swagger.cy.js          # Testes de API utilizando o Swagger
├── cypress.json                   # Configuração do Cypress
├── package.json                   # Dependências do projeto
├── README.md                      # Este arquivo
```

---

## **Pré-requisitos**

Para executar este projeto, você precisará de:

- **Node.js** (Recomendado versão 16 ou superior)
- **npm** ou **yarn** para gerenciar dependências

### **Instalando o Cypress**

1. **Clone o repositório**

   Se você ainda não clonou o repositório, use o comando abaixo:

   ```bash
   git clone <url_do_repositório>
   ```

2. **Instale as dependências do projeto**

   Navegue até o diretório do projeto e instale as dependências usando **npm** ou **yarn**.

   Com **npm**:
   ```bash
   npm install
   ```

   Com **yarn**:
   ```bash
   yarn install
   ```

---

## **Configuração do Cypress**

O Cypress possui um arquivo de configuração padrão `cypress.json`, onde você pode ajustar variáveis de ambiente ou configurações de execução. No momento, a configuração está básica, mas você pode expandir conforme necessário.

---

## **Estrutura de Testes**

### **Testes de API**

Os testes de API estão localizados na pasta `cypress/api/`, e o arquivo principal é o `swagger.cy.js`. Estes testes validam endpoints de API do servidor utilizando o **Swagger UI** como referência.

## **Rodando os Testes**

### **Rodar Testes com Cypress em Modo Interativo**

Se você deseja rodar os testes com a interface gráfica do Cypress, use o comando abaixo:

```bash
npx cypress open
```

Este comando abrirá o Cypress no modo interativo, onde você poderá selecionar os testes que deseja rodar.

### **Rodar Testes em Modo Headless**

Se você deseja rodar os testes sem a interface gráfica, use o comando abaixo para rodar todos os testes em modo headless:

```bash
npx cypress run
```

---

## **Comandos Úteis**

- **Rodar Testes de Frontend (Web)**:
  ```bash
  npx cypress run --spec "cypress/tests/e2e/login_web.cy.js"
  ```

- **Rodar Testes de API**:
  ```bash
  npx cypress run --spec "cypress/tests/api/swagger.cy.js"
  ```

- **Rodar Testes Específicos**:
  Para rodar um teste específico, use o caminho completo do arquivo no comando acima.

---

## **Adicionando Novos Testes**

Para adicionar novos testes, basta criar novos arquivos de teste dentro das pastas `cypress/tests/e2e` para frontend ou `cypress/tests/api/` para testes de API. Lembre-se de seguir a convenção de nomeação e garantir que seus testes sejam claros e organizados.

---

## **Contribuições**

Se você deseja contribuir com este projeto, fique à vontade para fazer um fork e enviar pull requests. Qualquer melhoria será bem-vinda!

---

## **Licença**

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

### **Conclusão**

Esse **README.md** fornece uma visão geral completa sobre o uso do Cypress para rodar testes de **API** e **frontend (web)**. Se você precisar de mais alguma modificação ou detalhes, basta me avisar! 🚀
