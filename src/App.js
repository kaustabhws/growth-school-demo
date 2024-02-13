import './App.css';
import About from './components/About/About';
import Course from './components/Course/Course';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import More from './components/More/More';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <More />
      <Course />
      <Footer />
    </div>
  );
}

export default App;
