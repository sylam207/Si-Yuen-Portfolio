import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Languages from './components/Languages';
import Tech from './components/Tech';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';


const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-300 antialiased">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
        <About/>
        <Languages/>
        <Tech/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
      <BackToTop/>
    </div>
  );
};

export default App;