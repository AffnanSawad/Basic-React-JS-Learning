import './b.css'

const Book = ({book,handleaddcart}) => {

  const {title,author,pages,summary,ISBN} = book;



    return (

     

        <div className="box">
             <h3>Title: {title} </h3>
             <h3>Author: {author} </h3>
             <h4>Summary: {summary} </h4>
             <hr />

             <div className="flexing">

             <h3>Pages: {pages} </h3>
             <h3>Code: {ISBN} </h3>

             <br />

             <button 
             style={{backgroundColor:'pink',border:'2px solid black'}} 
             

             onClick={()=>handleaddcart(book)}
             
             
             >Add To Cart</button>

             </div>
        </div>
    );
};

export default Book;