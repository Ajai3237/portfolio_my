import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './Pages/Home';
import Project from './Pages/Project';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

function App() {
  

  return (
    <>

    <Header/>

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/projects" element={<Project/>} />
    <Route path="/about" element={<About />} />
    <Route path="/skills" element={<Skills/>} />
    <Route path="/Contact" element={<Contact/>} />
    </Routes>

    <Footer/>
     
    </>
  )
}

export default App
