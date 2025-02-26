import api from '../lib/api';

export const login = async (email, password) => {
    try {
      const response = await api.post("/admin/login", { email, password });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || "Login failed";
    }
  };

export const getAdminDashboard = async (token) => {
  try{
    const response = await api.get('/admin/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  } catch(error){
    throw new Error("Invalid or expire token", error);
  }
};
  
  

  export const logout = () => {
    localStorage.removeItem("token");
  };

  