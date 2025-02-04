import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-title">Customer Relationship Management Portal</div>
      </header>

      {/* Main Content Wrapper for Centering */}
      <div className="main-wrapper">
        <div className="hero">
          {/* Left Content */}
          <div className="hero-text">
            <h1 className="hero-title">Project management made easy</h1>
            <p className="hero-subtitle">
              From ideas to execution - plan, track, and run successful projects together in CRM.
            </p>

            {/* Signup Section */}
            <div className="role-section">
              <h2>Are you new?</h2>
              <div className="role-buttons">
                <Link to="/admin-sign" className="role-button">
                  Sign up as Admin
                </Link>
                <Link to="/user-sign" className="role-button">
                  Sign up as User
                </Link>
                <Link to="/software-team-sign" className="role-button">
                  Sign up as Software Team
                </Link>
              </div>
            </div>

            {/* Login Section */}
            <div className="login-section">
              <h2>Already have an account? Log in:</h2>
              <div className="role-buttons">
                <Link to="/admin-login" className="role-button">
                  Login as Admin
                </Link>
                <Link to="/user-login" className="role-button">
                  Login as User
                </Link>
                <Link to="/software-team-login" className="role-button">
                  Login as Software Team
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="hero-image">
            {/* Image or animation can go here */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          Need Any Help?<a href="#" className="footer-link"> Contact here</a>
        </p>
      </footer>
    </div>
  );
};

export default Main;
