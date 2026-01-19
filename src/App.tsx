import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LiveChat from "./components/LiveChat";
import ExitIntentPopup from "./components/ExitIntentPopup";
import ScrollBanner from "./components/ScrollBanner";

const queryClient = new QueryClient();

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <LiveChat isOpen={isChatOpen} onOpenChange={setIsChatOpen} />
        <ExitIntentPopup onOpenChat={handleOpenChat} />
        <ScrollBanner onOpenChat={handleOpenChat} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;