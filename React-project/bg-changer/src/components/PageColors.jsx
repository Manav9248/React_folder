import React, { useState } from 'react'
import RedComponents from './RedComponents'

const PageColors = () => {

const [color,setColor] = useState("")   

  return (
   <>
   <div className='h-[100vh] w-[100vw] flex justify-center items-end 'style = {{backgroundColor:color}} >
    
    <div className='h-[75px] w-[1000px] border-2 border-white mb-[7rem] rounded-2xl bg-white   '> 
    <RedComponents color={color} setColor={setColor}/>
    </div>

   </div>
   </>
  )
}

export default PageColors