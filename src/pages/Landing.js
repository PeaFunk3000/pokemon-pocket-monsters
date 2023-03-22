import React from 'react'
import "../styles/Landing.css";
import Audio from "../components/Player";
import Player from '../components/Player';

const pokemonImg = `${process.env.PUBLIC_URL}/images/pokemonImg.png`;

export default function Landing() {
  return (
    <div>
    <h1 id="pageTitle">Gotta Catch 'Em All!</h1>
    <div id="landing">
     <img src={pokemonImg}/>
    </div>
    </div>
    
  )
}
