import React from "react";

const TCGResults = (props) => {
    return (
        <div id="tcgHolder">
            <img id="tcgImage" src={typeof(props.resultsObj.images.small) === 'undefined' ? '' : props.resultsObj.images.small} alt="tcg card"></img>
        </div>
    );
}

export default TCGResults;


