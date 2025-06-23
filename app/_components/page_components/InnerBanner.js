"use client";
import React from "react";
import { motion } from "framer-motion";
import Bredcumb from "./Bredcumb";
import Image from "next/image";
import { fadeInDown, fadeInUp } from "@/app/utils/framer";

const InnerBanner = ({ data, additionalClass = "" }) => {
  const { short_description, small_heading, top_banner } = data;
  const header = short_description?.split("<br>");

  return (
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
                  <motion.div {...fadeInUp} className="h_w">
                    <h1>
                      {header?.[0]}{" "}
                      <span className="inner-baaner-title">{header?.[1]}</span>
                    </h1>
                  </motion.div>
                  <Bredcumb title={small_heading} />
                </div>
              </div>
            </div>

            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12">
                {data?.image !== "" && (
                  <motion.div {...fadeInDown} className="inner-banner-img">
                    <Image
                      src={top_banner}
                      alt={small_heading || "Image"}
                      className="image"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;
