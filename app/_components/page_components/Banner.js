"use client";
import React, { useEffect } from "react";
import { WOW } from "wowjs";

const Banner = ({ data }) => {
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <>
      <section className="banner-section">
        <div className="banner-slider">
          <video autoPlay loop id="video-background" muted playsInline preload="auto"> 
            <source
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${data?.image}`}
              type={"video/mp4"}
            />
          </video>
          <div className="single-banner">
            <div className="container container-xl">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8 col-md-9 text-center">
                  <div className="banner-content">
                    <h1
                      className="wow fadeInUp"
                      data-animation="fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="300ms"
                      dangerouslySetInnerHTML={{
                        __html: data?.heading?.replace(/<[^>]*>/g, ""),
                      }}
                    ></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
