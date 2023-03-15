import React, { useState } from "react";
import pokeAPI from "../utils/pokeAPI";
import "./styles/Pokedex.css";
import PokedexSearch from "./PokedexSearch";

function Pokedex() {
    const [pokeResult, setPokeResult] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = event => {
        setSearchTerm(event.target.value);
    };

    const clearScreen = event => {
        resetPokeResult();
        setIsLoading(false);
    };

    const resetPokeResult = () => {
        setPokeResult();
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        if (searchTerm === "") {
            return;
        };

        setIsLoading(true);
        resetPokeResult();
    
        pokeAPI.search(searchTerm)
        .then(res => {
            if (res.data.length === 0) {
            throw new Error("No results found.");
            }
            if (res.data.status === "error") {
            throw new Error(res.data.message);
            }
            setPokeResult({
                name: res.data.name,
                image: res.data.sprites.other["official-artwork"].front_default,
                base_experience: res.data.base_experience,
                id: res.data.id,
                height: (res.data.height / 10),
                weight: (res.data.weight / 10),
                type: res.data.types[0].type.name,
                hp: res.data.stats[0].base_stat,
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                special_attack: res.data.stats[3].base_stat,
                special_defense: res.data.stats[4].base_stat,
                speed: res.data.stats[5].base_stat,
                abilities: res.data.abilities
            });
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
        });

        setSearchTerm("");
    };

    if (pokeResult !== undefined) {
        return (
            <div className="App">
                <img id="background" src={process.env.PUBLIC_URL + `/images/background.png`} alt="background"></img>
                <div id="banner" >
                    <img id="pokeball" src={process.env.PUBLIC_URL + "/images/pokeball.png"} alt="pokeball"></img>
                    <img id="pokemon" src={process.env.PUBLIC_URL + "/images/pokemon.png"} alt="pokemon"></img>
                    <h1 id="searchLabel" className="text-center">Search</h1>
                    <input
                        id="pokemonSearchInput"
                        type="text"
                        name="searchTerm"
                        value={searchTerm.toLowerCase()}
                        onChange={handleInputChange}
                        placeholder="Search Pokémon"
                    />
                    <button id="submitBtn" onClick={handleSubmitForm}>Submit</button>
                    <button id="clearBtn" onClick={clearScreen}>Clear</button>
                </div>
                <PokedexSearch resultsObj = {pokeResult} />
            </div>
        );
    } else if (isLoading === true) {
        return (
            <div className="App">
                <img id="background" src={process.env.PUBLIC_URL + `/images/background.png`} alt="background"></img>
                <div id="banner" >
                    <img id="pokeball" src={process.env.PUBLIC_URL + "/images/pokeball.png"} alt="pokeball"></img>
                    <img id="pokemon" src={process.env.PUBLIC_URL + "/images/pokemon.png"} alt="pokemon"></img>
                    <h1 id="searchLabel" className="text-center">Search</h1>
                    <input
                        id="pokemonSearchInput"
                        type="text"
                        name="searchTerm"
                        value={searchTerm.toLowerCase()}
                        onChange={handleInputChange}
                        placeholder="Search Pokémon"
                    />
                    <button id="submitBtn" onClick={handleSubmitForm}>Submit</button>
                    <button id="clearBtn" onClick={clearScreen}>Clear</button>
                </div>
                <div>
                    <img id="pokeball" src={process.env.PUBLIC_URL + "/images/pokeball.png"} alt="pokeball"></img>
                </div>
            </div>
        )
    } else {
        return (
            <div className="App">
                <img id="background" src={process.env.PUBLIC_URL + `/images/background.png`} alt="background"></img>
                <div id="banner" >
                    <img id="pokeball" src={process.env.PUBLIC_URL + "/images/pokeball.png"} alt="pokeball"></img>
                    <img id="pokemon" src={process.env.PUBLIC_URL + "/images/pokemon.png"} alt="pokemon"></img>
                    <h1 id="searchLabel" className="text-center">Search</h1>
                    <input
                        id="pokemonSearchInput"
                        type="text"
                        name="searchTerm"
                        value={searchTerm.toLowerCase()}
                        onChange={handleInputChange}
                        placeholder="Search Pokémon"
                    />
                    <button id="submitBtn" onClick={handleSubmitForm}>Submit</button>
                    <button id="clearBtn" onClick={clearScreen}>Clear</button>
                </div>
                <div>
                    <h2>Please search for something</h2>
                </div>
            </div>
        )
    }
}

export default Pokedex;
