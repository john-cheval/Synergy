import React from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
const NextArrow = ({ className, style, onClick, color = false }) => {
  return (
    <button onClick={onClick} className="slick-arrow next-arrow">
      {/* <i style={{ color: "#1C1B1F" }} className="fa fa-long-arrow-right"></i> */}
      <GoArrowRight
        style={{ color: color ? "#005BA8" : "#1C1B1F", fontSize: "24px" }}
      />
    </button>
  );
};
const PrevArrow = ({ className, style, onClick, color = false }) => {
  return (
    <button onClick={onClick} className="slick-arrow prev-arrow">
      {/* <i style={{ color: "#1C1B1F" }} className="fa fa-long-arrow-left"></i> */}
      <GoArrowLeft
        style={{ color: color ? "#005BA8" : "#1C1B1F", fontSize: "24px" }}
      />
    </button>
  );
};

export { NextArrow, PrevArrow };
