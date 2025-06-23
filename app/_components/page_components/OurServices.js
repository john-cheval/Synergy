"use client";
import useIsMobile from "@/app/hooks/useInMobile";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const OurServices = ({ service }) => {
  let servicesList = service.posts;
  let servicesListKeys = Object.keys(servicesList);
  const services = Object.values(servicesList);
  let top = 210;
  const [headerSticky, setHeaderSticky] = useState(false);
  const isMobile = useIsMobile();

  const getVideoType = (url) => {
    if (url?.endsWith(".mp4")) return "video/mp4";
    if (url?.endsWith(".mov")) return "video/quicktime";
    return "";
  };

  const [isSticky, setIsSticky] = useState(true);

  const sectionRefs = useRef([]);
  const headerRef = useRef(null);

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

    if (headerRef.current) {
      const headerRect = headerRef.current.getBoundingClientRect();
      if (headerRect.top <= 70) {
        setHeaderSticky(true);
      } else {
        setHeaderSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className={`how-it-work-section section-gap ${
          isMobile ? "stickyWrapper" : ""
        } `}
        style={{ "--top": `70px` }}
      >
        <div className="container">
          <div
            className={`row align-items-center justify-content-center`}
            ref={headerRef}
            style={{
              position: isSticky
                ? isMobile
                  ? "static"
                  : "sticky"
                : "relative",
              top: isSticky ? "70px" : "auto",
            }}
          >
            <div className="col-lg-12 col-md-12 wow fadeInUp">
              <div className="skill-text ">
                <div className="section-title ">
                  <h2 className="title">
                    Our <span className="color-text">Services</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {services &&
            services.length > 0 &&
            services.slice(0, 4)?.map((service, index) => {
              top = index > 0 ? top + 50 : top;
              return (
                <section
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className={`stickyWrapper wow fadeInUp`}
                  key={service?.ID || index}
                  style={{
                    "--top": `${top}px`,
                    position: isSticky
                      ? isMobile
                        ? "static"
                        : "sticky"
                      : "relative",
                    top: isSticky ? `${top}px` : "auto",
                    // zIndex: 11,
                  }}
                >
                  <div className="container">
                    <div className={`services-box services-box-${index + 1}`}>
                      <div className="row align-items-center justify-content-center">
                        {index % 2 === 0 ? (
                          <>
                            <div className="col-lg-6 col-md-12">
                              <div className="service-img-box service-img-box-right">
                                {[".mp4", ".mov"].some((ext) =>
                                  service.image.endsWith(ext)
                                ) ? (
                                  <video
                                    autoPlay
                                    loop
                                    playsInline
                                    className="video-solution"
                                    muted
                                  >
                                    <source
                                      src={service.image}
                                      type={getVideoType(service.image)}
                                    />
                                  </video>
                                ) : (
                                  <Image
                                    src={service.image}
                                    alt={service.post_title || "Image"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="image"
                                  />
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                              <div className="service-content">
                                <h3
                                  dangerouslySetInnerHTML={{
                                    __html: service.post_title,
                                  }}
                                />
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: service.contact_description,
                                  }}
                                ></p>
                                <Link
                                  href={`/services/${service.post_name}`}
                                  className="d_btn"
                                >
                                  Read More
                                  <span className="btn-icon">
                                    <Image
                                      src="/img/btn-icon.png"
                                      alt="icon"
                                      width={0}
                                      height={0}
                                      sizes="100vw"
                                      className="image"
                                    />
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="col-lg-6 col-md-12">
                              <div className="service-content">
                                <h3
                                  dangerouslySetInnerHTML={{
                                    __html: service.post_title,
                                  }}
                                />
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: service.contact_description,
                                  }}
                                ></p>
                                <Link
                                  href={`/services/${service.post_name}`}
                                  className="d_btn"
                                >
                                  Read More
                                  <span className="btn-icon">
                                    <Image
                                      src="/img/btn-icon.png"
                                      alt="icon"
                                      width={0}
                                      height={0}
                                      sizes="100vw"
                                      className="image"
                                    />
                                  </span>
                                </Link>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                              <div className="service-img-box service-img-box-left">
                                {[".mp4", ".mov"].some((ext) =>
                                  service.image.endsWith(ext)
                                ) ? (
                                  <video
                                    autoPlay
                                    loop
                                    playsInline
                                    className="video-solution"
                                    muted
                                  >
                                    <source
                                      src={service.image}
                                      type={getVideoType(service.image)}
                                    />
                                  </video>
                                ) : (
                                  <Image
                                    src={service.image}
                                    alt={service.post_title || "Image"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="image"
                                  />
                                )}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default OurServices;
