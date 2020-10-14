import React from 'react';



export const listPokemons = ({ pokemons, onClick, buttonLabel, showDescription }) =>


  pokemons.map((pokemon) => (

    <tr key={pokemon.name}>     
    <td><span>{pokemon.name}</span></td>
    <td><button  onClick={onClick(pokemon)}>Capture Pokemon</button></td>
    <td><button className="ui button"  onClick={() => showDescription(pokemon.url)}>Show Descrition </button></td>
    


  </tr>

  ));
