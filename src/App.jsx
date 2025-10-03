
import './App.css'
import './index.css';
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {

  return (
    <>

      <div>
        <Navbar />
        <Hero />
        <Features />
        <Testimonial />
        <Footer />

      </div>
    </>
  )
}

export default App
