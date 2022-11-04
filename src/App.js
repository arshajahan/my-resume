import './App.css';
import React, {useEffect} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {


  return (
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<About/>}></Route>
          <Route path='/my-resume' element={<About/>}></Route>
          <Route path='/my-resume/resume' element={<Resume/>}></Route>
          <Route path='/my-resume/projects' element={<Projects/>}></Route>
          <Route path='/my-resume/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
  );
}

export default App;