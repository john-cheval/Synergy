import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurServices = ({ data }) => {
  let servicesList = data.posts;
  let servicesListKeys = Object.keys(servicesList);

  const services = Object.values(servicesList);
  let top = 210;

  const getVideoType = (url) => {
    if (url?.endsWith(".mp4")) return "video/mp4";
    if (url?.endsWith(".mov")) return "video/quicktime";
    return "";
  };
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
                </div>
              </div>
            </div>
          </div>
          {services && services.length > 0 && (
            <div
              className={`wow fadeInUp services-box services-box-${Number(
                servicesListKeys[0]
              )}`}
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-12 order-lg-2">
                  <div className="service-img-box service-img-box-left">
                    {[".mp4", ".mov"].some((ext) =>
                      services[0]?.image.endsWith(ext)
                    ) ? (
                      <video
                        autoPlay
                        loop
                        playsInline
                        className="video-solution"
                        muted
                      >
                        <source
                          src={services[0]?.image}
                          type={getVideoType(services[0]?.image)}
                        />
                      </video>
                    ) : (
                      <Image
                        src={services[0]?.image}
                        alt={services[0]?.post_title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="image"
                        // priority={false}
                      />
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 order-lg-1">
                  <div className="service-content">
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: services[0]?.post_title,
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: services[0]?.contact_description,
                      }}
                    ></p>
                    <Link
                      href={`/services/${services[0]?.post_name}`}
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
                          // priority={false}
                        />
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
                  style={{ "--top": `${top}px` /* , zIndex: index + 10 */ }}
                  key={item?.ID || index}
                  data-wow-duration="1000ms"
                  data-wow-delay={`${index * 100}ms`}
                >
                  <div className="container">
                    <div
                      className={`services-box services-box-${Number(
                        servicesListKeys[index + 1]
                      )}`}
                    >
                      <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-12">
                          <div className="service-img-box service-img-box-right">
                            {[".mp4", ".mov"].some((ext) =>
                              item?.image.endsWith(ext)
                            ) ? (
                              <video
                                autoPlay
                                loop
                                playsInline
                                className="video-solution"
                                muted
                              >
                                <source
                                  src={item?.image}
                                  // type={item.media_type}
                                  type={getVideoType(item.media_type)}
                                />
                              </video>
                            ) : (
                              <Image
                                src={item?.image}
                                alt={item?.post_title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="image"
                                // priority={false}
                              />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 pl-lg-5">
                          <div className="service-content">
                            <h3
                              dangerouslySetInnerHTML={{
                                __html: item?.post_title,
                              }}
                            />
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item?.contact_description,
                              }}
                            ></p>
                            <Link
                              href={`/services/${item?.post_name}`}
                              prefetch={true}
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
                                  // priority={false}
                                />
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
                  style={{ "--top": `${top}px` /* zIndex: index + 10 */ }}
                  data-wow-duration="1000ms"
                  data-wow-delay={`${index * 100}ms`}
                >
                  <div className="container">
                    <div
                      className={`services-box services-box-${Number(
                        servicesListKeys[index + 1]
                      )}`}
                    >
                      <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-12 order-lg-2">
                          <div className="service-img-box service-img-box-left">
                            {[".mp4", ".mov"].some((ext) =>
                              item?.image.endsWith(ext)
                            ) ? (
                              <video
                                autoPlay
                                loop
                                playsInline
                                className="video-solution"
                                muted
                              >
                                <source
                                  src={item?.image}
                                  type={getVideoType(item?.image)}
                                />
                              </video>
                            ) : (
                              <Image
                                src={item?.image}
                                type={data?.media_type}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="image"
                                alt={item?.post_title}
                                // priority={false}
                              />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-lg-1">
                          <div className="service-content">
                            <h3
                              dangerouslySetInnerHTML={{
                                __html: item?.post_title,
                              }}
                            />
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item?.contact_description,
                              }}
                            ></p>
                            <Link
                              href={`/services/${item?.post_name}`}
                              prefetch={true}
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
                                  // priority={false}
                                />
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
    </>
  );
};

export default OurServices;
