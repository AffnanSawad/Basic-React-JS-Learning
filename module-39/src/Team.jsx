import { useState } from "react"

export default function Team(){

 const [teamMember , setTeamMember] = useState(11);
   
  const adding = () => {

    setTeamMember(teamMember + 1 );
  }


  const reducing = () => {

    setTeamMember(teamMember - 1 );
  }
    
  //style
  const teamStyle= {
    border: '2px solid red',
    borderRadius: '10px',
    marginTop: '10px',
    paddingTop: '10px'
   
  }


    return (

        <div style={teamStyle}>
            
            <h1>Team Member : {teamMember}  </h1>

            <button onClick={adding}>Add</button>
            
            <button onClick={reducing}>Reduce</button>

            
        </div>
    )
}