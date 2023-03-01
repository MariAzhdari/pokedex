 import React, { useState } from "react";

 function CaughtPokemon  () {
  const[caught,setCaught] = useState(0);

  function inCatchPokemon(){
    setCaught(caught+1);
  }
const date = new Date().toLocaleDateString();
return(
  <div>
     <p>caught {caught} Pokemin on {date}</p>
  <button onClick={inCatchPokemon}>catch pokemon</button>
  </div>
 );
  }
export default CaughtPokemon;
