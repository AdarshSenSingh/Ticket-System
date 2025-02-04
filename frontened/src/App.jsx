import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserSign from "./components/UserSign";
import AdminSign from "./components/AdminSign";
import SoftwareTeamSign from "./components/SoftwareTeamSign";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import SoftLogin from "./components/SoftLogin";
import Main from "./components/Main";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user-sign" element={<UserSign />} />
        <Route path="/admin-sign" element={<AdminSign />} />
        <Route path="/software-team-sign" element={<SoftwareTeamSign />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/software-team-login" element={<SoftLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
