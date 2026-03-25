export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ erro: "Metodo nao permitido" });
    }

    const { mensagem } = req.body || {};

    if (!mensagem) {
      return res.status(400).json({ erro: "Mensagem nao enviada" });
    }

    const respostaIA = Recebido: ${mensagem};

    return res.status(200).json({
      resposta: respostaIA,
    });

  } catch (error) {
    return res.status(500).json({
      erro: "Erro interno",
    });
  }
}
