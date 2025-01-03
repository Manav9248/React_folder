import React, { useState } from "react";

function App() {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(!animate);
  };

  return (
    <>
      <div
        className={`h-[100vh] w-full flex flex-col items-center justify-center ${
          !animate ? "bg-orange-300" : "bg-gray-400"
        }`}
      > 
      <h1 className={`font-bold ml-[5rem] text-4xl mb-[1rem] ${animate?'hidden':''}`}>Uth Jao Guys Subha Ho Gai 🌄😅</h1>
       
      <h1 className={`font-bold text-4xl mb-[1rem] ${!animate?'hidden':''}`}>Soo Jao Guys Raat Ho Gai🥱😴😅</h1>

       
        <img
          src="/moon2.jpg"
          alt="night pic"
          className={`h-[20rem] w-[29em] mt-5 mb-[5rem] ${!animate ? "hidden " : ""}`}
        />

        <img
          src="/sun.jpeg"
          alt="morning pic"
          className={`h-[20rem] w-[25rem] mt-5 mb-[5rem] ${animate ? "hidden" : ""}`}
        />

        <div className="border-2 border-black h-16 w-36 rounded-full flex items-center">
          <div
            className={`border-2 h-[3.5rem] w-[3.5rem] rounded-full bg-orange-600 ${
              animate
                ? "transform translate-x-20 duration-200 bg-gray-400"
                : " tranform duration-200"
            }`}
            onClick={handleClick}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
