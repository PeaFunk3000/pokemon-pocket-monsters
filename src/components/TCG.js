import React, { useState } from 'react';
import tcgAPI from "../utils/tcgAPI";
import TCGResults from "./TCG/TCGResults";
// import Loading from "./Loading";


export default function TCG() {
    const [tcgResult, setTcgResults] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = event => {
        setSearchTerm(event.target.value);
    };

    const clearScreen = event => {
        resetTcgResult();
        setIsLoading(false);
    };

    const resetTcgResult = () => {
        setTcgResults();
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        if (searchTerm === "") {
            return;
        };

        setIsLoading(true);
        resetTcgResult();

        tcgAPI.search(searchTerm)
        .then(res => {
            if (res.data.length === 0) {
                throw new Error("No results found.");
            }
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            }
            setTcgResults(res);
        })
        .catch(err => {
            console.log(err);
        });

        setSearchTerm("");
    };

    if (tcgResult !== undefined) {
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
                {tcgResult.data.map(item => <TCGResults key={item.id} resultsObj = {item}/>)}
            </div>
        )
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
