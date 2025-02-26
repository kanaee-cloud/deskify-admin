/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Packages from "./pages/Package";
import Laptop from "./pages/Laptop";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const MainLayout = ({ children }) => (
  <div className="flex flex-col h-screen">
    <Navbar />
    <div className="flex flex-1">
      <Sidebar />
      <div className="w-full p-6 bg-[#212529]">{children}</div>
    </div>
  </div>
);

const ProtectedLayout = () => (
  <MainLayout>
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="packages" element={<Packages />} />
      <Route path="laptop" element={<Laptop />} />
      <Route path="*" element={<Navigate to="/admin/dashboard" />} />
    </Routes>
  </MainLayout>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<ProtectedRoute />}>
          <Route path="*" element={<ProtectedLayout />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
