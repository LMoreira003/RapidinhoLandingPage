import { Hero, Navbar } from "./components/Hero";
import { About, Coverage, QuoteForm } from "./components/Sections";
import { FloatingButtons, Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Coverage />
        <QuoteForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
