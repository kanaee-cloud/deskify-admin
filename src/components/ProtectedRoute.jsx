import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { getAdminDashboard } from "../services/authService";

const ProtectedRoute = () => {
  const { user, logout } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      if (!user) {
        setIsAuthenticated(false);
        return;
      }

      try {
        await getAdminDashboard(user.token);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Invalid token, redirecting to login...", error);
        logout();
        setIsAuthenticated(false);
      }
    };

    validateToken();
  }, [user, logout]);

  if (isAuthenticated === null) {
    return <p>Loading...</p>; 
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
