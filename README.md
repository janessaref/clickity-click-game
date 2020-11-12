# Clicky Game: Avatar Edition

In this project, I've created a fun application with a set of rules to the game! It's a memory game built with React and in this application, I have chosen to use characters from the Nickelodeon TV Series, Avatar: The Last Airbender. To win this game, the user should be able to click all the characters just once and should achieve the highest score of the game: 12, in order to win! If the user ends up clicking the same character, the current score will reset but the last highest score the user attained will be there. Games are fun and a breath of fresh air and so this application does exactly that! It stimulates the brain since it is a memory game and it's meant to just have players of the game enjoy during their leisure time. 

I just started using React and I am still adjusting on how to use it. There are other things I would like to implement in the future such as, have the images change with every click to confuse the players and better ways to let the user know that the game is complete when the user reaches the highest score. I'd love to also make different versions of this too if possible. 

## Table of Contents

* [Technologies Used](#technologies-used)
* [GIF of Project](#gif-of-project)
* [Code Snippet](#code-snippet)
* [Deployed Link](#deployed-link)
* [Author](#author)
* [License](#license)
* [Acknowledgments](#acknowledgments)

## Technologies Used

* [React.js](https://reactjs.org/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## GIF of Project

Here's a GIF of the application.

![gif](assets/avatargame.gif)


## Code Snippet

I chose this code snippet because this is where we are able to keep track of the user's clicked character images. Instead of using the id for each character, I went with the name. I set a data attribute for the name of each character and then compared the name of the character to the array of clicked images by the user and if the name already exists in the array, it's game over and reset the score and the array for the player to try again. We have the intial state of the following: characters, score, highscore and message and as the game goes along, the state for each will change.

```
// empty array to push in clicked character names and check if the user already clicked that character
let clickedNameArray = [];

class App extends Component {
  // the state of our characters, score, highscore and message
  state = {
    characters: characters,
    score: 0,
    highscore: 0,
    message: "LET'S PLAY!"
  };

  // our click handler for whichever image the user has clicked on
  clickHandler = e => {
    
    // getting the attribute for data-name
    const name = e.target.getAttribute("data-name");

    // setting a conditional statement that if the array already includes the name of the character, reset the array and score and change the state of the message else, if the character's name is not in the array, push the name into the array and set the state of the highscore

    if(clickedNameArray.includes(name)) {
      this.setState({message: "You lose SOKKA! Try Again!"});
      clickedNameArray = [];
      this.setState({score: 0});
    } else {
      const currentScore = this.state.score + 1;
      this.setState({score: currentScore});
      this.setState({message: "Great job! A round of APPA-lause!"});
      clickedNameArray.push(name);
      if(currentScore > this.state.highscore) {
        this.setState({highscore: currentScore})
      };
    };
```

## Deployed Link
- [See Live Site]()

## Author

* Janessa Reeanne Fong

- [Link to Github](https://github.com/janessaref)
- [Link to LinkedIn](https://www.linkedin.com/in/janessafong)
- [Link to Portfolio](https://janessarefong.herokuapp.com/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* I'd like to acknowledge my tutor Andrew Knapp.
* To my mentors and instructors, Jerome Chenette, Mahisha Gunasekaran, and Manuel Nunes for helping and teaching me throughout this program.
