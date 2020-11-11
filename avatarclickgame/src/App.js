import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Section from "./components/Section";
import characters from "./characters.json";
import CharacterImage from "./components/CharacterImage";

let clickedNameArray = [];

class App extends Component {
  state = {
    characters: characters,
    score: 0,
    highscore: 0
  };

  clickHandler = e => {
    console.log(clickedNameArray)
    const name = e.target.getAttribute("data-name");
    if(clickedNameArray.includes(name)) {
      alert("u lose SOKKA!!!!");
      clickedNameArray = [];
      this.setState({score: 0});
    } else {
      const currentScore = this.state.score + 1;
      this.setState({score: currentScore});
      clickedNameArray.push(name);
    }


    const arr = this.state.characters;
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * arr.length);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    };
    this.setState({characters: arr});

    // const characters = this.state.characters.filter(character => character.id !== id);
   
  };

  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ count: this.state.count + 1 });
  // };


  render() {
    return (
      <div>
        <Navbar
        score={this.state.score}
        highscore={this.state.highscore}
         />
        <Header />
        <div className ="container">
        {this.state.characters.map(character => (
          <CharacterImage
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            clickHandler={this.clickHandler}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
