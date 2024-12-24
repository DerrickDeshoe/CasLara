"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Tap from '../../public/images/tap.svg'
import Delete from '../../public/images/delete.svg'

const Stock = () => {

    const [count, setCount] = useState(1);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
      };
    
      const decrement = () => {
        if (count > 0) {
          // Prevent count from going below 0
          setCount((prevCount) => prevCount - 1);
        }
    }


  return (
    <div className='flex flex-col-reverse px-5 lg:px-16 lg:flex-row lg:justify-center lg:items-center gap-5 mb-10'>
      <div className='lg:w-1/2 space-y-5'>
        <h1 className='font-semibold text-4xl md:text-5xl'>24 <span className='text-red'>In Stock</span></h1>
        <div className='flex gap-3 h-[5vh] md:h-[4vh] lg:h-[6vh] xl:h-[5vh]'>
        <div className="bg-grey py-[1px] rounded-2xl justify-evenly items-center  flex space-x-2 w-[75%] md:w-[45%] lg:w-[50%] xl:w-[40%]">
              <button className="font-extrabold text-4xl" onClick={decrement}>
                -
              </button>
              <p className='font-semibold text-4xl'>{count}</p>
              <button className="font-extrabold text-2xl" onClick={increment}>
                +
              </button>
            </div>
            <Image src={Delete} alt="" />
        </div>
      </div>
      <div className='lg:w-1/2'>
        <Image src={Tap} alt="" />a
      </div>
    </div>
  )
}

export default Stock;