import React from 'react';
import { Link } from "react-router-dom";

const InforCharacter = ({data}) => {
   
    return (
      <div className="container">
        <div className="row">
            {data.map( (data) => {
            return( 
                <div key={data.url} className="col-md-12 color-white my-5">
                        <h1 className="hero-title App-title">{data.name }</h1>

                 <div className="body-character col-md-4">
                        <p className="text-character mt-2">
                        Peso: {''} 
                         {data.mass}kg
                        </p>
                        <p className="active-recipe__website">
                        Año: 
                          {data.birth_year}
                        </p>
                        <p className="active-recipe__website">
                        Género: 
                         {data.gender}
                        </p>
                        
                </div>
                </div>
                );
        })}  
        <button className="my-5 btn-volver link ml-5" >
                        <Link className="color-white btn-volver link" to="/">Volver</Link>
                        </button>
         </div>
      </div>
    );
  }


export default InforCharacter;