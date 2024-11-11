import React, { useState } from 'react'

const RedComponents = ({setColor}) => {


  return (
    <>
    <div className='text-black h-[70px] flex items-center justify-between  pr-3 pl-3'>
        
        <div className=' h-[45px] w-[90px] text-white
         text-center font-bold text-3xl rounded-xl bg-red-600'
         onClick={()=> setColor('red')}
          >Red
        </div>

        <div className=' h-[45px] w-[90px] text-white
         text-center font-bold text-3xl rounded-xl bg-pink-600'
         onClick={()=> setColor('pink')}
         > Pink
        </div>

        <div className=' h-[45px] w-[90px] text-white
         text-center font-bold text-3xl rounded-xl bg-gray-700'
     onClick={()=> setColor('gray')} > Gray
        </div>

        <div className=' h-[45px] w-[90px] text-white
         text-center font-bold text-3xl rounded-xl bg-black'
     onClick={()=> setColor('black')} > Black
        </div>

        <div className=' h-[45px] w-[90px] text-white
         text-center font-bold text-3xl rounded-xl bg-blue-700'
     onClick={()=> setColor('blue')} > Blue
        </div>

        <div className=' h-[45px] w-[90px] text-white
         text-center font-bold text-3xl rounded-xl bg-green-700'
     onClick={()=> setColor('green')} > Green
        </div>

        <div className=' h-[45px] w-[90px] text-white
         text-center font-bold text-3xl rounded-xl bg-yellow-700'
     onClick={()=> setColor('olive')} > Olive
        </div>

        </div>
    </>
  )
}

export default RedComponents