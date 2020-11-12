import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import characters from "./characters.json";
import CharacterImage from "./components/CharacterImage";

// empty array to push in clicked character names and check if the user already clicked that character
let clickedNameArray = [];

class App extends Component {
  // the state of our characters, score, highscore and message
  state = {
    characters: characters,
    score: 0,
    highscore: 0,
    message: "Let's play!"
  };

  // our click handler for whichever image the user has clicked on
  clickHandler = e => {
    
    // getting the attribute for data-name
    const name = e.target.getAttribute("data-name");

    // setting a conditional statement that if the array already includes the name of the character, reset the array and score and change the state of the message else, if the character's name is not in the array, push the name into the array and set the state of the highscore
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
      };
    };

    // shuffles our character images randomly
    const arr = this.state.characters;
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * arr.length);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    };
    this.setState({characters: arr});
   
  };

  // passing in our props in their respective parts of the page however the layout was made
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          highscore={this.state.highscore}
          message={this.state.message}
         />
        <Header />
        {/* main container mapping through each of our characters */}
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
      <Footer />
    </div>
    );
  };
};

export default App;
