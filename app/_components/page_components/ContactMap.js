"use client";
import React, { useState } from "react";

const ContactMap = ({ list }) => {
  const [maptab, setmaptab] = useState(0);

  return (
    <>
      <div className="blog-banner h-100 locations-wraper">
        <ul className="locationTabHeaders">
          {list?.map((map, i) => (
            <li
              key={i}
              onClick={() => setmaptab(i)}
              className={maptab == i ? "active" : ""}
            >
              {map?.title}
            </li>
          ))}
        </ul>
        <div
          className="map-container"
          dangerouslySetInnerHTML={{ __html: list[maptab]?.google_map }}
        ></div>
      </div>
    </>
  );
};

export default ContactMap;
