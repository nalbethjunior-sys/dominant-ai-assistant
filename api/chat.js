export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ erro: "Método não permitido" });
  }

  let body = "";
  for await (const chunk of req) {
    body += chunk;
  }

  let parsed;
  try {
    parsed = JSON.parse(body || "{}");
  } catch {
    return res.status(400).json({ erro: "JSON inválido" });
  }

  const { mensagem } = parsed;

  if (!mensagem) {
    return res.status(400).json({ erro: "Mensagem não enviada" });
  }

  const resposta = Recebido: ${mensagem};

  return res.status(200).json({ resposta });
}
