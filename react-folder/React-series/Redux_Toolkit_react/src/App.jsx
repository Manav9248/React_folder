import { React, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice';

function App() {

  const [amount,setAmount] = useState(''); // state hook

  const count = useSelector((state)=> state.counter.value); // when user want to select value from store

  const dispatch = useDispatch();// when user send the action or value to the store from components


  function handleIncrementClick(){ // Increment count
    dispatch(increment());
  }

  function handleDecrementClick(){ // Decrement count
    dispatch(decrement());
  }

  function handleResetClick(){  // reset count
    dispatch(reset());
  }

  function handleIncrementAmount(){
   dispatch(incrementByAmount(amount));
  }
 

  return (
    <>
   <div className='mt-[10rem]  h-[500px] flex flex-col items-center'>

    <button className='text-5xl bg-gray-500 h-[3rem] w-[3rem] mb-5 hover:border-2 border-blue-500'
     onClick={handleIncrementClick}>+</button>

    <p className='text-4xl font-semibold mb-4'>
    Count : {count}</p>

    <button className='text-5xl  bg-gray-500 h-[3rem] w-[3rem]'
     onClick={handleDecrementClick}>-</button>

    <button className='text-4xl mt-[3rem] font-semibold'
     onClick={handleResetClick}>Reset Count</button>
      
      <br /> <br />

    <input type="Number" className='text-black bg-slate-500'
    value={amount} 
    placeholder='Enter the amount'
    onChange={(e)=>setAmount(e.target.value)}/>
  
  <br /> <br />

  
  <button className='text-4xl mt-[3rem] font-semibold'
     onClick={handleIncrementAmount}>Increment Amount</button>

   </div>
    </>
  )
}

export default App
