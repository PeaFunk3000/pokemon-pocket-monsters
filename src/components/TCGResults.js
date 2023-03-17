import React from "react";
import { useNavigate } from "react-router-dom";


const TCGResults = (props) => {
    const navigate = useNavigate();
    console.log(props.resultsObj)
    return (
        <div id="tcgHolder" onClick={() => {navigate(`/trading-card-game/${props.resultsObj.id}`, {state:{result:props.resultsObj}})}}>
            <img id="tcgImage" src={typeof(props.resultsObj.images.small) === 'undefined' ? '' : props.resultsObj.images.small} alt="tcg card"></img>
        </div>
    );
}

export default TCGResults;


