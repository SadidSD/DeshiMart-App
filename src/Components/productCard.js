import React from 'react'

function productCard({image, name, price}) {
  return (
    <div className='h-[300px] w-[300px] flex flex-col items-center justify-center
       shadow-[5px_5px_10px_rgba(0,0,0,0.2)] rounded-3xl m-7 overflow-hidden relative pt-[200px]'>
        <div className='h-[200px] w-[300px] bg-red-600 absolute top-0 left-0'>
        <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        
        <h3>{name}</h3>
        <div className='flex justify-between w-full p-3 '>
        <p>৳{price}</p>
        <h2 className='font-bold text-2xl text-red-500'>Sold</h2>
        </div>
      
    </div>
  )
}

export default productCard
