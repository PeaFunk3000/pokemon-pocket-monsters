import React, { useState /*, useEffect*/ } from "react";
import pokeAPI from "../utils/pokeAPI";
import tcgAPI from "../utils/tcgAPI";
import "./styles/Pokedex.css";
import PokedexSearch from "./PokedexSearch";
// import Marketplace from "./Marketplace";

function Pokedex() {
    const [pokeResult, setPokeResult] = useState({
        name: "",
        image: "",
        base_experience: "",
        id: "",
        height: "",
        weight: "",
        type: "",
        hp: "",
        attack: "",
        defense: "",
        special_attack: "",
        special_defense: "",
        speed: "",
        abilities: [{ability: {name:"n/a"}}],
        loaded: false
    });
    const [tcgResult, setTcgResults] = useState({
        image: "",
        lowPrice: "0.00",
        trendPrice: "0.00",
        avg1: "0.00",
        avg7: "0.00",
        avg30: "0.00",
        updatedAt: "",
        url: ""
    })
    const [searchTerm, setSearchTerm] = useState("");
    const [display, setDisplay] = useState("hide");

    const handleInputChange = event => {
        setSearchTerm(event.target.value);
    };

    const clearScreen = event => {
        setDisplay("hide");
        resetPokeResult();
        resetTcgResult();
    };

    const resetPokeResult = () => {
        setPokeResult({
            name: "",
            image: "",
            base_experience: "",
            id: "",
            height: "",
            weight: "",
            type: "",
            hp: "",
            attack: "",
            defense: "",
            special_attack: "",
            special_defense: "",
            speed: "",
            abilities: [{ability: {name:"n/a"}}],
            loaded: false
        });
    };

    const resetTcgResult = () => {
        setTcgResults({
            image: "",
            lowPrice: "",
            trendPrice: "",
            avg1: "",
            avg7: "",
            avg30: "",
            updatedAt: "",
            url: ""
        })
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        if (!searchTerm) {
            return;
        };
    
        pokeAPI.search(searchTerm)
        .then(res => {
            if (res.data.length === 0) {
            throw new Error("No results found.");
            }
            if (res.data.status === "error") {
            throw new Error(res.data.message);
            }
            resetPokeResult();
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
                abilities: res.data.abilities,
                loaded: true
            });
            setDisplay("");
            setSearchTerm("");
        })
        .catch(err => {
            console.log(err);
            
        });

        tcgAPI.search(searchTerm)
        .then(res => {
            resetTcgResult();
            setTcgResults({
                image: res.data[0].images.small,
                lowPrice: res.data[0].cardmarket.prices.lowPrice,
                trendPrice: res.data[0].cardmarket.prices.trendPrice,
                avg1: res.data[0].cardmarket.prices.avg1,
                avg7: res.data[0].cardmarket.prices.avg7,
                avg30: res.data[0].cardmarket.prices.avg30,
                updatedAt: res.data[0].cardmarket.updatedAt,
                url: res.data[0].cardmarket.url
            })
        })
    };


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
            <PokedexSearch
                display = {display}
                resultsObj = {pokeResult}
            />
            {/* <Marketplace 
                display = {display}
                resultsObj = {tcgResult}
            /> */}
        </div>
    );
}

export default Pokedex;
