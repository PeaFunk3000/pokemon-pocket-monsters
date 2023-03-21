import React from "react";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import BarChart from "../components/BarChart";
import "../styles/TCGDisplay.css";

const TCGDisplay = ({ route, navigate }) => {
  const locate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const card = location.state;

  return (
    <div className="singleCard">
      <div className="cardTitle">
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
      </div>
      <div className="prices">
      <h1>Price</h1>
      <BarChart
                    chartData={[card.result.cardmarket.prices.avg1,card.result.cardmarket.prices.avg7,card.result.cardmarket.prices.avg30,card.result.cardmarket.prices.trendPrice]}
                    width={50}
                    height={50}
                    labels={["1Day", "7Day", "30Day", "Trend"]}
                    name={"priceChart"}
                    unit="£"
                    title="Cardmarket Price Trend"
                    boolean={true}
                />
      </div>
      <div className="cardPrinting">
      <h1>Card Printing</h1>  
      <h2>Set</h2>
      <h3>{card.result.set.name}</h3>
      <h2>Printed</h2>
      <h3>{card.result.set.total}</h3>
      <button className="back" onClick={() => {
        locate("../trading-card-game", {state:{tcgResult:card.history}})}}>Back to Cards</button>
      </div>
    </div>
  );
};

export default TCGDisplay;
