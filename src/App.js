import React from "react";
import ReactDOM from "react-dom";
import BestPokemon from "./BestPokemon";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMoves from "./PokemonMoves";

const abilities =["Anticipation", "Adaptability", "Run-Away"];

function App() {
  const logWhenClicked = () => {
    console.log("it doesn't matter what the message is");
  };
  return (
    <div>
      <Logo appName="Mari" handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon />
      <PokemonMoves />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
