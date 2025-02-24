import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Packages from "./pages/Package";
import Laptop from "./pages/Laptop";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const mainLayout = (child) => (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="w-full p-6 bg-[#212529]">{child}</div>
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/packages"
          element={
            <ProtectedRoute>
              {mainLayout(<Packages />)}
            </ProtectedRoute>
          }
        />
        <Route
          path="/laptop"
          element={
            <ProtectedRoute>
              {mainLayout(<Laptop />)}
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
