import React, { createContext } from 'react';
import { usePokemonReducer } from '../redux/reducers';
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS, ADD_FAV_POKES, RETURN_CAPTURE_POKES, POKEMON_DETAILS } from '../redux/actionTypes';


const PokemonContext = createContext(); //sending

const PokemonProvider = (props) => {
  const [state, dispatch] = usePokemonReducer();
  const { pokemons, capturedPokemons, favPokemons  } = state;

  const capture = (pokemon) => () => dispatch({ type: CAPTURE, pokemon });
  const release = (pokemon) => () => dispatch({ type: RELEASE, pokemon });
  const addPokemon = (pokemon) => dispatch({ type: ADD_POKEMON, pokemon });
  const addPokemons = (pokemons,pokemonDetails) => dispatch({ type: ADD_POKEMONS, pokemons });


  const addFavPokes = (pokemon) => dispatch({type: ADD_FAV_POKES, pokemon});
  const returnCapturePokes = (pokemon) => dispatch({type: RETURN_CAPTURE_POKES, pokemon});



  const providerValue = {
    pokemons,
    capturedPokemons,
    favPokemons,
    capture,
    release,
    addPokemon,
    addPokemons,
    addFavPokes,
    returnCapturePokes
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
};

export { PokemonContext, PokemonProvider };
