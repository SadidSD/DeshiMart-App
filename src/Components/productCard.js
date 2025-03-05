import React from 'react'

function productCard({image, name, price, quantity, ID, sellShow}) {
  return (
    <div className='h-[300px] w-[300px] flex flex-col items-center justify-center
       shadow-[5px_5px_10px_rgba(0,0,0,0.2)] rounded-3xl m-7 overflow-hidden relative pt-[200px] bg-gray-100'>
        <div className='h-[200px] w-[300px] bg-red-600 absolute top-0 left-0'>
        <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        
        <h3>{name}</h3>
        <div className='flex justify-between w-full pl-2 pr-2'>
        <p>৳{price}</p>
        <p>Quantity:{quantity}</p>
        </div>
        <div className='flex justify-between w-full pl-2 pr-2'>
          <p>Id:{ID}</p>
          <button className="border border-red-500 bg-white text-red-500 rounded-full px-4 py-1 hover:bg-red-500 hover:text-white transition" onClick={sellShow}>Sell</button>
        </div>
        

      
    </div>
  )
}

export default productCard
