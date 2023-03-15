import React from "react";
import Abilities from "./Abilities";
import BarChart from "./BarChart";

function PokedexSearch(props) {
    return (
        <div className={props.display}>
            <div id="headingPoke">
                <h2 id="pokemonName">
                    {props.resultsObj.name}
                </h2>
                <img id="typeImg" src={process.env.PUBLIC_URL + `/images/${props.resultsObj.type}.png`} alt="type"></img>
                {/* type images from https://pokemon.fandom.com/wiki/Types */}
            </div>
            <div id="imgHolder">
                <img id="pokedexImg" src={process.env.PUBLIC_URL + "/images/pokedex.png"} alt="pokedex"></img>
                <img id="pokemonImg" src={props.resultsObj.image} alt="pokemon inside pokedex"></img>
                <BarChart
                    chartData={props}
                    width={50}
                    height={50}
                />
            </div>
           
            <div id="pokeInfo">
                <ul>
                    <li>Base Experience: {props.resultsObj.base_experience}</li>
                    <li>ID: {props.resultsObj.id}</li>
                    <li>Height: {props.resultsObj.height}m</li>
                    <li>Weight: {props.resultsObj.weight}kg</li>
                    <li>Abilities:</li>
                    <ul>
                        {props.resultsObj.abilities.map(item => <Abilities key={item.ability.name} ability={item.ability.name}/>)}
                    </ul>
                </ul>
            </div>
        </div>
    );
}

export default PokedexSearch;


