import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { getAdminDashboard } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect jika tidak ada user
      return;
    }

    const fetchDashboard = async () => {
      try {
        const data = await getAdminDashboard(user.token);
        setDashboardData(data);
      } catch (error) {
        console.error("Failed to fetch dashboard:", error);
        logout(); // Logout jika token tidak valid
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [user, logout, navigate]);

  if (loading) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <div>
      <h1>{dashboardData?.message}</h1>
      <p>Email: {dashboardData?.user?.email}</p>
      <p>Role: {dashboardData?.user?.role}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
