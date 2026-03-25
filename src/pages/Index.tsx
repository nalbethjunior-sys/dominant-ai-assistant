import { useState, useRef, useEffect, useCallback } from "react";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";

interface Message {
  id: string;
  text: string;
  sender: "ai" | "user";
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: "1",
  text: "Olá chefe. Sistema Dominant ativo. Pronto para analisar o próximo movimento.",
  sender: "ai",
  timestamp: new Date(),
};

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const enviarMensagem = useCallback((mensagem: string) => {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      text: mensagem,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const aiMsg: Message = {
        id: crypto.randomUUID(),
        text: "Analisando... me dê um momento, chefe.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1200);
  }, []);

  return (
    <div className="flex flex-col h-screen max-h-screen bg-background">
      <ChatHeader />
      <main className="flex-1 overflow-y-auto px-4 py-6 scrollbar-thin">
        <div className="mx-auto max-w-2xl space-y-4">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          <div ref={bottomRef} />
        </div>
      </main>
      <ChatInput onSend={enviarMensagem} />
    </div>
  );
};

export default Index;
