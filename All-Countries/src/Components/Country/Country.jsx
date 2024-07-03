import { useState } from "react";
import './c.css'

const Country = ({country,handleshowvisit,handleflags}) => {

    const {name,flags,area,capital,cca3} = country;

    const [visited, setvisited] = useState(false)

    const handleVisit = () => {

        setvisited(!visited)
    }
 
      //style
  const teamStyle= {
    border: '2px solid red',
    borderRadius: '10px',
    marginTop: '10px',
    paddingTop: '10px',
    padding:'20px'
   
  }

   
 

    return (
        <div  className={ visited ? 'visit' : 'no' } style={teamStyle  }>
            
            
             <img src={flags?.png} alt="" />
             <h3>Name: {name?.common} </h3>
             <h3>Area: {area} </h3>
             <h3>Capital: {capital} </h3>
             <h3>Code: {cca3} </h3>
             
            <button onClick={ ()=> handleshowvisit(country) }>Add to List</button>


            <button onClick={ ()=> handleflags(country.flags.png) }>Add to List</button>

             <button
              
             style={{backgroundColor:'white', color:'black'}}
             
             
             onClick={handleVisit}


             > {visited ? 'Visited' : 'Ready To Visit'}</button>

             {/* Ternary conditins */}
             {visited ? 'I have visited' : 'Yet Not Visited'}
        
        
        </div>
    );
};

export default Country;