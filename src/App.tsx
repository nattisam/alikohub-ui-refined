import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Hubs = lazy(() => import("./pages/Hubs"));
const Impact = lazy(() => import("./pages/Impact"));
const Partners = lazy(() => import("./pages/Partners"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const Governance = lazy(() => import("./pages/Governance"));
const Ethics = lazy(() => import("./pages/Ethics"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/hubs" element={<Hubs />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/ethics" element={<Ethics />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
