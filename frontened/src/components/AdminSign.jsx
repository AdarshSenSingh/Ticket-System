import { Link } from "react-router-dom";
import "./main.css";

const AdminSign = () => {
  return (
    <div className="signup-form">
      <h3>Sign up as Admin</h3>
      <input type="email" placeholder="Enter Email" className="signup-input" />
      <input type="password" placeholder="Password" className="signup-input" />
      <button className="signup-button">Sign Up</button>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default AdminSign;