/* eslint-disable react/prop-types */
import { MdDelete, MdEdit } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const Table = ({ data, deleteItem }) => {
  return (
    <div className="overflow-x-auto text-white border-[0.5px] border-[#E3B951] rounded">
      <table className="min-w-full bg-[#212529]">
        <thead>
          <tr className="border-b bg-[#E3B951] border-[#E3B951] text-black font-medium">
            <th className="py-2 px-4 font-medium text-left">ID</th>
            <th className="py-2 px-4 font-medium text-left">Name</th>
            <th className="py-2 px-4 font-medium text-left">Description</th>
            <th className="py-2 px-4 font-medium text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {data.map((item) => (
              <motion.tr
                key={item.id}
                className="w-full border-b border-[#373a3e] hover:bg-[#2c3034] transition-all duration-200"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={rowVariants}
                transition={{ duration: 0.3 }}
              >
                <td className="py-2 px-4 w-[10%]">{item.id}</td>
                <td className="py-2 px-4 w-[30%]">{item.tier}</td>
                <td className="py-2 px-4 w-[40%]">{item.description}</td>
                <td className="flex py-2 px-4 gap-3 w-[20%] font-medium">
                  <button
                    className="bg-[#383b40] text-white px-3 py-1.5 rounded flex items-center gap-1 border-b-2 border-transparent hover:bg-red-600 transition-all duration-200"
                    onClick={() => deleteItem(item.id)}
                  >
                    <MdDelete size={18} />
                    <span>Delete</span>
                  </button>
                  <button
                    className="bg-[#383b40] text-white px-3 py-1.5 rounded flex items-center gap-1 border-b-2 border-transparent hover:bg-[#E3B951] hover:text-black transition-all duration-200"
                    onClick={() => deleteItem(item.id)}
                  >
                    <MdEdit size={18} />
                    <span>Edit</span>
                  </button>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
