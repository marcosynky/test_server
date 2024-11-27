import { getTodosPosts, criarPost, atualizarPost } from "../models/post_models.js"; // Importa as funções getTodosPosts, criarPost e atualizarPost do arquivo post_models.js
import fs from 'fs'; // Importa o módulo fs do Node.js para manipulação de arquivos
import gerarDescricaoComGemini from '../services/gemini_service.js'; // Importa a função gerarDescricaoComGemini do arquivo gemini_service.js
import { ObjectId } from 'mongodb'; // Importa o módulo ObjectId do MongoDB para manipulação de IDs

// Função assíncrona para listar todos os posts
export async function listarPosts(req, res) {
    try {
        const posts = await getTodosPosts(); // Chama a função getTodosPosts para obter todos os posts
        res.status(200).json(posts); // Retorna os posts como resposta em formato JSON com status HTTP 200 (OK)
    } catch (erro) {
        console.log(erro.message); // Loga a mensagem de erro no console
        res.status(500).json({ erro: erro.message }); // Retorna um erro como resposta em formato JSON com status HTTP 500 (Internal Server Error)
    }
}

// Função assíncrona para criar um novo post
export async function postarNovoPost(req, res) {
    const novoPost = req.body; // Pega os dados do corpo da requisição
    try {
        const postCriado = await criarPost(novoPost); // Chama a função criarPost para criar um novo post
        res.status(201).json(postCriado); // Retorna o post criado como resposta em formato JSON com status HTTP 201 (Created)
    } catch (erro) {
        console.log(erro.message); // Loga a mensagem de erro no console
        res.status(400).json({ erro: erro.message }); // Retorna um erro como resposta em formato JSON com status HTTP 400 (Bad Request)
    }
}

// Função assíncrona para fazer upload de uma imagem e criar um novo post
export async function uploadImagem(req, res) {
    const novoPost = req.body; // Pega os dados do corpo da requisição
    try {
        const postCriado = await criarPost(novoPost); // Chama a função criarPost para criar um novo post
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`; // Define o caminho da imagem atualizada
        fs.renameSync(req.file.path, imagemAtualizada); // Renomeia o arquivo de imagem
        res.status(201).json(postCriado); // Retorna o post criado como resposta em formato JSON com status HTTP 201 (Created)
    } catch (erro) {
        console.log(erro.message); // Loga a mensagem de erro no console
        res.status(400).json({ erro: erro.message }); // Retorna um erro como resposta em formato JSON com status HTTP 400 (Bad Request)
    }
}

// Função assíncrona para atualizar um post existente
export async function atualizarNovoPost(req, res) {
    const id = req.params.id; // Pega o ID do post a ser atualizado
    const urlImagem = `http://localhost:3000/uploads/${id}.png`; // Define a URL da imagem
    try {
        const imagemBuffer = fs.readFileSync(`uploads/${id}.png`); // Lê a imagem do disco
        const descricao = await gerarDescricaoComGemini(imagemBuffer); // Gera a descrição da imagem usando o Gemini Service
        const post = {
            imgUrl: urlImagem, // Define a URL da imagem
            descricao: descricao, // Define a descrição do post gerada pelo Gemini Service
            alt: req.body.alt, // Define o texto alternativo da imagem
        };
        const objID = new ObjectId(id); // Converte a string de ID para um objeto ObjectId
        const postAtualizado = await atualizarPost(objID, post); // Chama a função atualizarPost para atualizar o post
        res.status(200).json(postAtualizado); // Retorna o post atualizado como resposta em formato JSON com status HTTP 200 (OK)
    } catch (erro) {
        console.log(erro.message); // Loga a mensagem de erro no console
        res.status(400).json({ erro: erro.message }); // Retorna um erro como resposta em formato JSON com status HTTP 400 (Bad Request)
    }
}
