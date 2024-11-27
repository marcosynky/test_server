import { MongoClient } from 'mongodb'; // Importa a classe MongoClient da biblioteca mongodb

// Função assíncrona para conectar ao banco de dados
export default async function conectarAoBanco(stringConexao) {
    let mongoClient; // Declara uma variável para armazenar a instância do MongoClient

    try {
        mongoClient = new MongoClient(stringConexao); // Inicializa o MongoClient com a string de conexão
        console.log('Conectando ao cluster do banco de dados...'); // Mensagem de log para indicar o início da conexão
        await mongoClient.connect(); // Tenta conectar ao banco de dados de forma assíncrona
        console.log('Conectado ao MongoDB Atlas com sucesso!'); // Mensagem de log para indicar que a conexão foi bem-sucedida

        return mongoClient; // Retorna a instância do MongoClient conectada
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro); // Mensagem de log para indicar que houve um erro na conexão
        process.exit(); // Encerra o processo caso ocorra um erro na conexão
    }
}
