import React from "react";
import ReactDOM from "react-dom";
import BestPokemon from "./BestPokemon";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokeman";


function App() {
  return (
    <div>
      <Logo appName ="Mari"/>
      <BestPokemon  abilities= {["Anticipation", "Adaptability", "Run-Away"]}/>
      <CaughtPokemon />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
