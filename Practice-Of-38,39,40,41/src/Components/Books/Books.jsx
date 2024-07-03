import { useEffect, useState } from "react";
import Book from "../Book/Book";
import './container.css'

const Books = () => {

 
    const [books,setbooks] = useState([])

    //set state for add to cart
    const [addcart , setaddcart] = useState([])

    //addcarthandle

    const handleaddcart = addbooks => {

        console.log('added')

        const newcart = [...addcart,addbooks]

        setaddcart(newcart);
    }

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
        <div>
             <h1>Six Different Kinds of Books : {books.length} </h1>

              <h4>My Cart : {addcart.length} </h4>
      <div className="books-container">

    {
      books.map(book =><Book
       
        key={book.id}
         
        book={book}

        handleaddcart={handleaddcart}


      ></Book>)
    }

      </div>
        </div>
    );
};

export default Books;