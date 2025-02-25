/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";  
import { FormatMoney } from "../utilities/FormatMoney";

const Table = ({ data, deleteItem, editItem, startIndex }) => {
  return (
    <div className="overflow-x-auto text-white border-[0.5px] border-[#E3B951] rounded">
      <table className="min-w-full bg-[#212529]">
        <thead>
          <tr className="border-b bg-[#E3B951] border-[#E3B951] text-black font-medium">
            <th className="py-2 px-4 font-medium text-left">No</th>
            <th className="py-2 px-4 font-medium text-left">Name</th>
            <th className="py-2 px-4 font-medium text-left">Photo</th>
            <th className="py-2 px-4 font-medium text-left">Price</th>
            <th className="py-2 px-4 font-medium text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr 
              key={item.id} 
              className="w-full border-b border-[#373a3e] hover:bg-[#2c3034] transition-all duration-200"
            >
              <td className="py-2 px-4 w-[10%]">{startIndex + index}</td>
              <td className="py-2 px-4 w-[30%]">{item.model_name}</td>
              <td className="py-2 px-4 w-[20%]">
                {item.image_url && (
                  <img 
                    src={item.image_url} 
                    alt={item.model_name} 
                    className="h-10 w-auto rounded" 
                  />
                )}
              </td>
              <td className="py-2 px-4 w-[20%]">{FormatMoney(item.price)}</td>
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
                  onClick={() => editItem(item)}
                >
                  <MdEdit size={18} />
                  <span>Edit</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
