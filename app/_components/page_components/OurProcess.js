"use client";
import React, { useEffect, useState } from "react";
let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const OurProcess = ({ data }) => {
  const { our_process_description, our_process_heading, our_process_list } =
    data;

  const [allProcess, setallProcess] = useState(data.process);
  const [loading, setloading] = useState(false);
  const [orderingdata, setorderingdata] = useState([]);
  // let [section_data_4] = data.sections.filter(
  //   (item) => item.section_name == "Section 4"
  // );
  // let process = data.process;

  // useEffect(() => {
  //   setallProcess(data?.process);
  //   getorderingdata();
  // }, [data]);

  // const getorderingdata = async (selectedID) => {
  //   setloading(true);
  //   const { data } = await fetch(`${APIURL}/cms/reorderProcess`, {
  //     cache: "no-store",
  //   }).then((res) => res.json());
  //   setorderingdata(data);
  //   setReorder(data);
  // };

  // const setReorder = (orderingdata) => {
  //   console.log(orderingdata);
  //   if (orderingdata.length > 0) {
  //     const reorderedArray = orderingdata
  //       .map((orderItem) =>
  //         allProcess.find((mainItem) => mainItem.id === orderItem.process_id)
  //       )
  //       .filter((item) => item);
  //     setallProcess(reorderedArray);
  //   }
  // };

  return (
    <>
      <section className="Process-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-12 text-left wow fadeInUp stickyLeftDesktop"
              data-wow-duration="1500ms"
              data-wow-delay="1000ms"
            >
              <div className="skill-text">
                <div className="section-title mb-40 left-border">
                  <h2
                    className="title mb-3"
                    // dangerouslySetInnerHTML={{
                    //   __html: our_process_heading,
                    // }}
                  >
                    <p>
                      Our <br />
                      <span class="color-text">Process&nbsp;</span>
                    </p>
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: our_process_description,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              {our_process_list &&
                our_process_list.length > 0 &&
                our_process_list.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      className="Process-list-col wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay={`${index * 200}ms`}
                    >
                      <div className="Process-list-number">
                        <h5> {index <= 9 ? `0` + (index + 1) : index + 1} </h5>
                      </div>
                      <div className="Process-list-title">
                        <h4>{item?.title}</h4>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                        className="Process-list-number"
                      ></div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProcess;
