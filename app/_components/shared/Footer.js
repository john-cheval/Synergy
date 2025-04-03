"use client";
import React, { useEffect, useState } from "react";
import FooterContactForm from "./FooterContactForm";

const Footer = () => {
  const [openMenus, setOpenMenus] = useState({});
  const [services, setServices] = useState([]);
  const [footerContent, setFooterContent] = useState([]);
  const [slpservices, setslpServices] = useState([]);
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const toggleMenu = (index) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    getServicesData();
    getFooterContent();
  }, []);

  const getServicesData = async () => {
    const data = await fetch(`${APIURL}/menu/footer`, {
      cache: "no-store",
    }).then((res) => res.json());
    setServices(data["350"]);
    setslpServices(data["351"]);
  };

  const getFooterContent = async () => {
    const data = await fetch(`${APIURL}/full_details?ID=23`, {
      cache: "no-store",
    }).then((res) => res.json());
    setFooterContent(data);
  };
  const header = footerContent?.request_a_free_heading?.split("<br>");

  return (
    <>
      <footer id="footer-id">
        <div className="container">
          <div className="footer-widget-top">
            <div className="row">
              <div
                className="col-lg-5 col-md-12 text-left wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="500ms"
              >
                <div className="section-title mb-40 left-border">
                  <h2 className="title mb-3">
                    {header?.[0]} <br />
                    <span className="color-text">{header?.[1]}</span>
                  </h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: footerContent?.request_a_free_description,
                    }}
                  ></div>
                </div>
              </div>

              <div
                className="col-lg-7 col-md-12 text-left wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="800ms"
              >
                <div className="footer-form">
                  <FooterContactForm />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-widget">
            <div className="row mt-5 pt-5">
              <div className="col-lg-4 col-md-12 col-sm-4 text-center">
                <div className="widget site-info-widget">
                  <div className="footer-logo">
                    <a href="/">
                      {" "}
                      <img src="/img/footer-logo.png" alt="images" />{" "}
                    </a>
                  </div>

                  <p style={{ fontSize: "13px" }}>
                    {footerContent?.footer_desccription}
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-3 text-center">
                <div
                  className={`widget site-info-widget ${
                    openMenus[1] ? "show" : ""
                  }`}
                >
                  <h5 onClick={() => toggleMenu(1)}> Our Services </h5>
                  <div className={`footer-menu-vartical `}>
                    {services && services.length > 0 && (
                      <ul>
                        {services.map((service) => {
                          return (
                            <li key={service.id}>
                              <a
                                href={`${service.url}`}
                                dangerouslySetInnerHTML={{
                                  __html: service.title,
                                }}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-3 text-center">
                <div
                  className={`widget site-info-widget ${
                    openMenus[2] ? "show" : ""
                  }`}
                >
                  <h5 onClick={() => toggleMenu(2)}> Specialized Services</h5>
                  <div
                    className={`footer-menu-vartical ${
                      openMenus[2] ? "show" : ""
                    }`}
                  >
                    {slpservices && slpservices.length == 0 && (
                      <p>No Specialized services yet!</p>
                    )}
                    {slpservices && slpservices.length > 0 && (
                      <ul>
                        {slpservices.map((service) => {
                          return (
                            <li key={service.id}>
                              <a
                                href={`${service.url}`}
                                dangerouslySetInnerHTML={{
                                  __html: service.title,
                                }}
                              />
                              {/* {service.title.replace(/<[^>]*>/g, "")}{" "}
                              </a> */}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 col-sm-2 text-center">
                <div
                  className={`widget site-info-widget ${
                    openMenus[3] ? "show" : ""
                  }`}
                >
                  <h5 onClick={() => toggleMenu(3)}> Connect With Us </h5>
                  <div
                    className={`footer-menu-vartical ${
                      openMenus[3] ? "show" : ""
                    }`}
                  >
                    <ul>
                      <li>
                        <span>T :</span>
                        <a
                          href={`tel:${footerContent?.phone_number?.replace(
                            /\s+/g,
                            ""
                          )}`}
                        >
                          {" "}
                          {footerContent?.phone_number}{" "}
                        </a>
                      </li>
                      <li>
                        <span>T :</span>
                        <a
                          href={`tel:${footerContent?.whatsapp_number?.replace(
                            /\s+/g,
                            ""
                          )}`}
                        >
                          {footerContent?.whatsapp_number}{" "}
                        </a>
                      </li>
                      <li>
                        <span>E :</span>
                        <a href={`emailto:${footerContent?.email_address}`}>
                          {footerContent?.email_address}
                        </a>
                      </li>
                      <li>
                        {/* <span style={{ color: "#fff" }}>PO</span>{" "} */}
                        <span style={{ color: "#fff" }}>
                          {" "}
                          {footerContent?.address}
                        </span>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="row align-items-center justify-content-center mt-1 pt-2">
              <div className="col-lg-4 col-md-12 col-sm-4 text-left">
                <div className="footer-bottom-center-menu">
                  <ul>
                    <li>
                      {" "}
                      <a href="https://chevalme.com">
                        {" "}
                        Designed and Developed by Cheval{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-5 text-center">
                <div className="footer-bottom-center-menu">
                  <ul>
                    <li>
                      {" "}
                      <a href="/privacy-policy"> Privacy Policy </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/terms-conditions"> Terms & Conditions </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/contact"> Contact Us </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-3 text-right">
                <p className="copyright-text">
                  © <span className="color-text"> Synergy 2025. </span> All
                  Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
