import Link from "next/link";
import React from "react";

const OurServices = ({ data }) => {
  let [section_data_3] = data.sections.filter(
    (item) => item.section_name == "Section 3"
  );
  let services = data.services;
  let top = 210;
  return (
    <>
      <section
        className="how-it-work-section section-gap stickyWrapper"
        style={{ "--top": `70px` }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-12 col-md-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="1000ms"
            >
              <div className="skill-text">
                <div className="section-title left-border">
                  <h2 className="title">
                    Our <span className="color-text">&nbsp;Services</span>
                  </h2>
                  {/* <h2
                    className="title"
                    dangerouslySetInnerHTML={{
                      __html: section_data_3?.section_title,
                    }}
                  ></h2> */}
                </div>
              </div>
            </div>
          </div>
          {services && services.length > 0 && (
            <div
              className={`wow fadeInUp services-box services-box-${services[0]?.homepage_bg_type}`}
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-12 order-lg-2">
                  <div className="service-img-box service-img-box-left">
                    {services[0].image.indexOf(".mp4") < 0 ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${services[0]?.image}`}
                        type={data?.media_type}
                      />
                    ) : (
                      <video autoPlay loop className="video-solution" muted>
                        <source
                          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${services[0]?.image}`}
                          type={services[0].media_type}
                        />
                      </video>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 order-lg-1">
                  <div className="service-content">
                    <h3
                      dangerouslySetInnerHTML={{ __html: services[0]?.title }}
                    ></h3>
                    <p>{services[0]?.short_description}</p>
                    <Link href={`/services/${services[0]?.slug}`} className="d_btn">
                      Read More
                      <span className="btn-icon">
                        <img src="/img/btn-icon.png" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {services?.length > 1 &&
        services.slice(1, 4).map((item, index) => {
          top = index > 0 ? top + 50 : top;
          let pindex = index + 1;
          let isOdd = pindex % 2 == 0;
          return (
            <>
              {!isOdd && (
                <section
                  className="stickyWrapper wow fadeInUp"
                  style={{ "--top": `${top}px` }}
                  key={item.id}
                  data-wow-duration="1500ms"
                  data-wow-delay={`${index * 200}ms`}
                >
                  <div className="container">
                    <div
                      className={`services-box services-box-${item?.homepage_bg_type}`}
                    >
                      <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-12">
                          <div className="service-img-box service-img-box-right">
                            {item.image.indexOf(".mp4") < 0 ? (
                              <img
                                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${item?.image}`}
                                type={data?.media_type}
                              />
                            ) : (
                              <video
                                autoPlay
                                loop
                                className="video-solution"
                                muted
                              >
                                <source
                                  src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${item?.image}`}
                                  type={item.media_type}
                                />
                              </video>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 pl-lg-5">
                          <div className="service-content">
                            <h3
                              dangerouslySetInnerHTML={{ __html: item?.title }}
                            ></h3>
                            <p>{item?.short_description}</p>
                            <Link
                              href={`/services/${item?.slug}`}
                              prefetch={true}
                              className="d_btn"
                            >
                              Read More
                              <span className="btn-icon">
                                <img src="/img/btn-icon.png" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              {isOdd && (
                <section
                  className="stickyWrapper wow fadeInUp"
                  style={{ "--top": `${top}px` }}
                  data-wow-duration="1500ms"
                  data-wow-delay={`${index * 200}ms`}
                >
                  <div className="container">
                    <div
                      className={`services-box services-box-${item?.homepage_bg_type}`}
                    >
                      <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-12 order-lg-2">
                          <div className="service-img-box service-img-box-left">
                            {item.image.indexOf(".mp4") < 0 ? (
                              <img
                                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${item?.image}`}
                                type={data?.media_type}
                              />
                            ) : (
                              <video
                                autoPlay
                                loop
                                className="video-solution"
                                muted
                              >
                                <source
                                  src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${item?.image}`}
                                  type={item.media_type}
                                />
                              </video>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-lg-1">
                          <div className="service-content">
                            <h3
                              dangerouslySetInnerHTML={{ __html: item?.title }}
                            ></h3>
                            <p>{item?.short_description}</p>
                            <Link
                              href={`/services/${item?.slug}`}
                              prefetch={true}
                              className="d_btn"
                            >
                              Read More
                              <span className="btn-icon">
                                <img src="/img/btn-icon.png" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </>
          );
        })}

      {/* <section className="stickyWrapper" style={{ "--top": `265px` }}>
        <div className="container">
          <div className="services-box services-box-2">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="service-img-box service-img-box-right">
                  <video autoPlay loop className="video-solution" muted>
                    <source src="/video/home-service-2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 pl-lg-5">
                <div className="service-content">
                  <h3>
                    Private <br /> Equity
                  </h3>
                  <p>
                    Private equity (PE) is an asset class consisting of <br />
                    equity securities
                  </p>
                  <a href="#">
                    Read More
                    <span className="btn-icon">
                      <img src="/img/btn-icon.png" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stickyWrapper" style={{ "--top": `330px` }}>
        <div className="container">
          <div className="services-box services-box-3">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-12 order-lg-2">
                <div className="service-img-box service-img-box-left">
                  <video autoPlay loop className="video-solution" muted>
                    <source src="/video/home-service-3.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="service-content">
                  <h3>
                    Merger & <br /> Acquisition
                  </h3>
                  <p>
                    Strategic Alliance is a relationship with one or more <br />
                    other companies
                  </p>
                  <a href="#">
                    Read More
                    <span className="btn-icon">
                      <img src="/img/btn-icon.png" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stickyWrapper" style={{ "--top": `395px` }}>
        <div className="container">
          <div className="services-box services-box-4">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-12">
                <img src="/img/service-4.png" />
              </div>
              <div className="col-lg-6 col-md-12 pl-lg-5">
                <div className="service-content">
                  <h3>
                    Bilateral & <br /> Trade Loans
                  </h3>
                  <p>
                    We arrange bilateral and trade loans <br /> for banks
                  </p>
                  <a href="#">
                    Read More
                    <span className="btn-icon">
                      <img src="/img/btn-icon.png" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default OurServices;
