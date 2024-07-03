import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './BootlesStyle.css'

const Bottles = () => {

   const [bottles,setbottles] = useState([])

   useEffect(
    ()=>{

        fetch('data.json')
        .then(res => res.json())
        .then( data => setbottles(data))
       }   ,
 []
   )


   // add cart state
   const [addcart,setaddcart] = useState([])

    // add bottles into cart

    const handleaddbottle = bottle => {

        console.log(bottle);
        
        const newAddcart = [...addcart,bottle];

        setaddcart(newAddcart);
    }



    return (
        <div>
            

         {/* <h3>Bootles here : { bottles.length }</h3> */}
          <h1>Total Bootle : {bottles.length} </h1>
         <h1>Added : {addcart.length} </h1>

       <div className="bottle-container">

         {

            bottles.map(bottle => <Bottle
             
                key={bottle.id}

                bottle={bottle}

                // tranfaring add cart function to bottle componment

                handleaddbottle={handleaddbottle}
             
            ></Bottle>  )
        }

       </div>

        </div>
    );
};

export default Bottles;