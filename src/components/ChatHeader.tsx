export const ChatHeader = () => (
  <header className="flex items-center justify-between border-b border-border bg-card px-4 py-3 sm:px-6">
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
        Dominant
      </h1>
      <p className="text-xs font-medium text-muted-foreground">
        Domínio do Chefe
      </p>
      <p className="mt-0.5 text-[10px] tracking-wide text-muted-foreground/70 font-mono uppercase">
        Sistema de análise e estratégia
      </p>
    </div>
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className="inline-block h-2 w-2 rounded-full bg-status-active animate-pulse-dot" />
      <span className="hidden sm:inline">Sistema ativo</span>
    </div>
  </header>
);
