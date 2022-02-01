import React from 'react'
import About from './components/About'
import Info from './components/Info'
import Intrests from './components/Intrests'
import Footer from './components/Footer'
import './components/style.css'

export default function App() {
  return (
    <div className='container'>
      <div className='main'>
        <Info />
        <About />
        <Intrests />
        <Footer />
      </div>
    </div>
  )
}
