import React from 'react'
import leftArrow from '../assets/left-arrow.svg'
import Trails from '../assets/flight-trails.svg'
import ratings from '../assets/ratings.svg'
import split from '../assets/split.svg'

const LeftHero = () => {
  return (
    <div className="max-w-xl text-white">

      <div className='ml-30'>
        <h1 className="text-6xl font-bold leading-tight">
        Travel Planning
        </h1>
        <h1 className="text-6xl font-bold leading-tight">
        Made <span className="text-yellow-400">Easy</span>
        </h1>

        <div className='w-108'>
          <p className="text-gray-400 mt-6 text-lg">We make it easy to plan and book your next trip with a Day by Day itinerary.
          </p>
        </div>

        <div className='bg-gray-800 p-5 w-70 font-bold mt-10 rounded-full flex justify-between'>
          <p className='ml-8'>Plan a Trip</p>
          <button className='bg-[#3B71FE] rounded-full w-10 h-10 -m-2'>
            <img src={leftArrow} className='ml-2.5'></img>
          </button>
        </div>

      </div>

      <div>
          <img src={Trails}></img>
      </div>

      <div className='ml-30 -mt-9'>
        <p>Our Customers Say</p>
        <div className='flex gap-2'>
          <div className='mt-4'>
            <h2 className='text-2xl'>Excellent</h2>
            <img src={ratings}></img>
          </div>

          <img className='mt-5 font-bold text-2xl' src={split}></img>

          <div className='mt-5'>
            <h2 className='text-[#3B71FE] text-xl font-bold'>4.7</h2>
            <p className='text-sm text-[#F4F5F6]'>Out of 5 on <span className='font-bold'>194</span> reviews</p>
          </div>

        </div>

      </div>


        
      

      
    </div>
  )
}

export default LeftHero