 import { useState, useEffect } from 'react'
import './App.css'

//https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new


function App() {

  const [number, setNumber] = useState(0)

  console.log('hola mundo')
  
  useEffect(() => {
    
    fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new')
      .then(resp => resp.json())
      .then(data => {
        setNumber(data)
      })
    
  }, [])

  return (
    <>
      <h1>Random Number Generator</h1>
      <h3>Random number: {number}</h3>

     
    </>
  )
}

export default App
