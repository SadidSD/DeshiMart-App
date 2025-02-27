import React from 'react'
import Plus from '../Images/plus.png'

function products() {
  return (
    <div className=''>
      <h2 className='place-self-center text-5xl font-bold pt-12'>Inventory</h2>
      <hr className='mt-7'/>
      <div className='h-[300px] w-[300px] flex flex-col items-center justify-center
       shadow-[5px_5px_10px_rgba(0,0,0,0.2)] rounded-3xl m-7'>
        <img className='h-[100px] ' src={Plus} alt="" />
        <h3 className='text-2xl pt-5'>Add New Item</h3>
      </div>
    </div>
  )
}

export default products
