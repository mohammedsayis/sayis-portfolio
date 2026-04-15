import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="flex flex-col md:flex-row justify-between p-5 bg-black text-white">
         <h1 className="text-xl">MS  </h1>
        </div>
      <ul>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </ul>
    </nav>
  )
}

export default Navbar