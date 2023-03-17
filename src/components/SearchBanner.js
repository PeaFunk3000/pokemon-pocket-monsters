import React from "react";

function SearchBanner(props) {
    return (
        <div id="banner" >
            <h1 id="searchLabel" className="text-center">Search</h1>
            <input
                id="pokemonSearchInput"
                type="text"
                name="searchTerm"
                value={props.searchTerm.toLowerCase()}
                onChange={props.handleInputChange}
                placeholder="Search Pokémon"
            />
            <button id="submitBtn" onClick={props.handleSubmitForm}>Submit</button>
            <button id="clearBtn" onClick={props.clearScreen}>Clear</button>
        </div>
    );
}

export default SearchBanner;
