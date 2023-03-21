import React from "react";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import TCGResults from "../components/TCGResults";

const TCGDisplay = ({ route, navigate }) => {
  const locate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const card = location.state;

  return (
    <div>
      <h1>SINGLE CARD INFO</h1>
      <h1>{card.result.name}</h1>
      <img
        id="tcgImage"
        src={
          typeof card.result.images.small === "undefined"
            ? ""
            : card.result.images.small
        }
        alt="tcg card"
      ></img>
      <h2>Set</h2>
      <p>{card.result.set.name}</p>
      <button onClick={() => {
        locate("../trading-card-game", {state:{tcgResult:card.history}})}}>Back to Cards</button>
    </div>
  );
};

export default TCGDisplay;
