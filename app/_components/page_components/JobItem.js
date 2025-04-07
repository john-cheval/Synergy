"use client";
import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const JobItem = ({ data }) => {
  const [open, setopen] = useState(false);

  return (
    <>
      <div
        className={`careers-box ${open ? "open" : ""} wow fadeInUp`}
        data-wow-duration="1000ms"
        data-wow-delay="300ms"
      >
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-9">
            <div className="careers-top-title">
              <h3> {data?.post_title} </h3>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="careers-top-button">
              <a
                target="_blank"
                href={
                  data?.apply_button_link ? data?.apply_button_link : "/contact"
                }
              >
                {" "}
                Apply Now{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4 overflow-hidden">
          <div className="col-lg-12 col-md-12 text-center">
            <div className="careers-content content">
              <div
                className="careers-col"
                dangerouslySetInnerHTML={{
                  __html:
                    "<h4> Responsibilities </h4>" + data?.responsibilities,
                }}
              ></div>
              <div
                className="careers-col"
                dangerouslySetInnerHTML={{
                  __html: "<h4> Requirements </h4>" + data?.requirements,
                }}
              ></div>
            </div>
            <div className="Read-more" onClick={() => setopen(!open)}>
              {!open && (
                <>
                  Read more
                  <TiArrowSortedDown />
                </>
              )}
              {open && (
                <>
                  Read less
                  <TiArrowSortedUp />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobItem;
