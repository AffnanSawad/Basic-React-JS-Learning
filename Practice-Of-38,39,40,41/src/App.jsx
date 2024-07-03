
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Books from './Components/Books/Books'

function App() {

    
  const [books,setbooks] = useState([])

  useEffect(    
     ()=> {

       fetch('data.json')
      .then(res=> res.json())
      .then(data => setbooks(data))


     }
    ,

    []
  )



  return (
    <>
      
     <Books></Books>
      
    </>
  )
}

export default App
