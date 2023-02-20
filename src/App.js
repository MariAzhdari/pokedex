
import React from "react";
import ReactDOM from "react-dom";


function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon/>
    </div>
  );
}

const Logo = () =>{
  const appName = "Mari";
  return (
    <header>
      <h1>Welcome to {appName}'s the Pokedex</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="pokedex"
      />
    </header>
  );
};


const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p> My favorite Pokemon is Squirtle</p>;
      <ul>
        {abilities.map((ability) =>(
       <li>{ability}</li>
      ))}
      </ul>
    </div>
  );
};

const CaughtPokemon = () => {
const date = new Date().toLocaleDateString();
return <p>caught 0 pokemin on {date}</p>;
};



ReactDOM.render(<App />, document.querySelector("#root"));

export default App;