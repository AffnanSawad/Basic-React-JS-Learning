import './bottle.css'

const Bottle = ({bottle,handleaddbottle}) => {

  const {name,image_url,price_usd,material} = bottle;

  

    return (
        <div className="bottlestyle">
            <img src={image_url} alt="" />
            <h3>Name : {name} </h3>
            <h3>Price : {price_usd} </h3>
            <h3>Material: {material} </h3>

            {/* purchase button */}

            <button 
        
        onClick={()=>handleaddbottle(bottle)}
            
            style={{border:'2px solid black',backgroundColor:'pink'}}
            
            >Purchase</button>
        </div>
    );
};

export default Bottle;