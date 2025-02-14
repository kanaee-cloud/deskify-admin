/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import api from "../lib/api";

const usePackages = (initialPage = 1) => {
  const [packages, setPackages] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await api.get(`/packages?page=${page}`);
        const data = response.data;

        console.log(data)
        setPackages(data.packages || []);
        setTotalPages(data.totalPages || 2);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("failed to fetch packages");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPackages();
  }, [page]);

  const deletePackage = async (id) => {
    try {
      await api.delete(`/packages/${id}`);
      setPackages((prevPackages) => prevPackages.filter(pkg => pkg.id !== id));
    } catch (err) {
      setError("Failed to delete package");
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return {
    packages,
    page,
    totalPages,
    isLoading,
    error,
    nextPage,
    prevPage,
    deletePackage
  }
};

export default usePackages;
