import React from "react";
import "../styles/SearchBanner.css"

function SearchBanner(props) {
    return (
        <div className = "container flex  justify-center wrap w-screen min-h-fit">
        <div id="banner" >
            <h1 id="searchLabel" >Search</h1>
            <input
                id="pokemonSearchInput"
                type="text"
                name="searchTerm"
                value={props.searchTerm}
                onChange={props.handleInputChange}
                placeholder="Search Pokémon"
                className="px-4"
                
            />
            <button id="submitBtn" className="mx-4" onClick={props.handleSubmitForm}>Submit</button>
            <button id="clearBtn" onClick={props.clearScreen}>Clear</button>
        </div>
        </div>
    );
}

export default SearchBanner;
