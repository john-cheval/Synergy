"use client";
import React, { useEffect } from "react";
import { WOW } from "wowjs";
import Bredcumb from "./Bredcumb";
const InnerBanner = ({ data, additionalClass = "" }) => {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <>
      <section className={`banner-section ${additionalClass}`}>
        <div className="inner-banner">
          <div className="inner-banner-bg">
            <img src="/img/inner-banner.png" />
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
                        dangerouslySetInnerHTML={{
                          __html: data?.heading?.replace(/<\/?p>/g, ""),
                        }}
                      ></h1>
                    </div>
                    <Bredcumb title={data?.title} />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12">
                  <div className="inner-banner-img wow fadeInDown">
                    {data?.image != "" && (
                      <img
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${data?.image}`}
                        alt={data?.title}
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
