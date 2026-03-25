import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: {
    text: string;
    sender: "ai" | "user";
    timestamp: Date;
  };
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isAI = message.sender === "ai";

  return (
    <div
      className={cn(
        "flex animate-fade-in-up",
        isAI ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[70%]",
          isAI
            ? "bg-chat-ai text-foreground rounded-bl-md"
            : "bg-chat-user text-primary-foreground rounded-br-md"
        )}
      >
        {isAI && (
          <span className="mb-1 block text-[10px] font-mono uppercase tracking-wider text-primary">
            Dominant
          </span>
        )}
        {message.text}
      </div>
    </div>
  );
};
