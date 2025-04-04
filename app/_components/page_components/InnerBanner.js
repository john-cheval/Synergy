"use client";
import React, { useEffect } from "react";
import { WOW } from "wowjs";
import Bredcumb from "./Bredcumb";
import Image from "next/image";
const InnerBanner = ({ data, additionalClass = "" }) => {
  const { short_description, small_heading, top_banner } = data;

  const header = short_description?.split("<br>");
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <>
      <section className={`banner-section ${additionalClass}`}>
        <div className="inner-banner">
          <div className="inner-banner-bg">
            <Image
              src="/img/inner-banner.png"
              alt="banner"
              className="image"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
          <div className="single-banner">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12 text-left">
                  <div className="inner-banner-content">
                    <div className="h_w">
                      <h1
                        className="wow fadeInUp"
                        data-animation="fadeInUp"
                        data-delay="1s"
                      >
                        {header?.[0]}{" "}
                        <span class="inner-baaner-title">{header?.[1]}</span>
                      </h1>
                    </div>
                    <Bredcumb title={small_heading} />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12">
                  <div className="inner-banner-img wow fadeInDown">
                    {data?.image != "" && (
                      <Image
                        src={top_banner}
                        alt={small_heading}
                        className="image"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    )}
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

export default InnerBanner;
