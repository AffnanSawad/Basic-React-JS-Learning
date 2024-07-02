import { useEffect, useState } from "react"
import Comment from "./Comment"

export default function Comments(){

    const [comments,setcomments] = useState([])

    useEffect(  ()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setcomments(data))

    }  ,


    []


    )


 

    return(
        <div style={{border:'2px solid green', margin:'10px'}}>

            {/* <h1> Name : {comments.length} </h1> */}

            {/* user data mapping */}

            {
                comments.map( comment => <Comment
                
                comment={comment}

                key={comment.id}
                
                ></Comment> )
            }


        </div>
    )
}