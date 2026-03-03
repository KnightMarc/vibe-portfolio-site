import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-white text-black dark:bg-darkBg dark:text-white bg-grid transition-colors duration-300">
        <Navbar />
        <main className="flex flex-col gap-0 relative z-10">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

