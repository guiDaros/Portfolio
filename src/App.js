import React from 'react';
import HeroSec from './components/HeroSec';
import About from './components/About';
import Projects from './components/Projects';
import Academic from './components/Academic';
import Contact from './components/Contact';
import './app.module.css'; // Estilos globais (se necessário)

const App = () => {
  return (
    <div className="App">
      <HeroSec />
      <About />
      <Projects />
      <Academic />
      <Contact />
    </div>
  );
};

export default App;
