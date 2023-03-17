import React from "react";
import { useParams } from "react-router-dom";

export default function TCGDisplay() {
  const { id } = useParams();
  return <div>
    <h1>SINGLE CARD DISPLAY</h1>
    <h1></h1>
  </div>;
}
