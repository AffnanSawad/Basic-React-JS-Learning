export default function User({user}){

    const {name , email} = user;

    return(

        <div style={{border:'2px solid pink',margin:'10px'}}>
            <h1>Name: {name}   </h1>

            <h2>Email: {email}  </h2>
        </div>
    )
}