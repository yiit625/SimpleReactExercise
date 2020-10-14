import { useReducer } from 'react';
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS, ADD_FAV_POKES, RETURN_CAPTURE_POKES, POKEMON_DETAILS } from './actionTypes';


const addPokemon = (pokemon, state) => ({
  pokemons: [...state.pokemons, pokemon],
  capturedPokemons: state.capturedPokemons
});

const addPokemons = (pokemons, state) => ({
  pokemons: pokemons,
  capturedPokemons: state.capturedPokemons,
  favPokemons: state.favPokemons
});


// RELEASE POKEMONS
const getCapturedPokemons = (capturedPokemons, releasedPokemon) =>
  capturedPokemons.filter(pokemon => pokemon !== releasedPokemon)

const releasePokemon = (releasedPokemon, state) => ({
  pokemons: [...state.pokemons, releasedPokemon],
  capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasedPokemon),
  favPokemons : state.favPokemons
});

// CAPTURE POKEMONS
const getPokemonsList = (pokemons, capturedPokemon) =>
  pokemons.filter(pokemon => pokemon !== capturedPokemon)

const capturePokemon = (pokemon, state) => ({
  pokemons: getPokemonsList(state.pokemons, pokemon),
  capturedPokemons: [...state.capturedPokemons, pokemon],
  favPokemons : state.favPokemons
});



      // FAV POKEMONS
    const getFavPokemons = (capturedPokemons, favPokemon) =>
    capturedPokemons.filter(pokemon => pokemon !== favPokemon)

    const addFavPokes = (pokemon, state) => ({
      pokemons: state.pokemons,
      capturedPokemons: getFavPokemons(state.capturedPokemons, pokemon),
      favPokemons: [...state.favPokemons, pokemon]
      
    });

      // Release Pokes
     const getCapturedList = (favPokemons, capturedPokemon) =>
     favPokemons.filter(pokemon => pokemon !== capturedPokemon) 

    const returnReleasePokes = (capturedPokemon, state) => ({
      capturedPokemons: [...state.capturedPokemons, capturedPokemon],
      favPokemons: getCapturedList(state.favPokemons, capturedPokemon),
      pokemons: state.pokemons,
    });



const pokemonReducer = (state, action) => {
  switch (action.type) {
    case CAPTURE:
      return capturePokemon(action.pokemon, state);
    case RELEASE:
      return releasePokemon(action.pokemon, state);
    case ADD_POKEMON:
      return addPokemon(action.pokemon, state);
    case ADD_POKEMONS:
      return addPokemons(action.pokemons, state);
    case ADD_FAV_POKES:
      return addFavPokes(action.pokemon, state);
      case RETURN_CAPTURE_POKES:
        return returnReleasePokes(action.pokemon, state);
      
    default:
      return state;
  }
};

export const usePokemonReducer = () =>
  useReducer(pokemonReducer, {
    pokemons: [],
    capturedPokemons: [],
    favPokemons: []
  });
