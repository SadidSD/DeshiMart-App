import React, { useState } from "react";
import Plus from '../Images/plus.png'
import ProductCard from '../Components/productCard';
import NewItem from '../Components/NewItem';
import Sell from '../Components/Sell';
import { useEffect } from "react";

function Products({setSoldItems, soldItems}) {
  const [showAddItem, setShowAddItem] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({name: '', buyingPrice: '',sellingPrice:'', quantity: '1', ID: '',image: null});
  const [showSell, setShowSell] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const ItemShow =()=>{
    setShowAddItem(true);
  }
  const sellShow= (productIndex)=>{
    setShowSell(true);
    setIndex(productIndex);
  }

  const handleSubmit = async () => {
    if (newProduct) {
      await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      setProducts([...products, newProduct]); // Update UI
    }
    setShowAddItem(false);
    setNewProduct({ name: "", buyingPrice: "", sellingPrice: "", quantity: "1", ID: "", image: null });
  };

  const handleSell = async (productIndex) => {
    const itemId = products[productIndex]._id;
  
    await fetch(`http://localhost:5000/api/items/${itemId}/sell`, { method: "PUT" });
  
    // Include image in sold items
    const soldProduct = { ...products[productIndex] };
  
    setSoldItems([...soldItems, soldProduct]); // Preserve image data
    setProducts(products.filter((_, idx) => idx !== productIndex));
    setShowSell(false);
  };
 

  return (
    <div className='min-h-screen max-h-max bg-[#efe5db] p-6'>
        <h2 className='place-self-center text-5xl font-bold pt-12'>Inventory</h2>
        <hr className='mt-7'/>

            <div className='grid grid-cols-5 gap-0'>

                <div className='h-[300px] w-[300px] flex flex-col items-center justify-center
                shadow-[5px_5px_10px_rgba(0,0,0,0.2)] rounded-3xl m-7 bg-gray-100 hover:cursor-pointer' onClick={ItemShow}>
                  <img className='h-[100px] ' src={Plus} alt="" />
                  <h3 className='text-2xl pt-5'>Add New Item</h3>
                </div>
              
                {products.map((product, index) => (
                  <ProductCard key={index} name={product.name} price={product.sellingPrice} quantity={product.quantity} ID={product.ID} image={product.image} sellShow={()=>sellShow(index)} sellStatus="Sell" />
                ))}
            </div>
            
            {showAddItem && 
            (<div className="flex justify-center items-center absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-50">
              <NewItem newProduct={newProduct} setNewProduct={setNewProduct} handleSubmit={handleSubmit} />
            </div>)}

            {showSell && 
            (<div className="flex justify-center items-center absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-50">
              <Sell handleSell={() => handleSell(index)} />
            </div>)}

    </div>
  )
}

export default Products
