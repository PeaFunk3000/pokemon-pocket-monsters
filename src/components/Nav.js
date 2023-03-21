import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Player from "../components/Player";
import "../styles/Nav.css"

const pokemon_logo = `${process.env.PUBLIC_URL}/images/pokemon.png`

export default function Navbar() {
    // create state to determine if navbar expanded or not via boolean
    const [expandNavbar, setExpandNavbar] = useState(false);

    // get information on current route, defining location variable set from useLocation hook
    const location = useLocation();

    // whenever location changes, set expandNavbar to false to close navbar
    useEffect(() => {
        setExpandNavbar(false);
    }, [location])
 
  return (
    // navbar id to control open/close via CSS using   state hook
    <div className = "container w-screen min-w-full bg=blue-100 ">
            <Player/>

    <div className="navbar object-center" id={expandNavbar ? "open" : "close"}>  
    <div className="toggleButton">
        {/* onclick for button to expand or collapse navbar */}
        <button onClick={() => {
            setExpandNavbar((prev) => !prev)
        }}>
            <FontAwesomeIcon icon={faBars}/>
        </button>
    </div>
    <div className="flex justify-center pt-5 content-center" ><img id="pokemon" src={pokemon_logo} alt="pokemon"></img></div>
    <div className="links flex justify-center width-full height-full">
        <Link to="/" className= "bg-blue-900 hover:bg-blue-400  font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" >Home </Link>
        <Link to="/pokedex" className= "bg-blue-900 hover:bg-blue-400 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Pokedex</Link>
        <Link to="/trading-card-game" className= "bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">TCG</Link>
    </div>
    </div>   
    </div> 
  )
};