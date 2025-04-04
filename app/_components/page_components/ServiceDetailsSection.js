"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ServiceDetailsSection = ({ data }) => {
  let top = 80;
  let left = 10;
  const [allSections, setallSections] = useState(data?.section_list);

  useEffect(() => {
    setallSections(data?.section_list);
  }, [data]);

  return (
    <>
      {allSections?.length > 0 &&
        allSections.map((item, index) => {
          let pindex = index + 1;
          top = index > 0 ? top + 20 : top;
          left = index > 0 ? left + 50 : left;

          let cycleIndex = (index % 4) + 1;
          return (
            <section
              className="service-section section-gap stickyWrapper service_sticky detailssspage  wow fadeInUp"
              style={{ "--top": `${top}px` }}
              key={item.id}
              data-wow-duration="1500ms"
              data-wow-delay={`${index + 1 * 500}ms`}
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
    </>
  );
};

export default ServiceDetailsSection;
