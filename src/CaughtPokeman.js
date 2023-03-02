 import React, { useState } from "react";

 function CaughtPokemon  () {
  const[caught,setCaught] = useState([]);

  function inCatchPokemon(){
    setCaught(caught.concat("Eevee","Ditto","Spearow"));
  }

const date = new Date().toLocaleDateString();

return(
  <div>
     <p>caught {caught.length} Pokemin on {date}</p>
 <ul>
   {caught.map((item ,index)=>{
    return <li key={index}>{item}</li>;
  })}
 </ul>
  <button onClick={inCatchPokemon}>catch pokemon</button>
  </div>
 );
  }
export default CaughtPokemon;
