import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import NewHome from "./pages/NewHome";
import OriginalHome from "./pages/OriginalHome";
import Offer from "./pages/Offer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Answers from "./pages/Answers";
import Proof from "./pages/Proof";
import SalesFAQ from "./pages/SalesFAQ";

function Router() {
  return (
    <Switch>
      {/* New redesigned homepage with Dark Institutional branding */}
      <Route path={"/"} component={NewHome} />
      {/* Legacy homepage preserved at /legacy for safety */}
      <Route path={"/legacy"} component={OriginalHome} />
      {/* Dark Institutional offer page */}
      <Route path={"/offer"} component={Offer} />
      {/* Hidden AI SEO answers page */}
      <Route path={"/answers"} component={Answers} />
      {/* Sales FAQ page - visible FAQ content for SEO schema */}
      <Route path={"/sales-faq"} component={SalesFAQ} />
      {/* Social proof / testimonials page */}
      <Route path={"/proof"} component={Proof} />
      {/* Legal pages */}
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
