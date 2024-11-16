import { useRef, useState } from 'react'
import './App.css'


function App() {

  const [time,setTime] = useState(0);  // useState hook

  let timerRef = useRef(null);  // useRef hook

  function startTimer(){
   timerRef.current = setInterval(() => {
      setTime(time => time+1)
    }, 1000);
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }


//   const [count,setCount] = useState(0);

//   let btnRef = useRef(); // useRef using here

// function handleIncrement(){ // function for increment count
//   setCount(count+1);
// }


//   function changeColor(){ // function for changing bg color
//     btnRef.current.style.backgroundColor = "red";
//   }


  return (
    <>

    <div>
    
    <h1>StopWatch: {time} seconds</h1>
    
    <button onClick={startTimer}
    >Start</button>
      <br /> <br />

      <button onClick={stopTimer}
      >Stop</button>
      <br /> <br />

      <button onClick={resetTimer}
      >Reset</button>

    </div>
    
    
    </>
    
//      <div> 

//  {/* increment button */}
//  <div>

// <button ref = {btnRef}
//  onClick={handleIncrement}>
//   Increment
// </button>

// {/* displaying count */}
// <div>
//   <p>Count: {count}</p>
// </div>

// </div>

//   {/* changing backGround color */}
// <div>

// <button onClick={changeColor}
//  >Changing color of 1st btn</button>

// </div>

//     </div> 
    
  
     
  )
}

export default App
