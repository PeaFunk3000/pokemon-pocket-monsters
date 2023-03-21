import React from "react";
import { useNavigate } from "react-router-dom";

const TCGResults = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="tcgHolder"
      onClick={() => {
        navigate(`/trading-card-game/${props.resultsObj.id}`, {
          state: { result: props.resultsObj, history: props.tcgResult },
        });
      }}
    >
      <img
        id="tcgImage"
        src={
          typeof props.resultsObj.images.small === "undefined"
            ? ""
            : props.resultsObj.images.small
        }
        alt="tcg card"
      ></img>
    </div>
  );
};

export default TCGResults;
