import conectarAoBanco from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados
import 'dotenv/config'; // Importa as variáveis de ambiente
import { ObjectId } from "mongodb"; // Importa o módulo ObjectId do MongoDB para manipulação de IDs


// Estabelece a conexão com o banco de dados usando uma string de conexão passada por variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts
export async function getTodosPosts() {
    const db = conexao.db("imersao-instabyte"); // Acessa o banco de dados "imersao-instabyte"
    const collection = db.collection("posts"); // Acessa a coleção "posts" dentro do banco de dados
    return collection.find().toArray(); // Retorna todos os documentos da coleção "posts" como um array
}

// Função assíncrona para criar um novo post
export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabyte"); // Acessa o banco de dados "imersao-instabyte"
    const collection = db.collection("posts"); // Acessa a coleção "posts" dentro do banco de dados
    return collection.insertOne(novoPost); // Insere um novo documento na coleção "posts"
}

// Função assíncrona para atualizar um post existente
export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabyte"); // Acessa o banco de dados "imersao-instabyte"
    const collection = db.collection("posts"); // Acessa a coleção "posts" dentro do banco de dados
    const objID = new ObjectId(id); // Converte a string de ID para um objeto ObjectId
    return collection.updateOne({ _id: objID }, { $set: novoPost }); // Atualiza um documento na coleção "posts"
}
