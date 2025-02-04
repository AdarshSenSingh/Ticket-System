import { Link } from "react-router-dom";
import "./main.css";

const SoftLogin = () => {
  return (
    <div className="login-form">
      <h3>Login as Software Team</h3>
      <input type="email" placeholder="Enter Email" className="login-input" />
      <input type="password" placeholder="Password" className="login-input" />
      <button className="login-button">Log In</button>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default SoftLogin;