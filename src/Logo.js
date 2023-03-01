import React from "react";

const Logo = (props) => {
  const logWhenClicked =()=>{
console.log("it doesn't matter what the message is");
  };
  return (
    <header>
      <h1>Welcome to {props.appName}'s the Pokedex</h1>
      <img onClick={logWhenClicked}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="pokedex"
      />
    </header>
  );
};

export default Logo;