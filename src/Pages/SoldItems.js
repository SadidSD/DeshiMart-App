import React from 'react'
import ProductCard from '../Components/productCard'

function SoldItems({soldItems}) {
  return (
    <div className='min-h-screen max-h-max bg-[#efe5db] p-6'>
      <h2 className='place-self-center text-5xl font-bold pt-12'>Sold Items</h2>
      <hr className="border-black w-full mt-7" />
      <div className='grid grid-cols-5 gap-0'>
        {soldItems.map((product, index) => (
          <ProductCard key={index} name={product.name} price={product.sellingPrice} quantity={product.quantity} ID={product.ID} image={product.image} sellStatus="Sold"/>
     
     ))}  </div>
    </div>
  )
}

export default SoldItems 
