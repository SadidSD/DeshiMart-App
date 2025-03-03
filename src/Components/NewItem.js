import React, { useState } from "react";

function NewItem() {
  const [quantity, setQuantity] = useState(1); 

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="h-auto w-[500px] rounded-3xl shadow-lg m-7 flex flex-col p-10 bg-white border border-gray-200">
      <h1 className="font-bold text-3xl text-gray-800 self-center p-3">Add New Item</h1>

      <div className="flex flex-col gap-5 pt-6">
        {/* Name Input */}
        <label className="flex flex-col text-gray-700 font-medium">
          Name:
          <input
            type="text"
            placeholder="Enter Name"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </label>

        {/* Price Input */}
        <label className="flex flex-col text-gray-700 font-medium">
          Price:
          <input
            type="text"
            placeholder="Enter Price"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </label>

        

        {/* ID Input */}
        <label className="flex flex-col text-gray-700 font-medium">
          ID:
          <input
            type="text"
            placeholder="Enter ID"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </label>

        {/* Image Upload */}
        <label className="flex flex-col text-gray-700 font-medium">
          Image:
          <input
            type="file"
            className="mt-1 p-2 border border-gray-300 rounded-md file:bg-blue-500 file:text-white file:px-4 file:py-2 file:rounded-md file:border-0 file:cursor-pointer"
          />
        </label>


        <label className="flex flex-col text-gray-700 font-medium">
          Quantity:
          <div className="mt-1 flex items-center border border-gray-300 rounded-md w-max">
            <button
              onClick={decrement}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-l-md hover:bg-gray-300"
            >
              −
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-16 text-center p-2 border-x border-gray-300 focus:outline-none"
            />
            <button
              onClick={increment}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-r-md hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </label>
    
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewItem;
