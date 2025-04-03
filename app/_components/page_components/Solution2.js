import React from "react";

const Solution2 = ({ data }) => {
  const { section_list, our_values } = data;

  return (
    <>
      <section className="solution-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-12 text-left wow fadeInUp mb-4"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="section-title mb-40 left-border">
                {/* <h2
                  className="title mb-3"
                  dangerouslySetInnerHTML={{
                    __html: section_list[2]?.section_title,
                  }}
                ></h2> */}

                <h3 className="title mb-3">
                  Our <br /> <span class="color-text"> Values&nbsp;</span>
                </h3>

                {section_list[2]?.section_content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: section_list[2]?.section_content,
                    }}
                  ></div>
                )}
              </div>
            </div>
            {our_values &&
              our_values.length > 0 &&
              our_values?.map((item, index) => {
                return (
                  <>
                    {item?.image ? (
                      <div
                        className="col-lg-3 col-md-12 d-flex flex-column text-left wow fadeInRight mb-4 wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay={`${index * 300}ms`}
                        key={item?.id || index}
                      >
                        <div className="box-solution-img h-100">
                          {item?.image && item?.image?.endsWith(".mp4") ? (
                            <video
                              autoPlay
                              loop
                              className="video-solution"
                              muted
                            >
                              <source src={item?.image} type={"video/mp4"} />
                            </video>
                          ) : (
                            <img src={item?.image} alt={item?.heading} />
                          )}
                        </div>
                      </div>
                    ) : (
                      <div
                        className="col-lg-3 col-md-12 d-flex flex-column text-left wow fadeInRight mb-4 wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay={`${index * 300}ms`}
                        key={item?.id || index}
                      >
                        <div className="box-solution h-100">
                          <h4 className="title mb-3"> {item?.heading} </h4>
                          <p
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

export default Solution2;
