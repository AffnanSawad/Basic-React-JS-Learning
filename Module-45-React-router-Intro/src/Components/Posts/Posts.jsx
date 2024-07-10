import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './posts.css'

const Posts = () => {

 const posts = useLoaderData();

    return (
        <div>
            <h1>HERE ARE THE POSTS : {posts.length} </h1>
          
          <div className="posts-container">

         {
            posts.map( post =><Post
            
             key={post.id}

             post={post}
             
            ></Post>  )
         }
     

          </div>



        </div>
    );
};

export default Posts;