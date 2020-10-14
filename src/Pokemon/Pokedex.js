import React, { useContext } from "react";
import { PokemonContext } from "./PokemonContext";





const Pokedex = () => {
  const { capturedPokemons, release, addFavPokes } = useContext(PokemonContext);


  return (
    <div className="pokedex">
      <h2>Pokedex</h2>

      <table>
        <tr>
          <th>Pokemon</th>

        </tr>

        {capturedPokemons.map(
          pokemon => 
        <tr key={pokemon.name}>
          <td>
            
            <span>{pokemon.name}</span>
        
          </td>
          <td>
            <button onClick={release(pokemon)}>Release</button>
          </td>
          <td>
            <button onClick={() => addFavPokes(pokemon)}>Fav Pokemon</button>
          </td>

        </tr>
        ) }
      </table>
    </div>
  );
};

export default Pokedex;
