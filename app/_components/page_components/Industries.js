"use client";
import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../shared/CustomArrows";

const Industries = ({ data }) => {
  let industries = data.industries;
  const settings = {  
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {          
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="Process-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-12 col-md-12 text-left wow fadeInRight"
              data-wow-duration="1500ms"
              data-wow-delay="500ms"
            >
              <div className="skill-text">
                <div className="section-title mb-40 left-border">
                  <h2 className="title mb-3">
                    {" "}
                    Industries in <br />{" "}
                    <span className="color-text"> Focus </span>{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-12 col-md-12 text-left wow fadeInRight"
              data-wow-duration="1500ms"
              data-wow-delay="500ms"
            >
              <div id="Industries" className="slider">
                <Slider {...settings}>
                  {industries.length > 0 &&
                    industries.map((item) => {
                      return (
                        <div key={item.id} className="slider-items">
                          <div className="industries-col">                          
                            <img
                             src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${item?.image}`} 
                             alt={item?.industry_name}
                              className="img-fluid"
                            />
                            <h4>{item?.industry_name}</h4>
                          </div>
                        </div>
                      );
                    })}                  
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
