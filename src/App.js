
import './App.css';
import About from './Components/About';
import Hero from './Components/Hero';
import Work from './Components/Work';
import Navbar from './Components/Navbar';
import Experience from './Components/Experience' ;
import Contact from './Components/Contact';
import Footer from "./Components/Footer";

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Work/>
     <Experience/>
     <Contact/> 
     <Footer/>
    </>

  );
}

export default App;
