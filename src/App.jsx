import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Dashboard/Home";
import Expense from "./pages/Dashboard/Expense";
import Income from "./pages/Dashboard/Income";

// 🟢 Define Root first
const Root = () => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/Login" />;
};

// 🟢 Define PrivateRoute next
const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? element : <Navigate to="/Login" />;
};

// ✅ App component
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Home />} />} />
          <Route path="/Expense" element={<PrivateRoute element={<Expense />} />} />
          <Route path="/Income" element={<PrivateRoute element={<Income />} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
