import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
         <Navbar />
         <Hero />
         <About />
         <Projects />
         <Contact />
         <Footer />
    </div>
  );
}

export default App;
