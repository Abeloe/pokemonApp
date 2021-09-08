import React from 'react'

const PokeCard = ({pokemon}) => {
    return (
        <div className="card text-center mx-auto" key={pokemon.id}>
        <div className="card-header"><b>{pokemon.name}</b></div>
        <div className="image">
            <img src={pokemon.sprites['front_default']} />
            <img src={pokemon.sprites['back_default']} />     
         </div> 
        <div className="card-body">          
            <h6 className="card-subtitle mb-2 text-muted pokemon-id" >{pokemon.id}</h6>  
            <h6 className="card-subtitle mb-2 text-muted pokemon-height">
                <p className="txt">Height:</p> 
                <p className="value">{pokemon.height}</p>
            </h6>  
            <h6 className="card-subtitle mb-2 text-muted pokemon-weight">
                <p className="txt">Weight:</p> 
                <p className="value">{pokemon.weight}</p>
            </h6> 
        </div>
        </div>
    )
};

export default PokeCard