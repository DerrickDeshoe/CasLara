import React from 'react';


interface Card2 {

    heading: string 
    description: string
}

const Card2 = (props:Card2) => {
  return (
    <div className=' bg-darkGray p-3 rounded-xl flex flex-col items-center w-[100%] lg:w-[32%] space-y-3'>
      <h4 className='font-bold text-2xl'>{props.heading}</h4>
      <p className='text-center w-[90%]'>{props.description}</p>
    </div>
  )
}

export default Card2
