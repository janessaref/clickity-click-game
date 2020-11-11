import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Section from "./components/Section";
import characters from "./characters.json";
import CharacterImage from "./components/CharacterImage";


class App extends Component {
  state = {
    characters: characters,
    score: 0,
    highscore: 0
  };

  clickImage = id => {
    const characters = this.state.characters.filter(character => character.id !== id);
    this.setState({characters: characters})
  }
  
  
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <div className ="container">
        <CharacterImage object = {characters[0]} />
        <CharacterImage object = {characters[1]} />
        <CharacterImage object = {characters[2]} />
        </div>
      </div>
    );
  }
}

export default App;
