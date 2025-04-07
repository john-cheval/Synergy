"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { WOW } from "wowjs";

const Banner = ({ data }) => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);

    if (
      typeof window !== "undefined" &&
      window.performance &&
      window.performance.mark
    ) {
      window.performance.mark("video-loaded");
    }
  };

  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <>
      <section className="banner-section">
        <div className="banner-slider">
          {/* {!videoLoaded && (
            <div className="absolute inset-0 z-10">
              <Image
                src={"/about-banner.webp"}
                alt="Hero Fallback"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          )} */}
          <video
            autoPlay
            loop
            ref={videoRef}
            onLoadedData={handleVideoLoad}
            // poster="/about-banner.webp"
            id="video-background"
            muted
            playsInline
            preload="auto"
            src={
              "https://bunny-wp-pullzone-1uo9uvm3si.b-cdn.net/wp-content/uploads/2025/04/synergy.mp4"
            }
          />
          {/* <source src={data[0]?.video?.url} type={"video/mp4"} /> */}
          {/* </video> */}
          <div className="single-banner">
            <div className="container container-xl">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8 col-md-9 text-center">
                  <div className="banner-content">
                    <h1
                    // className="wow fadeInUp"
                    // data-animation="fadeInUp"
                    // data-wow-duration="1500ms"
                    // data-wow-delay="300ms"
                    >
                      {data[0]?.title}
                    </h1>
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
