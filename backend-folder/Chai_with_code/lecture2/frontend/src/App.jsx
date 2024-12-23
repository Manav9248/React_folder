import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]); //useState hook

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })

    .catch((error)=>{
      console.log(error);
    })

  })

  return (
    <>
    <h1>Full Stack application</h1>
    <p>JOKES : {jokes.length}</p>

    {
      jokes.map((joke, indx)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
       ) )
    }
    </>
  )
}

export default App
