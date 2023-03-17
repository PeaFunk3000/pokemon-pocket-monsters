import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const TCGDisplay = ({route,navigate}) => {
  const location = useLocation();
  const { id } = useParams();

  const card = location.state;

  console.log(card);

  return (
    <div>
      <h1>SINGLE CARD INFO</h1>
      <h1>{card.result.name}</h1>
      <img id="tcgImage" src={typeof(card.result.images.small) === 'undefined' ? '' : card.result.images.small} alt="tcg card"></img>
    <h2>Set</h2>
    <p>{card.result.set.name}</p>
    </div>
  );
}

export default TCGDisplay;
