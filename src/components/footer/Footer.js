import React from 'react'
import './Footer.css'

function Footer() {
  return (
     <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-left">
          <h2>Mohammed Sayis CH</h2>
          <p>Frontend Developer | MERN Stack</p>
        </div>

        {/* Center */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right */}
        <div className="footer-social">
          <a href="https://github.com/mohammedsayis" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mohammed-sayis-ch-88b170226/" target="_blank" rel="noreferrer">LinkedIn</a>
          
        </div>

      </div>
 
      <p className="footer-bottom">
        © 2026 Mohammed Sayis CH. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer