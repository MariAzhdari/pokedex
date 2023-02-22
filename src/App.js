import React from "react";
import ReactDOM from "react-dom";
import BestPokemon from "./BestPokemon";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokeman";


function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon/>
    </div>
  );
}


ReactDOM.render(<App />, document.querySelector("#root"));

export default App;