/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosAddCircle } from "react-icons/io";
import AddLaptopModal from "../components/AddLaptopModal";
import Table from "../components/LaptopTable";
import useLaptop from "../hooks/useLaptop";

const Laptop = () => {
  const { laptops, deleteLaptop, createLaptop, updateLaptop } = useLaptop();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = laptops.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(laptops.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const [editingLaptop, setEditingLaptop] = useState(null);

  const handleEdit = (laptop) => {
    setEditingLaptop(laptop);
    setIsModalOpen(true);
  };

  const handleAddOrUpdateLaptop = (idOrData, data) => {
    if (data) {
      // If data is provided, we're updating a laptop
      return updateLaptop(idOrData, data);
    } else {
      // Otherwise, we're creating a new laptop
      return createLaptop(idOrData);
    }
  };

  const handlePageChange = (pageNumber) => {
    // Set the animation direction based on navigation direction
    setDirection(pageNumber > currentPage ? 1 : -1);
    setCurrentPage(pageNumber);
  };

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
    }),
  };

  return (
    <div className="text-white space-y-4">
      <div className="rounded flex justify-between items-center">
        <h1 className="text-xl font-bold">Laptop List</h1>
        <button
          onClick={() => {
            setEditingLaptop(null); // Ensure we're not in edit mode when adding
            setIsModalOpen(true);
          }}
          className="px-3 py-1 bg-[#383b40] text-white font-medium rounded transition-all duration-200 ease-in-out hover:bg-[#E3B951]/90 hover:text-black flex items-center gap-2"
        >
          <IoIosAddCircle />
          Add Laptop
        </button>
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <Table
              data={currentItems}
              deleteItem={deleteLaptop}
              startIndex={indexOfFirstItem + 1}
              editItem={handleEdit}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-[#383b40] disabled:opacity-50 hover:bg-[#E3B951] hover:text-black transition-colors duration-200 ease-linear"
        >
          Previous
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-3 py-1 rounded transition-all duration-200 ease-linear ${
              currentPage === number
                ? "bg-[#383b40] text-white"
                : "hover:bg-[#383b40] bg-[#212529]"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-[#383b40] disabled:opacity-50 hover:bg-[#E3B951] hover:text-black transition-colors duration-200 ease-linear"
        >
          Next
        </button>
      </div>

      <div className="text-center text-sm text-gray-600">
        Showing {indexOfFirstItem + 1} to{" "}
        {Math.min(indexOfLastItem, laptops.length)} of {laptops.length} entries
      </div>

      <AddLaptopModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingLaptop(null); 
        }}
        addOrUpdateLaptop={handleAddOrUpdateLaptop}
        editingLaptop={editingLaptop} 
      />
    </div>
  );
};

export default Laptop;