/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import api from '../lib/api'

const useLaptops = () => {

  const [laptops, setLaptops] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLaptops = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await api.get('/laptops')
        const data = response.data

 
        setLaptops(data.laptop || [])
      } catch (err){
        setError("failed to fetch laptops")
      } finally {
        setIsLoading(false)
      }
    }

    fetchLaptops()
  }, [])

  const deleteLaptop = async (id) => {
    try {
      const response = await api.delete(`/laptops/${id}`);
      console.log("Delete Response:", response); 
      setLaptops((prev) => prev.filter((l) => l.id !== id));
      alert('Data berhasil dihapus');
    } catch (err) {
      console.error("Failed to delete laptop:", err.response?.data || err.message);
      setError("Failed to delete laptop");
    }
  };

  const createLaptop = async (laptopData) => {
    try {
      const response = await api.post('/laptops', laptopData);
      setLaptops((prev) => [...prev, response.data.laptop]);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return {
    laptops,
    isLoading,
    error,
    deleteLaptop,
    createLaptop
}
}

export default useLaptops