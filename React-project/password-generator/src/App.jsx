import { useState,React,useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character,setCharacter] = useState(false);

  const [password,setPassword] = useState("");

  const [buttonClicked,setButtonClicked] = useState(false);

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{ //using useCallback
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    
    if(number) str += "0123456789";
    
    if(character) str += "!@#$%^&*()_+~[]-";

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1); // it will give you index value 

      pass += str.charAt(char);
    }
    setPassword(pass)
    

  },[length,number,character,setPassword]) 


  const copyPasswordToClipboard = useCallback(()=>{  // using useCallback
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

    setButtonClicked(true); // Set buttonClicked to true
    setTimeout(() => setButtonClicked(false), 1500); // Reset after 1.5 second
  },[password])

  

  useEffect(()=>{ //useEffect
    passwordGenerator()
  },[length,number,character,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>

      <h1 className='text-white text-center text-3xl font-semibold my-2'>Password Generator</h1>
     
      <div className='flex'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Enter Password' 
        readOnly 
        ref={passwordRef}
        />

        <button className={`outline-none bg-blue-700 text-white
        px-3 py-0.5 shrink-0 
     ${buttonClicked ? 'bg-green-700':'bg-blue-700'}`}
        onClick={copyPasswordToClipboard} 
        >Copy</button>
      </div>

    <div className='flex text-sm gap-x-2'> 
         <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={15}
          value={length}
          className='cursor-pointer' 
          onChange={(e)=>{setLength(e.target.value)}}
          />

        <label>Lenght: {length}</label>

         </div>


         <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked = {number}
        id='numberInput'
        onChange={()=>{
          setNumber((prev)=>!prev);
        }} />

        <label htmlFor="numberInput">Numbers</label>

         </div>

         <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked = {character}
        id='characterInput'
        onChange={()=>{
          setCharacter((prev)=>!prev); // usefull tool for true and false
        }} />

        <label htmlFor="characterInput">Characters</label>

         </div>



     </div>
    </div>
    </>
  )
}

export default App
