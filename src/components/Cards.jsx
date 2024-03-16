import React from 'react'

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 rounded-xl'>
      {/* cards */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute  w-full h-full bg-black/50 text-white'>
        <p className='font-bold text-2xl px-2 pt-4 ml-2 py-2 '>Sun's Out Bogo's Out</p>
        <p className='px-2 ml-2 py-2 mb-2'>Through 8/26</p>
        <button className='border-white border-2 rounded-xl py-2 px-3 ml-2 bg-white text-black absolute bottom-4'>Order Now</button>
        </div>
        <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" alt="buger1" className='max-h-[160px] md:max-h-[200px] rounded-xl object-cover w-full ' />
      </div>
      {/* cards */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute  w-full h-full bg-black/50 text-white'>
        <p className='font-bold text-2xl px-2 pt-4 ml-2 py-2 '>New Resturants on the go</p>
        <p className='px-2 ml-2 py-2 mb-2'>Added daily</p>
        <button className='border-white border-2 rounded-xl py-2 px-3 ml-2 bg-white text-black absolute bottom-4'>Order Now</button>
        </div>
        <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" alt="buger1" className='max-h-[160px] md:max-h-[200px] rounded-xl object-cover w-full ' />
      </div>
      {/* cards */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute  w-full h-full bg-black/50 text-white'>
        <p className='font-bold text-2xl px-2 pt-4 ml-2 py-2 '>Visit the hotel and enjoy meal</p>
        <p className='px-2 ml-2 py-2 mb-2'>Eat Meals</p>
        <button className='border-white border-2 rounded-xl py-2 px-3 ml-2 bg-white text-black absolute bottom-4'>Order Now</button>
        </div>
        <img src="https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" alt="buger1" className='max-h-[160px] md:max-h-[200px] rounded-xl object-cover w-full ' />
      </div>
    </div>
  )
}

export default Cards