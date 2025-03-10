import React from 'react'

function AnalyticsCard({image, head, amount}) {
    return (
      <div className='flex justify-between items-center p-5 h-[150px] w-[400px] bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.2)] rounded-3xl m-7'>
        <img className="h-[100px]" src={image} alt="" />
        <div>
          <h2 className='text-3xl'>{head}</h2>
          <p className='text-xl p-2'>৳{amount}</p>
        </div>
      </div>
    )
  }

export default AnalyticsCard
