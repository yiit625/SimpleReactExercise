import React , { useState,useContext } from "react";

import { PokemonProvider } from "./Pokemon/PokemonContext";
import PokemonsList from "./Pokemon/PokemonsList";
import Pokedex from "./Pokemon/Pokedex";
import PokemonForm from "./Pokemon/PokemonForm";
import FavList from "./Pokemon/FavList";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./ThemaSelection/theme";
import { GlobalStyles } from "./ThemaSelection/global";



function App () {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    console.log("theme" + theme);
    if (theme === 'light') {

      setTheme('dark');
      console.log(theme);
    } else {

      setTheme('light');
    }
  }
  return(
  <section>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <PokemonProvider>
    <GlobalStyles />
    <button onClick={toggleTheme}>Toggle theme</button>
      <img alt="Logo" style={center} src={"/poko.png"} />
      
      <br></br>
      <div className="main">
        <PokemonsList />
        <Pokedex />
        <FavList />
 
      </div>
      <div className="form-wrapper">{/*       <PokemonForm /> */}</div>
    </PokemonProvider>
    </ThemeProvider>
  </section>

);
}

var center = {
  textAlign: "center",
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  width: "1000",
  height: "500",
};

export default App;
