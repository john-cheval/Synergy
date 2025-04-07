import Image from "next/image";
import React from "react";

const Solution = ({ data }) => {
  const { one_stop_solution_description, one_stop_solution_list } = data;

  const getVideoType = (url) => {
    if (url.endsWith(".mp4")) return "video/mp4";
    if (url.endsWith(".mov")) return "video/quicktime";
    return "";
  };
  return (
    <>
      <section className="solution-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-12 text-left wow fadeInUp mb-4"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="section-title mb-40 left-border">
                <h2 className="title mb-3">
                  <p>
                    One-Stop <br />
                    <span class="color-text">Solution&nbsp;</span>
                  </p>
                </h2>
                {one_stop_solution_description && (
                  <div
                    className="center"
                    dangerouslySetInnerHTML={{
                      __html: one_stop_solution_description,
                    }}
                  ></div>
                )}
              </div>
            </div>
            {one_stop_solution_list &&
              one_stop_solution_list.length > 0 &&
              one_stop_solution_list.map((item, index) => {
                return (
                  <>
                    {item?.file ? (
                      <div
                        className="col-lg-3 col-md-12 d-flex flex-column text-left wow fadeInRight mb-4 wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay={`${index * 150}ms`}
                        key={item.id}
                      >
                        <div className="box-solution-img h-100">
                          {
                            /* item?.file && item?.file?.endsWith(".mp4") */ [
                              ".mp4",
                              ".mov",
                            ].some((ext) => item?.file.endsWith(ext)) ? (
                              <video
                                autoPlay
                                loop
                                playsInline
                                preload="auto"
                                className="video-solution"
                                muted
                              >
                                <source
                                  src={item?.file}
                                  // type={item?.media_type}
                                  type={getVideoType(item?.file)}
                                />
                              </video>
                            ) : (
                              <Image
                                src={item?.file}
                                alt={item?.title || "image"}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="image"
                                priority={false}
                              />
                            )
                          }
                        </div>
                      </div>
                    ) : (
                      <div
                        className="col-lg-3 col-md-12 d-flex flex-column text-left wow fadeInRight mb-4 wow fadeInUp"
                        data-wow-duration="1000ms"
                        data-wow-delay={`${index * 150}ms`}
                        key={item.id}
                      >
                        <div className="box-solution h-100">
                          <h4 className="title mb-3"> {item?.title} </h4>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Solution;
