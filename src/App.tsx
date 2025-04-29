import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import Team from "./pages/team";
import Responsibilities from "./pages/responsibilities";
import Competitions from "./pages/Competitions";
import Blog from "./pages/Blog";
import Audits from "./pages/audits";
const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="protocol-security-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<Team />} />
            <Route path="/responsibilities" element={<Responsibilities />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/audits" element={<Audits />} />
            <Route path="/blog" element={<Blog />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
