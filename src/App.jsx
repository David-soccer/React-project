import React from 'react'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
      <Router> 
    <div>
      <Navbar/>
      <Routes>
     <Route path="/" element={ <Home/>}/>
     <Route path="/services" element={ <Services/>}/>
     <Route path="/about" element={ <About/>}/>
     <Route path="/contact" element={ <Contact/>}/>
      </Routes>
    </div>
    <Footer/>
      </Router>
      
  )
}

export default App
