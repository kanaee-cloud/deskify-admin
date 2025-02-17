/* eslint-disable react-hooks/rules-of-hooks */
// import React from 'react'

import AddLaptopModal from "../components/AddLaptopModal";
import Table from "../components/LaptopTable";
import useLaptop from "../hooks/useLaptop";
import { useState } from "react";

const Laptop = () => {
  const { laptops, deleteLaptop, createLaptop } = useLaptop();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = laptops.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(laptops.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Laptop List</h1>
      <div className="space-y-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Laptop
        </button>

        <Table data={currentItems} deleteItem={deleteLaptop} startIndex={indexOfFirstItem + 1}/>

        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
          >
            Previous
          </button>

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-3 py-1 rounded border ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <div className="text-center text-sm text-gray-600">
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, laptops.length)} of {laptops.length}{" "}
          entries
        </div>
      </div>

      <AddLaptopModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addLaptop={createLaptop}
      />
    </div>
  );
};

export default Laptop;
