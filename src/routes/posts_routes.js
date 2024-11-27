import express from 'express'; // Importa o framework express
import multer from 'multer'; // Importa o middleware multer para upload de arquivos
import cors from 'cors'; // Importa o middleware cors
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from '../controller/posts_controller.js'; // Importa as funções do controlador de posts

const corsOptions = {
    origin: "http://localhost:8000", // Define o origin como "http://localhost:8000"
    optionsSuccessStatus: 200, // Define o status de resposta como 200 (OK)
}; // Define as opções para o middleware cors

// Configuração do multer para armazenar os arquivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Define o diretório de destino para os uploads
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Mantém o nome original do arquivo
    }
});

// Inicializa o multer com as configurações de armazenamento
const upload = multer({ storage }); // Configura o multer para utilizar o armazenamento definido acima

// Definição das rotas
const routes = (app) => {
    app.use(express.json()); // Configura o express para usar JSON no corpo das requisições
    app.use(cors(corsOptions)); // Configura o express para usar o middleware cors
    app.get("/posts", listarPosts); // Define a rota GET /posts para listar posts, usando a função listarPosts do controlador
    app.post("/posts", postarNovoPost); // Define a rota POST /posts para postar novos posts, usando a função postarNovoPost do controlador
    app.post("/upload", upload.single("imagem"), uploadImagem); // Define a rota POST /upload para enviar imagens, usando o middleware multer e a função uploadImagem
    app.put("/upload/:id", atualizarNovoPost); // Define a rota PUT /upload/:id para atualizar posts, usando o middleware multer e a função atualizarNovoPost
};

export default routes; // Exporta a função de configuração das rotas para ser usada em outras partes da aplicação
