import React from "react";
import "../styles/SearchBanner.css"

function SearchBanner(props) {
    return (
        <div className = "search__bar container flex  justify-center wrap w-screen min-h-fit">
        <div id="banner" className ="mb-4">
            <h1 id="searchLabel" >Search</h1>
            <input
                id="pokemonSearchInput"
                type="text"
                name="searchTerm"
                value={props.searchTerm}
                onChange={props.handleInputChange}
                placeholder="Search Pokémon"
                className="px-4 rounded"
                
            />
            <button  onClick={props.handleSubmitForm}>Submit</button>
            <button  onClick={props.clearScreen}>Clear</button>
        </div>
        </div>
    );
}

export default SearchBanner;
