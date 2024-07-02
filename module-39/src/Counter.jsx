import { useState } from "react"


// FILE WHICH WILL EXPORT TO APP.JSX . & SHOW WILL ON UI.
export default function Counter(){

    const [count , setCount] =useState(0);
    

    // ADD FUNCTION
    const add =()=> {
        const newadd = count + 1 ;

        setCount(newadd)
    }


    // Reduce function

    const reduce = ()=> {
        const newReduce = count - 1 ;

        setCount(newReduce);
    }


    //  RETURN ER VITOR JA KORBO TA UI TE SHOW KORBE.

    return(

        <div style={{border: '2px solid black'}}>
           
           
            <h1>Counter : {count}     </h1>

            <button onClick={add}>Add</button> 

            <button onClick={reduce}>Reduce</button>


        </div>
    )
}