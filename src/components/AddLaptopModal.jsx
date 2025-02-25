/* eslint-disable react/prop-types */
import { useState } from "react";

const AddLaptopModal = ({ isOpen, onClose, addLaptop }) => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addLaptop(formData);
    if (response.success) {
      alert("Laptop berhasil ditambahkan!");
      onClose();
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
    } else {
      alert("Gagal menambahkan laptop.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 bg-opacity-10">
      <div className="bg-[#212529] text-white  p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-center font-bold text-xl tracking-wide mb-4">
          Add New Laptop
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="model_name"
            placeholder="Model Name"
            value={formData.model_name}
            onChange={handleChange}
            className="w-full p-2 border-b outline-none border-[#E3B951]"
            required
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full p-2 border-b outline-none border-[#E3B951]"
            required
          />
          <input
            type="text"
            name="processor"
            placeholder="Processor"
            value={formData.processor}
            onChange={handleChange}
            className="w-full p-2 border-b outline-none border-[#E3B951]"
            required
          />
          <input
            type="text"
            name="refresh_rate"
            placeholder="Refresh Rate"
            value={formData.refresh_rate}
            onChange={handleChange}
            className="w-full p-2 border-b outline-none border-[#E3B951]"
            required
          />
          <input
            type="text"
            name="ram"
            placeholder="RAM"
            value={formData.ram}
            onChange={handleChange}
            className="w-full p-2 border-b outline-none border-[#E3B951]"
            required
          />
          <input
            type="text"
            name="memory"
            placeholder="Memory"
            value={formData.memory}
            onChange={handleChange}
            className="w-full p-2 border-b outline-none border-[#E3B951]"
            required
          />
          <input
            type="text"
            name="gpu"
            placeholder="GPU"
            value={formData.gpu}
            onChange={handleChange}
            className="w-full p-2 border-b outline-none border-[#E3B951]"
          />
          <input
            type="text"
            name="display"
            placeholder="display"
            value={formData.display}
            onChange={handleChange}
            className="w-full p-2 border-b outline-none border-[#E3B951]"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border-b outline-none border-[#E3B951]"
            required
          />
            <input
              id="file-upload"
              type="url"
              name="image_url"
              placeholder="Image URL"
              onChange={handleChange}
              className="w-full p-2 border-b border-[#E3B951] outline-none"
              required
            />
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
