import React from "react";

function NewItem({newProduct, setNewProduct, handleSubmit}) {


  const increment = () => {
    setNewProduct((prev) => ({
      ...prev,
      quantity: Number(prev.quantity) + 1, // Ensure it's treated as a number
    }));
  };

  const decrement = () => {
    setNewProduct((prev) => ({
      ...prev,
      quantity: prev.quantity > 1 ? Number(prev.quantity) - 1 : 1, // Prevent going below 1
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setNewProduct({ ...newProduct, image: reader.result }); // Convert to Base64
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
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
            value={newProduct.name}
            onChange={(e)=>setNewProduct({...newProduct, name: e.target.value})}
          />
        </label>

        {/* Price Input */}
        <label className="flex flex-col text-gray-700 font-medium">
          Buying Price:
          <input
            type="text"
            placeholder="Enter Price"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={newProduct.buyingPrice}
            onChange={(e)=>setNewProduct({...newProduct, buyingPrice: e.target.value})}
          />
        </label>
        <label className="flex flex-col text-gray-700 font-medium">
          Selling Price:
          <input
            type="text"
            placeholder="Enter Price"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={newProduct.sellingPrice}
            onChange={(e)=>setNewProduct({...newProduct, sellingPrice: e.target.value})}
          />
        </label>

        

        <label className="flex flex-col text-gray-700 font-medium">
          ID:
          <input
            type="text"
            placeholder="Enter ID"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={newProduct.ID}
            onChange={(e)=>setNewProduct({...newProduct, ID: e.target.value})}
          />
        </label>

        <label className="flex flex-col text-gray-700 font-medium">
          Image:
          <input
            type="file"
            accept="image/*"
            className="mt-1 p-2 border border-gray-300 rounded-md file:bg-blue-500 file:text-white file:px-4 file:py-2 file:rounded-md file:border-0 file:cursor-pointer"
            onChange={handleImageUpload}
          />
        </label>


        <label className="flex flex-col text-gray-700 font-medium w-max">
          Quantity:
          <div className="mt-1 flex items-center border border-gray-300 rounded-md w-max">
            <button
              onClick={decrement}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-l-md hover:bg-gray-300 w-max"
            >
              −
            </button>
            <input
              type="text"
              readOnly
              className="w-16 text-center p-2 border-x border-gray-300 focus:outline-none"
              value={newProduct.quantity}
              onChange={(e)=>setNewProduct({...newProduct, quantity: e.target.value})}
            />
            <button
              onClick={increment}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-r-md hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </label>
    
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewItem;
