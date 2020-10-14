import React from 'react';


export const listPokedex = ({ pokemons, onClick, buttonLabel }) =>
  pokemons.map((pokemon) => (

    <tr key={pokemon.name}>
    <td><span>{pokemon.name}</span></td>
    <td><button  onClick={onClick(pokemon)}>{buttonLabel}</button></td>
{/*     <td><button  onClick2={onClick2(pokemon)}>{buttonLabel2}</button></td> */}

  </tr>

  ));