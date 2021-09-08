import './App.css';
import React, { useEffect, useState } from 'react';
import { Component } from 'react';
import PokeCard from './components';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      pokemonDetails : [],
      offset: 0,
      loadNumber: 10
    }
    this.handleMoreClick = this.handleMoreClick.bind(this);
  }


  getNextOffset() {
    return this.state.offset+this.state.loadNumber;
  }

  handleMoreClick(event) {
    const newOffset = this.getNextOffset();
    this.setState({offset: newOffset, loadNumber: this.state.loadNumber}, () => {
      console.log("Offset: " + this.state.offset)
      this.getMorePokemon();
    });
  }

  componentDidMount() {
    this.getMorePokemon();
  }

  getMorePokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.loadNumber;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        this.setState({pokemons : data.results}, () => {
          this.state.pokemons.map(pokemon => {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(data => {
              if (data) {
                var temp = this.state.pokemonDetails
                temp.push(data)
                this.setState({pokemonDetails: temp})
              }            
            })
            .catch(console.log)
          })
        })        
      }
    })
    .catch(console.log)
  }



  render() {
    const {pokemonDetails} = this.state;
    
    const renderedPokemonList = pokemonDetails.map((pokemon, index) => {
      return (<PokeCard pokemon={pokemon} />);
      
    });
    return (
      <div>
      <div className="container">
        <div className="card-columns">
          {renderedPokemonList}
        </div>
      </div>
      <button type="button" className="get-more-cards btn btn-secondary btn-block" key="more-button" id="more-button" onClick={this.handleMoreClick}>Load More</button>
    </div>
    );
  }
}

export default App;
