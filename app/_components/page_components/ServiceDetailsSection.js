"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ServiceDetailsSection = ({ data }) => {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  let top = 80;
  let left = 0;
  const [allSections, setallSections] = useState(data?.section_list);
  const [loading, setloading] = useState(false);
  const [orderingdata, setorderingdata] = useState([]);
  useEffect(() => {
    setallSections(data?.section_list);
    // getorderingdata(data?.meta_data?.id);
  }, [data]);

  //   useEffect(() => {
  //     if (data?.meta_data?.id) {
  //       getorderingdata(data?.meta_data?.id);
  //     }
  //   }, [data?.meta_data?.id]);
  // const getorderingdata = async (selectedID) => {
  //   setloading(true);
  //   const { data } = await fetch(
  //     `${APIURL}/cms/reorderServices/${selectedID}`,
  //     { cache: "no-store" }
  //   ).then((res) => res.json());
  //   setorderingdata(data);
  //   setReorder(data);
  // };

  // const setReorder = (orderingdata) => {
  //   console.log(orderingdata);
  //   if (orderingdata.length > 0) {
  //     const reorderedArray = orderingdata
  //       .map((orderItem) =>
  //         allSections.find(
  //           (mainItem) => mainItem.id === orderItem.service_section_id
  //         )
  //       )
  //       .filter((item) => item);
  //     setallSections(reorderedArray);
  //   }
  // };

  return (
    <>
      {allSections?.length > 0 &&
        allSections.map((item, index) => {
          let pindex = index + 1;
          top = index > 0 ? top + 20 : top;
          left = index > 0 ? left + 50 : left;
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
                  className={`row row-eq-height service-content-row-${
                    item?.bg_Type ? item.bg_Type : 1
                  }`}
                  style={{ transform: `translateX(${left}px)` }}
                >
                  <div className="col-lg-5 col-md-12 d-flex flex-column p-lg-0">
                    <div
                      className={`service-content service-box-content h-100 service-content-${
                        item?.bg_Type ? item.bg_Type : 1
                      }`}
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
