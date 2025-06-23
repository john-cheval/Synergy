"use client";
import React, { useEffect } from "react";
import { useRef, useState } from "react";

import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../shared/CustomArrows";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const OurTeams = ({ data }) => {
  const { team_list } = data;
  const teamModal = useRef(null);
  const [activeteam, setactiveteam] = useState(null);
  const sliderRef = useRef(null);

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        sliderRef.current?.slickPlay();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
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

  const handleClick = (item) => {
    setactiveteam(item);
    showModal();
  };

  const showModal = () => {
    teamModal.current.classList.add("show");
  };
  const hideModal = () => {
    teamModal.current.classList.remove("show");
  };

  return (
    <>
      <section className="Team-section" ref={sectionRef}>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-12 col-md-12 text-left wow fadeInRight"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="skill-text">
                <div className="section-title mb-40 left-border">
                  <h2 className="title mb-3">
                    {" "}
                    Our <span className="color-text"> Team </span>{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-12 col-md-12 text-left wow fadeInRight"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div id="team" className="slider">
                <Slider ref={sliderRef} {...settings}>
                  {team_list.length > 0 &&
                    team_list.map((item, index) => {
                      return (
                        <div
                          key={item?.id || index}
                          onClick={() => handleClick(item)}
                          className="slider-items"
                        >
                          <div className="team-col">
                            <Image
                              src={item?.image}
                              alt={item?.member_name || "Image"}
                              className="img-fluid image"
                              width={0}
                              height={0}
                              sizes="100vw"
                              priority={false}
                            />
                            <div className="team-content">
                              <div className="team-content-left">
                                <h5> {item?.member_name} </h5>
                                <p> {item?.designation} </p>
                              </div>
                              <div className="team-content-right">
                                {item.facebook != "" && (
                                  <a target="_blank" href={item?.facebook}>
                                    <FaFacebook />
                                  </a>
                                )}
                                {item.linkedin != "" && (
                                  <a target="_blank" href={item?.linkedin}>
                                    <FaLinkedin />
                                  </a>
                                )}
                                {item.twitter != "" && (
                                  <a target="_blank" href={item?.twitter}>
                                    <FaTwitter />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Slider>
              </div>

              {/* <!-- Second Modal --> */}
              <div className="modal" id="myM2" ref={teamModal}>
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        onClick={hideModal}
                        type="button"
                        className="btn"
                        data-dismiss="modal"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="team-modal-box">
                        <div className="team-modal-left">
                          {activeteam?.image != "" && (
                            <Image
                              src={activeteam?.image}
                              alt={activeteam?.member_name || "Image"}
                              className="img-fluid image"
                              sizes="100vw"
                              width={0}
                              height={0}
                            />
                          )}
                        </div>
                        <div className="team-modal-right">
                          <h4>{activeteam?.member_name}</h4>
                          <h6>{activeteam?.designation}</h6>
                          <div className="team-content-right">
                            {activeteam?.facebook != "" && (
                              <a target="_blank" href={activeteam?.facebook}>
                                <FaFacebook />
                              </a>
                            )}
                            {activeteam?.linkedin != "" && (
                              <a target="_blank" href={activeteam?.linkedin}>
                                <FaLinkedin />
                              </a>
                            )}
                            {activeteam?.twitter != "" && (
                              <a target="_blank" href={activeteam?.twitter}>
                                <FaTwitter />
                              </a>
                            )}
                          </div>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: activeteam?.section_content,
                            }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Second Modal end--> */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a className="__our-team-btn" href={`/our-team`}>
                  Read More
                  <span style={{ marginLeft: "60px" }} className="btn-icon">
                    <Image
                      src="/img/btn-icon.png"
                      alt="button"
                      sizes="100vw"
                      width={0}
                      height={0}
                      className="image"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeams;
