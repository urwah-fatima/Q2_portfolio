import React from "react";
export default function Contact() {
    const color1 = "#1e1e2f";
    const color2 = "#8e7cc3";
    return (
      <section id="contact" className="contact-section">
        <div>
        <h4 style={{fontSize:"2.5rem", paddingTop:"20px"}}>Contact Information</h4>
        <p>Email: <a href="mailto:urwah209fatima@gmail.com" className="contact-link">urwah209fatima@gmail.com</a></p>
        <p>Phone: (+92) 332 2449708</p>
        <p>LinkedIn: <a href="www.linkedin.com/in/urwah-fatima-8bb6972bb" className="contact-link">Linkedin</a></p>
        <p>GitHub: <a href="https://github.com/urwah-fatima" className="contact-link">Github</a></p>
        </div>
        <div className="contactForm" style={{background:`linear-gradient(135deg,${color1},${color2})`, borderRadius:"10px", maxWidth:"100vw", width:"50%", maxHeight:"1200vw"}}>
        <h2 className="contact-heading">Let's Connect</h2>
      <p className="contact-message">I’d love to hear from you! Send me a message, and I'll get back to you as soon as possible.</p>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
        <input type="email" name="email" placeholder="Your Email" className="contact-input" required />
        <textarea name="message" placeholder="Your Message" className="contact-textarea" required></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
        </div>
      </section>
      
    );
  }
  