<h1>Test-Server - API de Posts</h1>

<h2>📖 Sobre</h2>
<p>Este projeto é uma API construída com <strong>Node.js</strong> e o framework <strong>Express</strong>. A API realiza operações CRUD para gerenciar posts, e também é configurada para receber e servir arquivos estáticos na pasta de uploads. A aplicação se conecta a um banco de dados configurado através de variáveis de ambiente.</p>

## 🚀 Tecnologias

<div>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

<p>Este projeto utiliza as seguintes tecnologias:</p>
<ul>
  <li><strong>Node.js</strong>: Ambiente de execução para o código JavaScript no servidor.</li>
  <li><strong>Express</strong>: Framework minimalista para construir APIs web.</li>
  <li><strong>JavaScript</strong>: Linguagem de programação usada para toda a lógica da aplicação.</li>
  <li><strong>Banco de Dados</strong>: Conexão com banco de dados configurada via variável de ambiente.</li>
</ul>

## 📊 Estado do Projeto

![Progresso](https://img.shields.io/badge/Progresso-100%25-green?style=for-the-badge&labelColor=000000&color=008000&logo=github)

> Este projeto está **concluido** mas pode continua sendo aprimorado. Funcionalidades adicionais podem ser implementadas nas próximas versões.

##  Autor
<h2>Marco Antônio</h2>

<p>Desenvolvedor Full-Stack</p>

<p>
  <a href="https://github.com/marcosynky" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/marco-antônio-developer-fullstack" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</p>

## 📱 Funcionalidades

- Conexão com banco de dados via string de conexão.
- Configuração de servidor Express para aceitar JSON no corpo das requisições.
- Roteamento de posts em um arquivo separado `posts_routes.js`.
- Gerenciamento de uploads de arquivos estáticos na pasta `uploads`.

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

1. **Node.js**: Verifique se o Node.js está instalado corretamente no seu sistema.
   - Instalação do Node.js: [Node.js Docs](https://nodejs.org/)

2. **Banco de dados**: A conexão com o banco de dados é definida através da variável de ambiente `STRING_CONEXAO`.

### Passos para rodar o projeto

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/marcosynky/desafio_projeto_inicial.git

