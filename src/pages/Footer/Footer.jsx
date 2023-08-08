import React from 'react';
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h2>Contact Me</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <button>LinkedIn</button>
          </a>
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            <button>GitHub</button>
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Sukrit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
