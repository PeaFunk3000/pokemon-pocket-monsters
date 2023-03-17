import React, { useState } from "react";
import pokeAPI from "../utils/pokeAPI";
import "../styles/Pokedex.css";
import PokedexSearch from "../components/PokedexSearch";
import SearchBanner from "../components/SearchBanner";
const pokemon_logo = `${process.env.PUBLIC_URL}/images/pokemon.png`;

function Pokedex() {
    const [pokeResult, setPokeResult] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState({
        error: false,
        errorMsg: ""
    });

   

    const handleInputChange = event => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const clearScreen = () => {
        resetPokeResult();
        setIsLoading(false);
        setApiError({error: false, errorMsg: ""});
    };

    const resetPokeResult = () => {
        setPokeResult();
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        if (searchTerm === "") {
            return;
        };

        setApiError({error: false, errorMsg: ""});
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
            setApiError({error: true, errorMsg: `This Pokémon "${searchTerm}" does not exist`});
        });

        setSearchTerm("");
    };

    const searchBannerVar = 
        <SearchBanner
            handleInputChange={handleInputChange}
            handleSubmitForm={handleSubmitForm}
            searchTerm={searchTerm}
            clearScreen={clearScreen}
            logo={pokemon_logo}
        />;

    if (pokeResult !== undefined) {
        return (
            <div className="App">
                {searchBannerVar}
                <PokedexSearch resultsObj = {pokeResult} />
            </div>
        );
    } else if (isLoading === true) {
        return (
            <div className="App">
                {searchBannerVar}
                <div id="loadingPokeball">
                    <img id="pokeball" src={process.env.PUBLIC_URL + "/images/pokeball.png"} alt="pokeball"></img>
                </div>
            </div>
        )
    } else if (apiError.error) {
            return (
                <div className="App">
                    {searchBannerVar}
                    <div>
                        <h2>{apiError.errorMsg}</h2>
                    </div>
                </div>
            )
    } else {
        return (
            <div className="App">
                {searchBannerVar}
                <div id="helpMessage">
                    <h2>Please search for something</h2>
                </div>
            </div>
        )
    }
}

export default Pokedex;
