import express from 'express'; // Importa o framework express para criar e gerenciar o servidor
import conectarAoBanco from './src/config/dbConfig.js'; // Importa a função de conexão ao banco de dados
import routes from './src/routes/posts_routes.js'; // Importa as rotas de posts

// Função assíncrona para estabelecer a conexão com o banco de dados usando uma string de conexão do ambiente
(async () => {
    try {
        const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); 
        console.log('Conexão com o banco de dados estabelecida com sucesso!');

        const app = express(); // Cria uma nova instância do express
        app.use(express.json()); // Configura o express para usar JSON no corpo das requisições
        app.use(express.static("uploads")); // Define a pasta uploads como pasta estática para servir arquivos estáticos

        routes(app); // Usa as rotas definidas em posts_routes.js

        // Inicia o servidor na porta 3000 e exibe uma mensagem no console
        app.listen(3000, () => {
            console.log('Servidor escutando na porta 3000');
        });
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
})();
