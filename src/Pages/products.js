import React, { useState } from "react";
import Plus from '../Images/plus.png'
import ProductCard from '../Components/productCard';
import NewItem from '../Components/NewItem';
import Sell from '../Components/Sell';

function Products({setSoldItems}) {
  const [showAddItem, setShowAddItem] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({name: '', buyingPrice: '',sellingPrice:'', quantity: '1', ID: '',image: null});
  const [showSell, setShowSell] = useState(false);
  const [index, setIndex] = useState(0);

  const ItemShow =()=>{
    setShowAddItem(true);
  }
  const sellShow= (productIndex)=>{
    setShowSell(true);
    setIndex(productIndex);
  }

  const handleSubmit =(e)=>{
    if(newProduct){
      setProducts([...products, newProduct]);
    }
    setShowAddItem(false);
    setNewProduct({name: '', buyingPrice: '',sellingPrice:'', quantity: '1',ID:'',image: null});
  }

  const handleSell = (productIndex) => {
    setSoldItems((prev) => [...prev, products[productIndex]]); // Add to sold items
    setProducts((prev) => prev.filter((_, idx) => idx !== productIndex)); // Remove only the sold item
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
                  <ProductCard key={index} name={product.name} price={product.sellingPrice} quantity={product.quantity} ID={product.ID} image={product.image} sellShow={()=>sellShow(index)} />
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
