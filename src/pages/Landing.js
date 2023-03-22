import React from 'react'
import "../styles/Landing.css";

const pokemonImg = `${process.env.PUBLIC_URL}/images/pokemonImg.png`;

export default function Landing() {
  return (
    <div>
    <h1 id="pageTitle">Gotta Catch 'Em All!</h1>
    <div id="landing">
     <img alt="classic pokemon characters" src={pokemonImg}/>
    </div>
    </div>
    
  )
}
