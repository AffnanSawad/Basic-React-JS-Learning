import { Link } from 'react-router-dom';
import './post.css'

const Post = ({post}) => {

 const {id, title} = post

    return (
        <div className="box">
            <h1> NAME : {id} </h1>
            <h1> TITLE : {title} </h1>


            <Link to={`/post/${id}`} >
            
            <button className='btn '>SHOW DETAILS</button>
            
            </Link>
        </div>
    );
};

export default Post;