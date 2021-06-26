
import './App.css';
import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';


class App extends React.Component {
  
   App() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
        <button onClick={this.nextPokemon}>NEXT</button>
      </div>
    );
  }
}



export default App;