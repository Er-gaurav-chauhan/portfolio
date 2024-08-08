import React from 'react';
import { Routes, Route } from "react-router-dom"

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="text-white bg-[#111828]">
      <Header />
      <Routes>
        <Route path='/' element={<><About /> <Skills /> <Projects /><Contact /></>} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />


      </Routes>
    </div>
  );
}

export default App;
