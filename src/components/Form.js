import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Form = ({data}) => {
    const [filter, setFilter] = useState([]);

   const filterCharacter = data.filter( (character) => {
    return character.name.toLowerCase().indexOf(filter) !== -1;
   });

    return(
    <div>
        <input onChange={ e => setFilter(e.currentTarget.value)} className="center justify-content-center input mt-5" type="text" placeholder="BUSCAR"/>
     <div className="container">
     <div className="my-5">
                 <h2 className="color-white center">RESULTADOS</h2>
            </div>
            <div className="row">
            
   {filterCharacter.map( ele => (

    <div key={ele.name} className="col-4 cards my-2" style={{ marginBottom: "2rem"}} >
               <div className="recipes__box">
                    
             <div className="">
                <h5 className="color-white hero-title my-2 text-center mt-4">
                { ele.name }
                </h5>
                <button className="color-white btn-volver link text-center ">
                    <Link className="color-white btn-volver link text-center btn-detalle" to="/descripción">Ver detaller</Link>    
                </button>
             </div>    
            </div>
         </div>
         ))}
        </div>
        </div>
    </div>
  );
};
  export default Form; 