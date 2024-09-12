import { useState } from 'react'
// import {BrowserRouter,Route,Switch}from 'react';
import Home from './Home .jsx';
import About from './About-us.jsx';
import Contact from './contact.jsx';
import NotFound from './NotFound.jsx';
import Profile from './Profile.jsx';
import { Link, Routes,Route, } from 'react-router-dom';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <>
     
     <Routes>
          <Route path="/" element={<Home />}  />
          <Route path='/Profile/:username' element = {<Profile />} />
          <Route path='/About' element = {<About />} />
          <Route path="/Contact" element={<Contact />} />
       </Routes>
    </>

  )
}

export default App
