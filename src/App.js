import React from "react";
import ReactDOM from "react-dom";
import BestPokemon from "./BestPokemon";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokeman";

const abilities =["Anticipation", "Adaptability", "Run-Away"];

function App() {
  return (
    <div>
      <Logo appName ="Mari"/>
      <BestPokemon  abilities= {abilities}/>
      <CaughtPokemon />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
