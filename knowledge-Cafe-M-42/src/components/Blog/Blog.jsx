import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleBookMarks,handleReadingTime}) => {

   const {id,title,cover,author,reading_time} = blog ;



    return (
        <div  style={{margin:'10px' , border:'2px solid black',
            borderRadius:'10px'
        }}  >
            
      <img  className=" p-5 mt-5" src={cover} alt="" />
     <h1 className="text-2xl font-bold pt-5 pl-10"> Book Name : {title} </h1>

     {/*  */}

     <div className="flex justify-between">
    
    <div>
     
      <h3 className="text-xl font-semibold pl-10 pt-10">Author: {author} </h3>

    </div>

     <h3 className="text-xl font-semibold pt-10 ">Reading Time : {reading_time} </h3>

     <button 
      
      onClick={()=>handleBookMarks(blog)}
      
     className="pt-10 text-red-600"> <FaBookmark /> </button>
     </div>
      
       <button  
       
       onClick={()=>handleReadingTime(id,reading_time)}
       
       className="text-xl text-blue-800  border-2 solid border-black ml-4 mt-4 mb-4 p-10  font-extrabold bg-pink-200">Mark As Read</button>

        </div>
    );
};

export default Blog;