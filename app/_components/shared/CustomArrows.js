import React from "react";

const NextArrow = ({ className, style, onClick }) => {
  return (
    <button onClick={onClick} className="slick-arrow next-arrow">
      <i style={{ color: "#005BA8" }} className="fa fa-long-arrow-right"></i>
    </button>
  );
};
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <button onClick={onClick} className="slick-arrow prev-arrow">
      <i style={{ color: "#005BA8" }} className="fa fa-long-arrow-left"></i>
    </button>
  );
};

export { NextArrow, PrevArrow };
