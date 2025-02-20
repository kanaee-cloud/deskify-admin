import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import usePackages from "../hooks/usePackages";
import Table from "../components/PackageTable";
import { IoIosAddCircle } from "react-icons/io";

const Package = () => {
  const { packages, deletePackage, page, totalPages, nextPage, prevPage } =
    usePackages();
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    // Empty effect to track page changes if needed  
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setDirection(-1);
      prevPage();
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setDirection(1);
      nextPage();
    }
  };
  
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
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Package List</h1>
        <button className="px-3 py-1 bg-[#383b40] text-white font-medium rounded transition-all duration-200 ease-in-out hover:bg-[#E3B951]/90 hover:text-black flex items-center gap-2">
          <IoIosAddCircle />
          Add Package
        </button>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
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
            <Table data={packages} deleteItem={deletePackage} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="px-3 py-1 rounded bg-[#383b40] disabled:opacity-50 hover:bg-[#E3B951] hover:text-black transition-colors duration-200 ease-linear"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="px-3 py-1 rounded bg-[#383b40] disabled:opacity-50 hover:bg-[#E3B951] hover:text-black transition-colors duration-200 ease-linear"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Package;