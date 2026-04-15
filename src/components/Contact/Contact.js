import React, { useRef } from "react";
import './Contact.css'
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();
    const sendEmail = (e)=>{
        e.preventDefault()
        emailjs.sendForm(
      "service_h2huilp",
      "template_ka7a26q",
      form.current,
      "hXxZBmQOyo0p93P_I"
    ).then(()=>{
        alert("message sent successfully..")
    }).catch((error)=>{
        console.log(error);
        
        alert("Failed to send...")
    })
    }
  return (
    <div id="contact" className='contact'>
         <h1>Contact Me</h1>

      <div className="contact-container">
        
        {/* Left Side */}
        <div className="contact-info">
          <h3>Get in touch</h3>
          <p>Email: mohammedsayis@gmail.com</p>
          <p>Phone: +91 9562052406</p>
          <p>Location: Kerala, India</p>
        </div>

        {/* Right Side Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input name='from_name' type="text" placeholder="Your Name" required />
          <input name='fromm_email' type="email" placeholder="Your Email" required />
          <textarea name='message' placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  )
}

export default Contact