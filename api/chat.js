export default async function handler(req, res) {
  try {
    // Só aceita POST
    if (req.method !== "POST") {
      return res.status(405).json({ erro: "Metodo nao permitido" });
    }

    // Lê o corpo da requisição manualmente
    let body = "";
    for await (const chunk of req) {
      body += chunk;
    }

    let parsed;
    try {
      parsed = JSON.parse(body || "{}");
    } catch (e) {
      return res.status(400).json({ erro: "JSON invalido" });
    }

    const { mensagem } = parsed;

    if (!mensagem) {
      return res.status(400).json({ erro: "Mensagem nao enviada" });
    }

    // Resposta da IA (simulada)
    const respostaIA = Recebido: ${mensagem};

    return res.status(200).json({ resposta: respostaIA });

  } catch (error) {
    console.error("Erro na API:", error);
    return res.status(500).json({ erro: "Erro interno" });
  }
}
