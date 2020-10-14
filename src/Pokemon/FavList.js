 import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';


const FavList = () => {
    const { favPokemons, returnCapturePokes  } = useContext(PokemonContext);

  console.log(favPokemons);

    return (
      <div className="favourite">
        <h2>Favourite Pokemons</h2>
  
        <table>
          <tr>
            <th>Pokemon</th>

          </tr>
          {favPokemons.map(
          pokemon => 
        <tr key={pokemon.name}>
          <td>
            
            <span>{pokemon.name}</span>
        
          </td>
          <td>
            <button onClick={() => returnCapturePokes(pokemon)}>Remove</button>
          </td>


        </tr>
        ) }
      </table>
    </div>

    
    )
  }
  
  export default FavList;  