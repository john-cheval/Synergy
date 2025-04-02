import React from "react";

const Solution = ({ data ,sectionsData}) => {
  let section_data_5 = sectionsData
  let solutions = data;
  const isImage = (media_type)=>{
    console.log(media_type)
    return media_type.indexOf("image") > 0
  }
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
               {section_data_5?.section_title && <h2
                  className="title mb-3"
                  dangerouslySetInnerHTML={{
                    __html: section_data_5?.section_title,
                  }}
                ></h2>}
                {section_data_5?.section_content &&<div
                  dangerouslySetInnerHTML={{
                    __html: section_data_5?.section_content,
                  }}
                ></div>}
              </div>
            </div>
            {solutions &&
              solutions.length > 0 &&
              solutions.map((item,index) => {
                return (
                  <>
                    {item?.image != "" ? (
                      <div
                        className="col-lg-3 col-md-12 d-flex flex-column text-left wow fadeInRight mb-4 wow fadeInUp" 
                        data-wow-duration="1500ms"
                        data-wow-delay={`${index * 300}ms`}
                        key={item.id}
                      >
                        <div className="box-solution-img h-100">                         
                          {item.media_type.indexOf("image") > -1 ? (
                            <img src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${item?.image}`} alt={item?.media_type} />
                          ) : (
                            <video
                              autoPlay
                              loop
                              className="video-solution"
                              muted
                            >
                              <source
                                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${item?.image}`} type={item?.media_type}
                              />
                            </video>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div
                        className="col-lg-3 col-md-12 d-flex flex-column text-left wow fadeInRight mb-4 wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay={`${index * 300}ms`}
                        key={item.id}
                      >
                        <div className="box-solution h-100">
                          <h4 className="title mb-3"> {item?.heading} </h4>
                          <p> {item?.description} </p>
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
