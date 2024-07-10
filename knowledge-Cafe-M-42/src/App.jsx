import { useState } from "react"
import AddBookMarks from "./components/AddBookMarks/AddBookMarks"
import Blogs from "./components/Blogs/Blogs"
import Header from "./components/header/Header"


function App() {

  const [addbookmarks,setbookmarks] = useState([]);
  

  //time
  const [readingTime,setReadingTime] = useState(0);


  

   const handleBookMarks = blog => {

    // console.log('added')

    const newaddbokmarks = [...addbookmarks,blog]

    setbookmarks(newaddbokmarks)

   }


   //add reading time

   const handleReadingTime = (id,time) => {

    // console.log('added time',time);

   const newReadingTime = readingTime + time 

   setReadingTime(newReadingTime);

   //remaining books

   const remainingBooks = addbookmarks.filter(addbookmark => addbookmark.id !== id)

   setbookmarks(remainingBooks)


   }
 

  return (
    <>
      
      
      <Header></Header>
      

      <div className="md:flex max-w-7xl mx-auto">

      <Blogs  
      
      handleBookMarks={handleBookMarks} 
      
      handleReadingTime={handleReadingTime}
      
      ></Blogs>

      <AddBookMarks  
      
      
      addbookmarks={addbookmarks}  
      
      readingTime={readingTime}
      
      ></AddBookMarks>

      </div>
      
    </>
  )
}
// EXPORTING
export default App
