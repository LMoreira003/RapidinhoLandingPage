import { Hero, Navbar } from "./components/Hero";
import {
  About,
  Advantages,
  Coverage,
  QuoteForm,
  Services,
  Testimonials,
} from "./components/Sections";
import { FloatingButtons, Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <QuoteForm />
        <Testimonials />
        <Coverage />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
