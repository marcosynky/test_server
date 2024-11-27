import { GoogleGenerativeAI } from "@google/generative-ai"; // Importa a biblioteca Google Generative AI

// Inicializa o Google Generative AI com a chave de API fornecida
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Obtém o modelo generativo específico a ser usado
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Função assíncrona para gerar uma descrição da imagem usando o Google Gemini
export default async function gerarDescricaoComGemini(imageBuffer) {
  // Prompt a ser enviado para o modelo generativo
  const prompt = "Gere uma descrição em português do Brasil para a seguinte imagem";

  try {
    // Configura os dados da imagem no formato base64
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"), // Converte o buffer da imagem para string base64
        mimeType: "image/png", // Define o tipo MIME da imagem
      },
    };

    // Gera o conteúdo com base no prompt e na imagem fornecida
    const res = await model.generateContent([prompt, image]);

    // Retorna o texto gerado pela resposta ou uma mensagem padrão se o texto não estiver disponível
    return res.response.text() || "Alt-text não disponível.";
  } catch (erro) {
    // Loga o erro no console para fins de depuração
    console.error("Erro ao obter alt-text:", erro.message, erro);

    // Lança um novo erro para ser tratado pela lógica de chamada
    throw new Error("Erro ao obter o alt-text do Gemini.");
  }
}
