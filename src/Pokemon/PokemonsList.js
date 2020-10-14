import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { listPokemons } from "./listPokemons";
import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonsList = () => {
  const {
    pokemons,
    capture,
    addPokemons,
    favPokemons,
    capturedPokemons,
  } = useContext(PokemonContext);
  console.log("Pokemons :" + pokemons.length);
  console.log("favPokemons :" + favPokemons.length);
  console.log("capturedPokemons :" + capturedPokemons.length);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios(url);
      //const data = await response.json();
      addPokemons(response.data.results);
    };

    fetchPokemons();
  }, []);
  const [show, setShow] = useState(false);
  const [detailList, setDetailList] = useState(null);
  const showDescription = (url) => {
    console.log(url);
    const pokemonDetailsAPI = async () => {
      const response = await axios(url);
      console.log(response.data);
      setDetailList(response.data);
      setShow(true);
      console.log(show);
      //showPokemonDetails(response.data);
    };
    pokemonDetailsAPI();
  };

  return show ? (
    <div className="pokemon-detail">

      <h2>Pokemon Detail List</h2>

      <table>
        <tr>
          <th>Ability Name</th>
          <th>Height</th>
          <th>Weight</th>
        </tr>
        <tr key={detailList.weight}>
        <td>           
            <span>{detailList.abilities[0].ability.name}</span>        
          </td>
          <td>           
            <span>{detailList.weight}</span>        
          </td>
          <td>           
            <span>{detailList.height}</span>        
          </td>

        </tr>
        <br></br>
<button onClick={() => setShow(false)}> Return The List </button>


      </table>
    </div>
  ) : (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>

      <table>
        <tr>
          <th>Pokemon</th>

          
        </tr>
        
        {listPokemons({
          pokemons,
          onClick: capture,
          buttonLabel: "+",
          showDescription,
        })}
      </table>
    </div>
  );
};

export default PokemonsList;
