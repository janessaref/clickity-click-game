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
    highscore: 0,
    message: "Let's play!"
  };

  clickHandler = e => {
    
    const name = e.target.getAttribute("data-name");
    if(clickedNameArray.includes(name)) {
      this.setState({message: "You lose SOKKA!"});
      clickedNameArray = [];
      this.setState({score: 0});
    } else {
      const currentScore = this.state.score + 1;
      this.setState({score: currentScore});
      this.setState({message: "A round of Appa-lause!"});
      clickedNameArray.push(name);
      if(currentScore > this.state.highscore) {
        this.setState({highscore: currentScore})
      }
    }


    const arr = this.state.characters;
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * arr.length);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    };
    this.setState({characters: arr});
   
  };

  render() {
    return (
      <div>
        <Navbar
        score={this.state.score}
        highscore={this.state.highscore}
        message={this.state.message}
         />
        <Header />
        <div className ="container">
          <div className="row">
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
      </div>
    );
  }
}

export default App;
