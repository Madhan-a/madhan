import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero.js/Hero';
import Skills from './components/Skills/Skills';
import Contact from './components/contactMe/Contact';
import WorkExperience from './components/WorkExperience/WorkExperience';


function App() {
  return (
    // <>
    // <Navbar/>
    // <div className='container'>
    // <Hero/>
    // <Skills/>
    // </div>
    // </>
    <>

    <Navbar/>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/Navbar' element={<Navbar/>}></Route> */}
      <Route path='/' element={<Hero/>}></Route>
      <Route path='/Skills' element={<Skills/>}></Route>
      <Route path='/WorkExperience' element={<WorkExperience/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
