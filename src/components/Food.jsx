import React, { useState } from 'react';
import {data} from '../data/data.js'

const Food = () => {
  console.log(data);
  const [foods, setFoods] = useState(data);
  // Filter type burger/pizza/etc
  const filterType =(category)=>{
    setFoods(
      data.filter((item)=>{
        return item.category===category
      })
    )
  }
  // Filter price
  const filterPrice = (price)=>{
    setFoods(
      data.filter((item)=>{
        return item.price === price
      })
    )
  }

  return (
    <div className=' max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-5xl font-bold text-orange-600 text-center'>Top Rated Menu Items</h1>
      {/* Filter Row */}
      <div className=' flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700 '>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
          <button onClick={()=> setFoods(data)} className='border-2 text-orange-600 hover:text-white hover:bg-orange-600 border-orange-600 py-2 px-3 mx-2 rounded-xl'>All</button>
          <button onClick={()=> filterType('burger')} className='border-2 text-orange-600 hover:text-white hover:bg-orange-600 border-orange-600 py-2 px-3 mx-2 rounded-xl'>Burger</button>
          <button onClick={()=> filterType('pizza')} className='border-2 text-orange-600 hover:text-white hover:bg-orange-600 border-orange-600 py-2 px-3 mx-2 rounded-xl'>Pizza</button>
          <button onClick={()=> filterType('salad')} className='border-2 text-orange-600 hover:text-white hover:bg-orange-600 border-orange-600 py-2 px-3 mx-2 rounded-xl'>Salads</button>
          <button onClick={()=> filterType('chicken')} className='border-2 text-orange-600 hover:text-white hover:bg-orange-600 border-orange-600 py-2 px-3 mx-2 rounded-xl'>Chicken</button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p font-bold text-gray-700>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
          <button onClick={()=> filterPrice('$')} className='border-2 text-orange-600 hover:text-white hover:bg-orange-600 border-orange-600 py-2 px-3 mx-2 rounded-xl'>$</button>
          <button onClick={()=> filterPrice('$$')} className='border-2 text-orange-600 hover:text-white hover:bg-orange-600 border-orange-600 py-2 px-3 mx-2 rounded-xl'>$$</button>
          <button onClick={()=> filterPrice('$$$')} className='border-2 text-orange-600 hover:text-white hover:bg-orange-600 border-orange-600 py-2 px-3 mx-2 rounded-xl'>$$$</button>
          <button onClick={()=> filterPrice('$$$$')} className='border-2 text-orange-600 hover:text-white hover:bg-orange-600 border-orange-600 py-2 px-3 mx-2 rounded-xl'>$$$$</button>
          </div>
        </div>
      </div>
      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
      {
        foods.map((item,index)=> (
            <div key={index} className='border rounded-lg shadow-lg hover:scale-105 duration-300 '>
              <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg  ' />
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                  <span className='bg-orange-500 text-white p-1 rounded-full '>{item.price}</span>
                </p>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Food