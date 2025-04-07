import React from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
const NextArrow = ({ className, style, onClick, color = false }) => {
  return (
    <button onClick={onClick} className="slick-arrow next-arrow">
      <GoArrowRight
        style={{ color: color ? "#005BA8" : "#1C1B1F", fontSize: "24px" }}
      />
    </button>
  );
};
const PrevArrow = ({ className, style, onClick, color = false }) => {
  return (
    <button onClick={onClick} className="slick-arrow prev-arrow">
      <GoArrowLeft
        style={{ color: color ? "#005BA8" : "#1C1B1F", fontSize: "24px" }}
      />
    </button>
  );
};

export { NextArrow, PrevArrow };
