"use client";
import React, { useEffect, useRef, useState } from "react";

import aboutBg from "../../../public/img/about-bg.png";
import Slider from "react-slick";
import { Typewriter } from "react-simple-typewriter";
const FeaturePart = ({ data }) => {
  const sectionRef = useRef(null);
  const text = "finance and funding solutions";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [onLoopDone, setonLoopDone] = useState(false);

  let [section_data_1] = data.sections.filter(
    (item) => item.section_name == "Section 1"
  );
  let [section_data_2] = data.sections.filter(
    (item) => item.section_name == "Section 2"
  );
  let collaborators = data.collaborators;

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Set up IntersectionObserver to trigger when the section is visible
  useEffect(() => {
    window?.addEventListener("scroll", (e) => {
      let h = window.scrollY + window.innerHeight / 2;
      if (sectionRef.current) {
        if (h > sectionRef.current.offsetTop) {
          setIsVisible(true);
        }
      }
    });
  }, []);

  // Trigger typing effect when the section is visible
  useEffect(() => {
    console.log(isVisible);
    if (isVisible && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 200); // Adjust the speed here (in milliseconds)
      return () => clearTimeout(timeout);
    }
  }, [isVisible, index]);

  const handleDone = () => {
    setonLoopDone(true);
  };

  return (
    <>
      <section
        className="feature-section section-gap"
        style={{ background: `url(${aboutBg.src})` }}
        ref={sectionRef}
      >
        <div className="container">
          <div
            className="section-title text-center both-border mb-50 wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="300ms"
          >
            <h2 className={onLoopDone ? "loopDone title" : "title"}>
              An advisory firm offering more than <br />
              just{" "}
              <em>
                {isVisible && (
                  <Typewriter
                    words={[" finance and funding solutions"]}
                    onLoopDone={handleDone}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={30}
                    delaySpeed={1000}
                  />
                )}
              </em>
            </h2>

            {/* <h2
              className="title"
              dangerouslySetInnerHTML={{
                __html: section_data_1?.section_title?.replace(/<[^>]*>/g, ""),
              }}
            ></h2> */}
          </div>

          <div className="feature-boxes row justify-content-center">
            <div
              className="col-lg-12 col-md-12 col-12 col-tiny-12 white-text text-center wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
              dangerouslySetInnerHTML={{
                __html: section_data_1?.section_content,
              }}
            ></div>
          </div>

          <div className="row justify-content-center mt-5">
            <div
              className="col-lg-12 col-md-12 col-12 col-tiny-12 text-center wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="1000ms"
            >
              <div className="patner-box">
                <h4
                  dangerouslySetInnerHTML={{
                    __html: section_data_2?.section_title?.replace(
                      /<[^>]*>/g,
                      ""
                    ),
                  }}
                ></h4>
                <div className="patner-logo-col">
                  {/* <ul> */}
                  <Slider {...settings}>
                    {collaborators &&
                      collaborators.length > 0 &&
                      collaborators.map((item) => {
                        return (
                          <div className="logos_item_i" key={item.id}>
                            <div className="mr-4" href="#">
                              <img
                                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${item?.image}`}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </Slider>
                  {/* </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturePart;
