import React from 'react';
import {Routes, Route} from "react-router-dom"

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="text-gray-900 bg-[#111828] h-dvh">
      <Header />
      <Routes>
           <Route path='/' element={<About />} />      
           <Route path='/skills' element={<Skills />} />             
           <Route path='/projects' element={<Projects />} />             
           <Route path='/contact' element={<Contact />} />             
                
                
    </Routes>
    </div>
  );
}

export default App;
