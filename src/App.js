import React from 'react'
import './App.css'
import Home from './Components/01Home/Home'
import NavBar from './Components/Navbar/NavBar'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <About />
      <Work />
      <Service />
      <Contact/>
    </div>
  )
}

export default App
