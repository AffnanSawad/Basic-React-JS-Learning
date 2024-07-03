import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './styled.css'



const Countries = () => {

    const [countries,setcountries] = useState([])

    // visited countries info
    const [showvisit,setshowvisit] = useState([])


    //visited country flags

    const [flags,setflags] = useState([])
      


    // visited countries info
    const handleshowvisit = country => {
        
        console.log('add to marklist')
       
        const finalvisitedaddcountry = [...showvisit , country]

        setshowvisit(finalvisitedaddcountry);

    }


    // visited countries flags

    const handleflags = flagy => {
         
        console.log('flag adding')
        const newflags = [...flags,flagy]

        setflags(newflags)
    }
    

    useEffect( 
        ()=>{
            fetch('https://restcountries.com/v3.1/all')
            .then(res=> res.json())
            .then(data=> setcountries(data))
        }
        ,[])




    return (

        
        <div >
             
          
     {/* <h1>  Name : {countries.length} </h1> */}

     {/* visited countries info */}

     <div>
        <h1>Name : {showvisit.length} </h1>
        <ul>
         {
            showvisit.map(country => <li key={country.cca3}> {country.name.common}  </li>  )
         }
        </ul>
     </div>

     <div style={ {width:'50%', margin:'20px',padding:'30px'}}>
      
      {
        flags.map(flagy=> <img key={flagy.id} src={flagy} ></img>)
      }

     </div>
       
   <div className="displaying">
  
   {/* map */}
   {
        countries.map(country =><Country
        key={country.id}
         country={country}

         //props patacci
         handleshowvisit={handleshowvisit}
         
         //flags prop
         handleflags={handleflags}
 
        ></Country> )
     }

   </div>
          

        </div>
    );
};

export default Countries;