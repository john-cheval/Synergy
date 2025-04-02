"use client";
import React, { useState } from "react";

const ContactMap = () => {
  const [maptab, setmaptab] = useState(0);

  return (
    <>
      <div className="blog-banner h-100 locations-wraper">
        <ul className="locationTabHeaders">
          <li
            onClick={() => setmaptab(0)}
            className={maptab == 0 ? "active" : ""}
          >
            Dubai
          </li>
          <li
            onClick={() => setmaptab(1)}
            className={maptab == 1 ? "active" : ""}
          >
            Sharjah
          </li>
          <li
            onClick={() => setmaptab(2)}
            className={maptab == 2 ? "active" : ""}
          >
            UK
          </li>
        </ul>
        {maptab == 0 && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5605245458028!2d55.259955899999994!3d25.184313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6900458ae623%3A0x5ff6b24e9db43266!2sAl%20Manara%20Tower!5e0!3m2!1sen!2sin!4v1725511642752!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
        {maptab == 1 && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.0595693187233!2d55.367482!3d25.302202599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5daf1596e36d%3A0x7e16d74896e76902!2sAl%20Areej%20Business%20Center%20Sharjah!5e0!3m2!1sen!2sin!4v1725511685236!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
        {maptab == 2 && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.3398835952257!2d0.029312900000000003!3d51.3968093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8aa5b80197d03%3A0xae7fa68310e20a9c!2s40-42%20Homesdale%20Rd%2C%20Bromley%20BR2%209LD%2C%20UK!5e0!3m2!1sen!2sin!4v1725511747198!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </>
  );
};

export default ContactMap;
