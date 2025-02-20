/* eslint-disable react/prop-types */
import { useState } from "react";

const AddLaptopModal = ({ isOpen, onClose, addLaptop }) => {
  const [formData, setFormData] = useState({
    model_name: "",
    brand: "",
    processor: "",
    ram: "",
    storage: "",
    gpu: "",
    screen_size: "",
    price: "",
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
        storage: "",
        gpu: "",
        screen_size: "",
        price: "",
      });
    } else {
      alert("Gagal menambahkan laptop.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-10">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Add New Laptop</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="model_name"
            placeholder="Model Name"
            value={formData.model_name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="processor"
            placeholder="Processor"
            value={formData.processor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="ram"
            placeholder="RAM"
            value={formData.ram}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="storage"
            placeholder="Storage"
            value={formData.storage}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="gpu"
            placeholder="GPU"
            value={formData.gpu}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="screen_size"
            placeholder="Screen Size"
            value={formData.screen_size}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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
