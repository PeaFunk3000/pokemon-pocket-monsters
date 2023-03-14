import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "../styles/Nav.css";

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
    <div className="navbar" id={expandNavbar ? "open" : "close"}>  
    <div className="toggleButton">
        {/* onclick for button to expand or collapse navbar */}
        <button onClick={() => {
            setExpandNavbar((prev) => !prev)
        }}>
            <FontAwesomeIcon icon={faBars}/>
        </button>
    </div>
    <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Pokedex</Link>
        <Link to="/experience">TCG</Link>
    </div>
    </div>    
  )
};