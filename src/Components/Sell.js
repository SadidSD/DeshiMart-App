import React from 'react';

function Sell({handleSell}) {
  return (
    <div className="flex justify-center items-center ">
      <div className="h-[280px] w-[350px] bg-white rounded-3xl shadow-lg p-8 flex flex-col">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Sell Product</h2>

        <label className="text-gray-700 font-medium mb-2">
          Selling Price:
          <input
            type="text"
            placeholder="Enter price"
            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </label>

        <button className="mt-5 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300" onClick={handleSell}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Sell;
