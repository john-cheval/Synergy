"use client";
import useIsMobile from "@/app/hooks/useInMobile";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ServiceDetailsSection = ({ data }) => {
  const isMobile = useIsMobile();

  let top = 80;
  let left = 10;
  const sectionRefs = useRef([]);

  const [allSections, setallSections] = useState(data?.section_list);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    setallSections(data?.section_list);
  }, [data]);

  const handleScroll = () => {
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 0) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      {allSections?.length > 0 &&
        allSections.map((item, index) => {
          let pindex = index + 1;
          top = index > 0 ? top + 20 : top;
          left = index > 0 ? left + 50 : left;

          let cycleIndex = (index % 4) + 1;
          return (
            <section
              ref={(el) => (sectionRefs.current[index] = el)}
              className="service-section section-gap stickyWrapper service_sticky detailssspage  wow fadeInUp"
              style={{
                position: isSticky
                  ? isMobile
                    ? "static"
                    : "sticky"
                  : "relative",
                top: isSticky ? `${top}px` : "auto",
                // zIndex: 11,
              }}
              key={item?.ID}
              data-wow-duration="1000ms"
              data-wow-delay={`${index + 1 * 300}ms`}
            >
              <div className="container">
                <div
                  className={`row row-eq-height service-content-row-${cycleIndex}`}
                  style={{ transform: `translateX(${left}px)` }}
                >
                  <div className="col-lg-5 col-md-12 d-flex flex-column p-lg-0">
                    <div
                      className={`service-content service-box-content h-100 service-content-${cycleIndex}`}
                    >
                      <h3>{item?.section_title}</h3>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: item?.section_content,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-5 p-lg-0">
                    <div className="blog-banner h-100">
                      <Image
                        src={item?.image}
                        alt={data?.section_title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="image"
                        // priority={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
    </div>
  );
};

export default ServiceDetailsSection;
