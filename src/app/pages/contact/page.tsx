import React from "react";
import Link from "next/link";

export default function ContactPage() {
  const color1 = "#1e1e2f";
  const color2 = "#8e7cc3";
  
  return (
    <div className="contact-page">
      {/* Header */}
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-info">
          <h4 style={{ fontSize: "2.5rem", paddingTop: "20px" }}>Contact Information</h4>
          <p>Email: <a href="mailto:urwah209fatima@gmail.com" className="contact-link">urwah209fatima@gmail.com</a></p>
          <p>Phone: (+92) 332 2449708</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/urwah-fatima-8bb6972bb" className="contact-link">Linkedin</a></p>
          <p>GitHub: <a href="https://github.com/urwah-fatima" className="contact-link">Github</a></p>
        </div>

        {/* Contact Form */}
        <div className="contactForm" style={{ background: `linear-gradient(135deg,${color1},${color2})`, borderRadius: "10px", maxWidth: "100vw", width: "50%", maxHeight: "1200vw" }}>
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

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Your Portfolio. All Rights Reserved.</p>
        <p><Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms-of-service">Terms of Service</Link></p>
      </footer>

      {/* Add any other sections or content as necessary */}
    </div>
  );
}
