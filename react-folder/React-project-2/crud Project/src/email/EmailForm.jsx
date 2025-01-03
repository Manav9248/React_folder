import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Home from '../components/Home'
import Create from '../components/Create'


const EmailForm = () => {


  return (

    <>

<div className=' flex flex-col items-center h-full w-full '>

    <div className=' rounded-sm
     mt-5 h-[25rem] w-[900px] border-2  '>

    <h2 className='font-medium text-3xl m-5'>Simple Crud With Redux</h2>


  <div className='m-5'>

    <Link to='/create' className='inline-block border-none text-white text-center rounded-md
    font-medium text-xl bg-blue-600 w-[6rem] h-[2.5rem] pt-[0.4rem]
    hover:bg-blue-800' >Create +</Link>

<Home/>

</div>

    </div>
    </div>
    </>
  
)
}

export default EmailForm