/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import { login as apiLogin, logout as apiLogout, getAdminDashboard } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try{
          const response = await getAdminDashboard(token);
          setUser({ token, ...response.user});
        } catch(error){
          console.error("Token validation failed:", error);
          localStorage.removeItem("token");
          setUser(null);
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const data = await apiLogin(email, password);
      localStorage.setItem("token", data.token);
      const response = await getAdminDashboard(data.token);
      setUser({ token: data.token, ...response.user });
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    apiLogout();
    localStorage.removeItem("token");
    setUser(null);
  };

  if (isLoading) {
    return null; // Or a loading spinner
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};