import React from "react";
import { FiLogIn } from "react-icons/fi";
import { FaGoogle, FaMicrosoft, FaApple, FaSlack } from "react-icons/fa";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-title">Customer Relationship Management Portal</div>
        <button className="login-button">
          <FiLogIn className="icon" /> Log In
        </button>
      </header>

      {/* Hero Section */}
      <div className="hero">
        {/* Left Content */}
        <div className="hero-text">
          <h1 className="hero-title">Project management made easy</h1>
          <p className="hero-subtitle">From ideas to execution - plan, track, and run successful projects together in CRM</p>

          <div className="email-signup">
            <label htmlFor="email" className="email-label">Work email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="you@company.com" 
              className="email-input" 
            />

            <button className="signup-button">Sign Up</button>
          </div>

          {/* Sign Up with Options */}
          <div className="signup-options">
            <div className="signup-divider">Or sign up with</div>
            <div className="signup-buttons">
              <button className="option-button google-button">
                <FaGoogle className="option-icon" /> Google
              </button>
              <button className="option-button microsoft-button">
                <FaMicrosoft className="option-icon" /> Microsoft
              </button>
              <button className="option-button apple-button">
                <FaApple className="option-icon" /> Apple
              </button>
              <button className="option-button slack-button">
                <FaSlack className="option-icon" /> Slack
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="hero-image">
          <img 
            src="https://images.ctfassets.net/xjcz23wx147q/2oiMdOggDxqcAwWPBbWrOZ/bebd506e5bcf49b163efca81049729be/pm-marketing-hero.webp" 
            alt="Dashboard preview" 
            className="image" 
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">Trying to access CRM? <a href="#" className="footer-link">Log in</a></p>
      </footer>
    </div>
  );
};

export default App;