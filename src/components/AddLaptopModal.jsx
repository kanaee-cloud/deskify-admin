/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
// import { MdDelete, MdEdit } from "react-icons/md";
// import { FormatMoney } from "../utilities/FormatMoney";

const AddLaptopModal = ({
  isOpen,
  onClose,
  addOrUpdateLaptop,
  editingLaptop,
}) => {
  const [formData, setFormData] = useState({
    model_name: "",
    brand: "",
    processor: "",
    ram: "",
    memory: "",
    gpu: "",
    refresh_rate: "",
    display: "",
    price: "",
    image_url: "",
  });

  // Add hidden ID field for updates only
  const [hiddenId, setHiddenId] = useState("");

  useEffect(() => {
    if (editingLaptop) {
      // For editing, store the ID separately
      setHiddenId(editingLaptop.id || "");
      
      setFormData({
        model_name: editingLaptop.model_name || "",
        brand: editingLaptop.brand || "",
        processor: editingLaptop.processor || "",
        ram: editingLaptop.ram || "",
        memory: editingLaptop.memory || "",
        gpu: editingLaptop.gpu || "",
        refresh_rate: editingLaptop.refresh_rate || "",
        display: editingLaptop.display || "",
        price: editingLaptop.price || "",
        image_url: editingLaptop.image_url || "",
      });
    } else {
      // For new laptop, reset form
      setHiddenId("");
      setFormData({
        model_name: "",
        brand: "",
        processor: "",
        ram: "",
        memory: "",
        gpu: "",
        refresh_rate: "",
        display: "",
        price: "",
        image_url: "",
      });
    }
  }, [editingLaptop]);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response;
    
    if (editingLaptop) {
      // For updating, pass the ID and the form data
      response = await addOrUpdateLaptop(hiddenId, formData);
    } else {
      // For creating, just pass the form data (ID will be generated on server)
      response = await addOrUpdateLaptop(formData);
    }

    if (response.success) {
      alert(
        editingLaptop
          ? "Laptop berhasil diperbarui!"
          : "Laptop berhasil ditambahkan!"
      );
      onClose();
    } else {
      alert("Gagal menyimpan laptop.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 bg-opacity-10">
      <div className="bg-[#212529] text-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-center font-bold text-xl tracking-wide mb-4">
          {editingLaptop ? "Edit Laptop" : "Add New Laptop"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {Object.keys(formData).map((key) => (
            <input
              key={key}
              type={key === "price" ? "number" : "text"}
              name={key}
              placeholder={key.replace("_", " ").toUpperCase()}
              value={formData[key]}
              onChange={handleChange}
              className="w-full p-2 border-b outline-none border-[#E3B951]"
              required
            />
          ))}
          <div className="flex mt-5 justify-between gap-2 font-semibold">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 w-1/2 bg-[#383b40] text-white rounded hover:bg-[#383b30] transition-colors linear duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 w-1/2 border border-[#E3B951] text-white rounded hover:text-black hover:bg-[#E3B951] transition-colors linear duration-200"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLaptopModal;