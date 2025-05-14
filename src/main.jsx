import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.jsx";

// Crea un'istanza di QueryClient con opzioni predefinite
// QueryClient gestisce le regole e la cache.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Definisci qui le opzioni predefinite per tutte le query
      retry: 2, // Prova a ritentare la query 2 volte in caso di errore
      refetchOnWindowFocus: false, // Non ricaricare automaticamente quando la finestra ottiene il focus
      staleTime: 10 * 60 * 1000, // Le query sono "fresche" per 10 minuti
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
