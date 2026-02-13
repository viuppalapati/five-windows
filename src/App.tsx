import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexNew from "./pages/IndexNew";
import IndexClean from "./pages/IndexClean";
import IndexCleanBackup from "./pages/IndexClean.backup.20260214";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import SharePerspective from "./pages/SharePerspective";
import ListenIn from "./pages/ListenIn";
import StayConnected from "./pages/StayConnected";
import InvitationIntro from "./pages/InvitationIntro";
import InvitationForm from "./pages/InvitationForm";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<IndexClean />} />
          <Route path="/v1" element={<Index />} />
          <Route path="/v2" element={<IndexNew />} />
          <Route path="/v3" element={<IndexCleanBackup />} />
          <Route path="/premium" element={<IndexNew />} />
          <Route path="/old" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/share-perspective" element={<SharePerspective />} />
          <Route path="/listen-in" element={<ListenIn />} />
          <Route path="/stay-connected" element={<StayConnected />} />
          <Route path="/invitation-intro" element={<InvitationIntro />} />
          <Route path="/invitation-form" element={<InvitationForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
