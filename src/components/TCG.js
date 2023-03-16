import React, { useState } from 'react';
import tcgAPI from "../utils/tcgAPI";
import TCGResults from "./TCG/TCGResults";
import SearchBanner from "./SearchBanner";
const pokemon_tcg_logo = `${process.env.PUBLIC_URL}/images/pokemon_tcg_logo.png`;


export default function TCG() {
    const [tcgResult, setTcgResults] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState({
        error: false,
        errorMsg: ""
    });

    const handleInputChange = event => {
        setSearchTerm(event.target.value);
    };

    const clearScreen = () => {
        resetTcgResult();
        setIsLoading(false);
        setApiError({error: false, errorMsg: ""});
    };

    const resetTcgResult = () => {
        setTcgResults();
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        if (searchTerm === "") {
            return;
        };

        setApiError({error: false, errorMsg: ""});
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
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
            setApiError({error: true, errorMsg: `This Pokémon "${searchTerm}" does not exist`});
        });

        setSearchTerm("");
    };

    if (tcgResult !== undefined) {
        return (
            <div className="App">
                <SearchBanner
                    handleInputChange={handleInputChange}
                    handleSubmitForm={handleSubmitForm}
                    searchTerm={searchTerm}
                    clearScreen={clearScreen}
                    logo={pokemon_tcg_logo}
                />
                {tcgResult.data.map(item => <TCGResults key={item.id} resultsObj = {item}/>)}
            </div>
        )
    } else if (isLoading === true) {
        return (
            <div className="App">
                <SearchBanner
                    handleInputChange={handleInputChange}
                    handleSubmitForm={handleSubmitForm}
                    searchTerm={searchTerm}
                    clearScreen={clearScreen}
                    logo={pokemon_tcg_logo}
                />
                <div>
                    <img id="pokeball" src={process.env.PUBLIC_URL + "/images/pokeball.png"} alt="pokeball"></img>
                </div>
            </div>
        )
    } else if (apiError.error) {
        return (
            <div className="App">
                <SearchBanner
                    handleInputChange={handleInputChange}
                    handleSubmitForm={handleSubmitForm}
                    searchTerm={searchTerm}
                    clearScreen={clearScreen}
                    logo={pokemon_tcg_logo}
                />
                <div>
                    <h2>{apiError.errorMsg}</h2>
                </div>
            </div>
        )
    } else {
        return (
            <div className="App">
                <SearchBanner
                    handleInputChange={handleInputChange}
                    handleSubmitForm={handleSubmitForm}
                    searchTerm={searchTerm}
                    clearScreen={clearScreen}
                    logo={pokemon_tcg_logo}
                />
                <div>
                    <h2>Please search for something</h2>
                </div>
            </div>
        )
    }
}
