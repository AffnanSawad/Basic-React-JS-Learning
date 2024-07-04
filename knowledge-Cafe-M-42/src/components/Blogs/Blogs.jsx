import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookMarks,handleReadingTime}) => {

 
    const [blogs , setblogs] = useState([]);





    useEffect(     
         
        ()=> {

            fetch('data.json')
            .then(res=>res.json())
            .then(data=>setblogs(data))
        }
         
        ,[])
  

    return (
        <div   
        
        className="w-2/3 ">
     
     <h1 className="text-3xl font-extrabold text-blue-900">Coolection Of Books : {blogs.length} </h1>
     {
        blogs.map( blog => <Blog
        
          key={blog.id}


        blog={blog}

        handleBookMarks={handleBookMarks}


        handleReadingTime={handleReadingTime}


        ></Blog>  )
     }




        </div>
    );
};

export default Blogs;