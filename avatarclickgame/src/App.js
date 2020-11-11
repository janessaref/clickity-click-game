import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import characters from "./characters.json";
import CharacterImage from "./components/CharacterImage";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <CharacterImage object = {characters[0]} />
      <CharacterImage object = {characters[1]} />
      <CharacterImage object = {characters[2]} />
    </div>
  );
}

export default App;
