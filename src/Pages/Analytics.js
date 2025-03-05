import React from 'react'

function Analytics({Investment, Return,Profit}) {
  return (
    <div className='flex flex-col h-screen bg-[#efe5db]'>
      <h1 className='text-3xl font-bold self-center p-10'>Analytics</h1>
      <div className='flex flex-col gap-5 pl-10 text-3xl'>
      <p>Total Invested Amount:{Investment}</p>
      <p>Total return:{Return}</p>
      <p>Profit:{Profit}</p>
      </div>
    </div>
  )
}

export default Analytics
