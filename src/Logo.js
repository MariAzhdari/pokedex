import React from "react";

const Logo = () => {
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

export default Logo;