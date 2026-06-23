import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app">
      {/* Background ambient blobs */}
      <div className="bg-glow-blobs">
        <div className="glow-blob-1"></div>
        <div className="glow-blob-2"></div>
        <div className="glow-blob-3"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
