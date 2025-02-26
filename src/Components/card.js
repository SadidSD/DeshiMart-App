import React from 'react'

function Card({ name, image }) {
  return (
    <div className="rounded-3xl shadow-[10px_10px_15px_rgba(0,0,0,0.2)] w-[300px]
     items-center justify-center flex flex-col p-2 bg-[#c5b4a2] 
     hover:shadow-[10px_10px_15px_rgba(0,0,0,0.4)] transition duration-300 ease-in-out hover:scale-110
     hover:cursor-pointer">
      <img src={image} alt="icon" className="h-[200px] w-auto " />
      <div className="">
        <h1 className="text-3xl font-bold font-mono">{name}</h1>
      </div>
    </div>
  )
}

export default Card
