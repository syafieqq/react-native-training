// screens/Pokemon.js

import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import PokeCard from "../components/PokeCard";

export default class Pokemon extends Component {
  state = {
    pokeList: [],
  };

  async componentDidMount() {
    try {
      const pokemonApiCall = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const pokemon = await pokemonApiCall.json();
      this.setState({ pokeList: pokemon.results });
    } catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }

  render() {
    return (
      <FlatList
        data={this.state.pokeList}
        renderItem={({ item }) => <PokeCard name={item.name} />}
        keyExtractor={(data) => data.name}
      />
    );
  }
}
