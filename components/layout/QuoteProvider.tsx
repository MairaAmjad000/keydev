"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { QuoteModal } from "./QuoteModal";

type QuoteContextValue = {
  openQuote: () => void;
  closeQuote: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openQuote = useCallback(() => setOpen(true), []);
  const closeQuote = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openQuote, closeQuote }), [openQuote, closeQuote]);

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <QuoteModal open={open} onClose={closeQuote} />
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);

  if (!context) {
    throw new Error("useQuote must be used inside <QuoteProvider>");
  }

  return context;
}
