export default function Comment({comment}){
     
    const {name,email,body} = comment ;
       
    
    //style
  const commentStyle= {
    border: '2px solid red',
    borderRadius: '10px',
    marginTop: '10px',
    paddingTop: '10px'
   
  }

    return(

        <div style={{border:'2px solid red' ,margin: '15px',borderRadius:'20px'}}>


            <h1> Name: {name} </h1>
            <h1> EMAIL: {email}</h1>
            <p> # {body} </p>
        </div>
    )
}